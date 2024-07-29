import React from 'react';
import { View, Text, Image } from 'react-native';

export default function DetailsScreen({ route }) {
  const { data } = route.params;

  // Example logic to determine the status based on barcode data
  const isPaid = checkIfBarcodeIsPaid(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scanned Data:</Text>
      <Text>{data}</Text>
      {isPaid ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={require('./images/tick.png')} // Replace with the path to your tick mark image
            style={{ width: 50, height: 50 }}
          />
          <Text>Paid</Text>
        </View>
      ) : (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={require('./images/wrong.png')} // Replace with the path to your wrong mark image
            style={{ width: 50, height: 50 }}
          />
          <Text>Not Paid</Text>
        </View>
      )}
    </View>
  );
}

// Example logic to determine the status based on barcode data
function checkIfBarcodeIsPaid(barcodeData) {
  // Implement your logic here
  // Return true if paid, false if not paid
  // You might compare the barcode data with a database or specific criteria
  return barcodeData === 'some_paid_identifier';
}
