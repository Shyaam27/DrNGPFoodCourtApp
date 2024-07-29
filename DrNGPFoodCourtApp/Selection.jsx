import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Selection({ navigation }) {
  useEffect(() => {
    // You can keep any other initialization code or effects here.
  }, []);

  return (
    <View style={styles.container}>
      {/* Content */}
      <Image
        source={require('./foodImages/background_selection.jpg')} // Replace with your image path
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.heading}>Select a Meal</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FoodItems', { meal: 'Breakfast' })}
        >
          <Text style={styles.buttonText}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('lunch', { meal: 'Lunch' })}
        >
          <Text style={styles.buttonText}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('snack', { meal: 'Snacks' })}
        >
          <Text style={styles.buttonText}>Snacks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Set text color to white
    textShadowColor: 'black', // Add text shadow color
    textShadowOffset: { width: 1, height: 1 }, // Add text shadow offset
    textShadowRadius: 5, // Add text shadow radius
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#00B4DB',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
