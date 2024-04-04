import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import IniciarSesion from './IniciarSesion/IniciarSesion';
import Registro from './Registro/Registro';

const Stack = createStackNavigator();

export default function App() {
  const [loggedin, setLoggedIn] = useState(
    AsyncStorage.getItem('loggedin') === 'true'
  );

  useEffect(() => {
    AsyncStorage.setItem('loggedin', loggedin);
  }, [loggedin]);

  const renderScreen = () => {
    return loggedin ? <Text>HOME</Text> : <IniciarSesion setLoggedIn={setLoggedIn} />;
  };

  const renderRegistro = () => {
    return loggedin ? <Text>HOME</Text> : <Registro setLoggedIn={setLoggedIn} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IniciarSesion" component={renderScreen} />
        <Stack.Screen name="Registro" component={renderRegistro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
