import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import IniciarSesion from './IniciarSesion/IniciarSesion';
import Registro from './Registro/Registro';

const Stack = createStackNavigator();

export default function App() {
  const [loggedin, setLoggedIn] = useState(false); // Inicializa con false

  useEffect(() => {
    AsyncStorage.getItem('loggedin').then(value => {
      setLoggedIn(value === 'true');
    });
  }, []); // Solo se ejecuta una vez al cargar el componente


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          initialParams={{ setLoggedIn: setLoggedIn }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          initialParams={{ setLoggedIn: setLoggedIn }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
