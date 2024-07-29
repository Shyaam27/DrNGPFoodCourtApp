import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FrontTransition() {
  const navigation = useNavigation();

  const navigateToSelection = () => {
    navigation.navigate('Selection');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./foodImages/background_front.jpg')}
        style={styles.backgroundImage}
      >
        <Image
          source={require('./back5.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Dr. N. G. P. Food Court</Text>
        <TouchableOpacity
          onPress={navigateToSelection}
          style={styles.button}
        >
          <Text style={styles.buttonText}>I'm Hungry</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
