import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  Linking,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown'; // Import the library component
import {listaDePrecios} from '../../constants/Precios';
import RNFetchBlob from 'rn-fetch-blob';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  productContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cartContainer: {
    paddingTop: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemDetails: {
    flexDirection: 'column',
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    //color: '#888',
  },
  quantityInput: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
const calculateTotal = (items, d_venta) => {
  return items.reduce(
    (total, item) =>
      total + parseFloat(item.product.price) * item.quantity * d_venta,
    0,
  );
};
const ProductList = ({products, addToCart}) => {
  const productData = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price.toString(), // Convert price to string
  }));

  return (
    <View>
      <View style={styles.productContainer}>
        <SearchableDropdown
          onItemSelect={item => addToCart(item.id)}
          onTextChange={text => console.log(text)} // You can implement your own text change logic here
          containerStyle={{padding: 5}}
          textInputStyle={{
            fontSize: 16,
          }}
          itemStyle={{
            fontSize: 16,
            borderWidth: 1,
            padding: 5,
            borderBottomWidth: 0,
          }}
          itemTextStyle={{fontSize: 16}}
          // itemsContainerStyle={{maxHeight: '60%'}}
          items={productData}
          placeholder="Buscar productos..."
          defaultIndex={null}
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const ShoppingCart = ({cartItems, removeFromCart, updateQuantity, d_venta}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      width: '100%',
    }}>
    <ScrollView
      contentContainerStyle={[
        styles.cartContainer,
        {
          justifyContent: 'flex-end',
          width: '100%',
        },
      ]}>
      <View
        style={[
          styles.cartItem,
          {
            width: '95%',
            gap: 10,
          },
        ]}>
        <View style={[styles.cartItemDetails, {width: '60%'}]}>
          <Text style={styles.cartItemName}>Producto</Text>
        </View>
        <View style={{}}>
          <Text style={styles.cartItemName}>Cantidad</Text>
        </View>
        <View style={{width: '15%'}}></View>
      </View>
      {cartItems.map(item => (
        <View
          key={item.id}
          style={[
            styles.cartItem,
            {
              gap: 10,
            },
          ]}>
          <View
            style={[
              styles.cartItemDetails,
              {
                width: '60%',
              },
            ]}>
            <Text
              style={[
                styles.cartItemName,
                {
                  flexWrap: 'wrap',
                },
              ]}>
              {item.product.name}
            </Text>
            <Text style={styles.cartItemPrice}>
              L. {(item.product.price * d_venta).toFixed(2)}
            </Text>
          </View>
          <View style={{}}>
            <TextInput
              style={[styles.quantityInput]}
              keyboardType="numeric"
              value={item.quantity.toString()}
              onChangeText={text => {
                const parsedValue = text !== '' ? parseInt(text, 10) : 0;
                updateQuantity(item.id, parsedValue);
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '15%',
              backgroundColor: '#1e90ff',
              padding: 12,
              marginRight: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
            onPress={() => removeFromCart(item.id)}>
            {/* <Button title="Remover" onPress={() => removeFromCart(item.id)} > */}
            <MaIcon name="trash-can" size={18} color={'white'} />
            {/* </Button> */}
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
    <Text style={styles.totalPrice}>
      Total: L. {calculateTotal(cartItems, d_venta).toFixed(2)}
    </Text>
  </View>
);

// CotizadorScreen component
const CotizadorScreen = () => {
  const [e_compra, setE_compra] = useState(0);
  const [e_venta, setE_venta] = useState(0);
  const [d_compra, setD_compra] = useState(0);
  const [d_venta, setD_venta] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productId => {
    const selectedProductObj = listaDePrecios.find(
      product => product.id === productId,
    );
    const cartItem = cartItems.find(item => item.product.id === productId);

    if (cartItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.product.id === productId) {
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {id: Date.now(), product: selectedProductObj, quantity: 1},
      ]);
    }

    setSelectedProduct('');
  };

  useEffect(() => {
    const url = 'https://www.banpais.hn/divisas/barradolar.php';

    // Make an HTTP GET request to the URL
    RNFetchBlob.fetch('GET', url, {
      // Request headers
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'max-age=0',
      'Sec-Ch-Ua':
        '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'cross-site',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      Referer: 'https://www.google.com/',
      'Referrer-Policy': 'origin',
    })
      .then(response => {
        // Check the response status
        if (response.respInfo.status === 200) {
          // Parse the HTML content
          const htmlContent = response.data;

          // Use regular expressions to extract the values of e_compra, e_venta, d_compra, and d_venta
          const regexECompra = /var e_compra = (\d+\.\d+);/;
          const regexEVenta = /var e_venta = (\d+\.\d+);/;
          const regexDCompra = /var d_compra = (\d+\.\d+);/;
          const regexDVenta = /var d_venta = (\d+\.\d+);/;

          const e_compraMatch = regexECompra.exec(htmlContent);
          const e_ventaMatch = regexEVenta.exec(htmlContent);
          const d_compraMatch = regexDCompra.exec(htmlContent);
          const d_ventaMatch = regexDVenta.exec(htmlContent);

          if (e_compraMatch && e_ventaMatch && d_compraMatch && d_ventaMatch) {
            setE_compra(parseFloat(e_compraMatch[1]));
            setE_venta(parseFloat(e_ventaMatch[1]));
            setD_compra(parseFloat(d_compraMatch[1]));
            setD_venta(parseFloat(d_ventaMatch[1]));
          } else {
            console.error('No matches found');
          }
        } else {
          console.error(`HTTP error! Status: ${response.respInfo.status}`);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const removeFromCart = itemId => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: newQuantity};
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const handleEmailPress = () => {
    let url =
      'mailto:sac@grupocadelga.com?subject=Cotización&body=Buenas tardes, me gustaría cotizar los siguientes productos:\n\n';
    cartItems.forEach(item => {
      url += `${item.quantity} ${item.product.name} $${item.product.price}\n`;
    });
    Linking.openURL(url);
  };
  return (
    <View style={{flex: 1, justifyContent: 'space-between', width: '100%'}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.8)',
        }}>
        <View style={[styles.container, {justifyContent: 'space-between'}]}>
          <View>
            <ProductList
              products={listaDePrecios}
              selectedProduct={selectedProduct}
              onProductChange={setSelectedProduct}
              addToCart={addToCart}
            />
          </View>
          <View
            style={{
              flex: 1, // Take up all available space
              justifyContent: 'flex-end', // Align items to the bottom
              alignContent: 'flex-end', // Align items to the bottom
              width: '100%',
            }}>
            <ShoppingCart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              d_venta={d_venta}
            />
          </View>
          <Button
            onPress={() => handleEmailPress()}
            title="Enviar Cotización"
          />
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 10,
            }}>
            <Text>Tipo de cambio: {e_venta.toFixed(4)} HNL por 1 USD</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CotizadorScreen;
