import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  SafeAreaView,
  Linking,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import SearchableDropdown from 'react-native-searchable-dropdown'; // Import the library component
import {listaDePrecios} from '../../constants/Precios';

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
    color: '#888',
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
const calculateTotal = items => {
  return items.reduce((total, item) => total + item.product.price, 0);
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

const ShoppingCart = ({cartItems, removeFromCart, updateQuantity}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
    }}>
    <ScrollView
      contentContainerStyle={[
        styles.cartContainer,
        {
          justifyContent: 'flex-end',
        },
      ]}>
      {cartItems.map(item => (
        <View
          key={item.id}
          style={[
            styles.cartItem,
            {
              width: '95%',
              gap: 10,
            },
          ]}>
          <View style={[styles.cartItemDetails, {width: '60%'}]}>
            <Text style={styles.cartItemName}>{item.product.name}</Text>
            <Text style={styles.cartItemPrice}>${item.product.price}</Text>
          </View>
          <View
            style={{
              width: '15%',
            }}>
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
          <View style={{width: '25%'}}>
            <Button title="Remover" onPress={() => removeFromCart(item.id)} />
          </View>
        </View>
      ))}
    </ScrollView>
    <Text style={styles.totalPrice}>
      Total: ${calculateTotal(cartItems).toFixed(2)}
    </Text>
  </View>
);

// CotizadorScreen component
const CotizadorScreen = () => {
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
      'mailto:support@example.com?subject=Cotización&body=Buenas tardes, me gustaría cotizar los siguientes productos:\n\n';
    cartItems.forEach(item => {
      url += `${item.quantity} ${item.product.name} $${item.product.price}\n`;
    });
    Linking.openURL(url);
  };
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={{flex: 1, justifyContent: 'space-between'}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          rowGap: 10,
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
            }}>
            <ShoppingCart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          </View>
          <Button
            onPress={() => handleEmailPress()}
            title="Enviar Cotización"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CotizadorScreen;
