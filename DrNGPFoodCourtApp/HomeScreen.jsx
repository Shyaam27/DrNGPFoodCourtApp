import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function HomeScreen({ navigation }) {
  const [barcodeData, setBarcodeData] = useState('');

  const handleBarCodeRead = (result) => {
    setBarcodeData(result.data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RNCamera
        style={{ flex: 1, width: '100%' }}
        onBarCodeRead={handleBarCodeRead}
      />
      {barcodeData ? (
        <Button
          title="View Details"
          onPress={() => navigation.navigate('Details', { data: barcodeData })}
        />
      ) : null}
    </View>
  );
}
