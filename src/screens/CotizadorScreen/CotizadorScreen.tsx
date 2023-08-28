import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 20,
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
const ProductList = ({
  products,
  selectedProduct,
  onProductChange,
  addToCart,
}) => (
  <ScrollView>
    <View style={styles.productContainer}>
      {products.map(product => (
        <View key={product.id} style={{marginBottom: 10}}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>L{product.price}</Text>
          <Button title="Añadir" onPress={() => addToCart(product.id)} />
        </View>
      ))}
    </View>
  </ScrollView>
);

const ShoppingCart = ({cartItems, removeFromCart, updateQuantity}) => (
  <View style={styles.cartContainer}>
    {cartItems.map(item => (
      <View key={item.id} style={styles.cartItem}>
        <View style={styles.cartItemDetails}>
          <Text style={styles.cartItemName}>{item.product.name}</Text>
          <Text style={styles.cartItemPrice}>${item.product.price}</Text>
        </View>
        <TextInput
          style={styles.quantityInput}
          value={item.quantity.toString()}
          onChangeText={text => updateQuantity(item.id, parseInt(text, 10))}
        />
        <Button title="Remover" onPress={() => removeFromCart(item.id)} />
      </View>
    ))}
    <Text style={styles.totalPrice}>Total: L{calculateTotal(cartItems)}</Text>
  </View>
);

// CotizadorScreen component
const CotizadorScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const products = [
    {id: 1, name: 'Fetrilizante A', price: 10},
    {id: 2, name: 'Fetrilizante B', price: 20},
    // Add more products
  ];

  const addToCart = productId => {
    const selectedProductObj = products.find(
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

  const calculateTotal = items => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  return (
    <View style={styles.container}>
      {/* <ProductList
        products={products}
        selectedProduct={selectedProduct}
        onProductChange={setSelectedProduct}
        addToCart={addToCart}
      />
      <ShoppingCart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      /> */}
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 14.0827,
          longitude: -87.20681,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => {
          console.log(region);
        }}>
        <Marker
          coordinate={{
            latitude: 14.0827,
            longitude: -87.20681,
          }}
          //image={`http://openweathermap.org/img/w/${'10d'}.png`}
          title="Mi ubicación"
          description="Descripción de mi ubicación">
          <View
            style={{
              backgroundColor: 'rgba(255,0,0,0.5)',
              padding: 10,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Mi ubicación</Text>
            <Image
              //source={(uri = `http://openweathermap.org/img/w/${'10d'}.png`)}
              source={{
                uri: `http://openweathermap.org/img/w/10d.png`,
              }}
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
              resizeMode="contain"
            />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default CotizadorScreen;
