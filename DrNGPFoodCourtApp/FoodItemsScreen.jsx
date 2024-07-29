// FoodItemsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function FoodItemsScreen({ route }) {
  const { refresh } = route.params;

  return (
    <View>
      <Text>FoodItemsScreen Content</Text>
    </View>
  );
}
