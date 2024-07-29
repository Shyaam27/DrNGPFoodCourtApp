import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const foodData = [
  { id: '1', name: 'French Fries', price: 5, image: require('./foodImages/food1.jpeg') },
  { id: '2', name: 'salad', price: 7, image: require('./foodImages/food2.jpeg') },
  { id: '3', name: 'Alfaham', price: 7, image: require('./foodImages/food3.jpeg') },
  { id: '4', name: 'Burger', price: 7, image: require('./foodImages/food4.jpeg') },
  { id: '5', name: 'Chips', price: 7, image: require('./foodImages/food5.jpeg') },
  { id: '6', name: 'Noodles', price: 7, image: require('./foodImages/food6.jpeg') },
  { id: '7', name: 'Long Burger', price: 7, image: require('./foodImages/food7.jpeg') },
  { id: '8', name: 'Panner Stick', price: 7, image: require('./foodImages/food8.jpeg') },
  { id: '9', name: 'Beef Steak', price: 7, image: require('./foodImages/food9.jpeg') },
  { id: '10', name: 'Half Boil', price: 7, image: require('./foodImages/food10.jpeg') },
  // Add more food items here with their respective image paths
];

export default function FoodItems({ navigation }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If item is already in cart, update the quantity and total price
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart([...cart, { ...item, quantity: 1 }]);
      setCartTotal(cartTotal + item.price);
    } else {
      // If item is not in cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
      setCartTotal(cartTotal + item.price);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Breakfast</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart, cartTotal })}>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
  data={foodData}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>₹{item.price}</Text>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.addToCartButton}
          disabled={!!itemInCart} // Disable the button if the item is already in the cart
        >
          <Text style={styles.addToCartButtonText}>
            {itemInCart ? 'Added to Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }}
/>

      <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart, cartTotal })} style={styles.viewCartButton}>
        <Text style={styles.viewCartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
