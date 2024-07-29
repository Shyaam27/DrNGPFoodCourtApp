import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FoodItems from './FoodItems';
import Cart from './Cart';
import FrontTransition from './FrontTransition';
import Selection from './Selection';
import lunch from './lunch';
import snack from './snack';
import BillPage from './BillPage';
import QRCodePage from './QRCodePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontTransition">
        <Stack.Screen
          name="FrontTransition"
          component={FrontTransition}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Selection" component={Selection} /> 
        <Stack.Screen name="FoodItems" component={FoodItems} />
        <Stack.Screen name="lunch" component={lunch} />
        <Stack.Screen name="snack" component={snack} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="BillPage" component={BillPage} />
        <Stack.Screen name="QRCodePage" component={QRCodePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
