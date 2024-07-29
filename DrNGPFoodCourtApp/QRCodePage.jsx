import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodePage({ route }) {
  const { billInfo } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require('./foodImages/background_qr.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.qrContainer}>
        <QRCode value={billInfo} size={200} />
      </View>
      <Text style={styles.title}>Bill & Transaction Details</Text>
      <Text style={styles.details}>{billInfo}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7, // Adjust the opacity for a subtle background image
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  details: {
    fontSize: 24,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
