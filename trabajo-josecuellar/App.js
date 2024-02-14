import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';r
import Login from './src/components/LoginPage.js';
import ControlPanel from './src/components/ControlPanel.js';
import Invoice from './src/components/invoicePage.js';
import Register from './src/components/RegisterPage.js';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}
        options ={{title: "Inicio de Sesion"}}/>
        <Stack.Screen name="Registro" component={Register}
        options ={{title: "Registro"}}/>
        <Stack.Screen name="Control Panel" component={ControlPanel}
        options ={{title: "ControlPanel"}}/>
        <Stack.Screen name="Invoice" component={Invoice}
        options ={{title: "Invoice"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}