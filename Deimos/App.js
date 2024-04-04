import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IniciarSesion from './IniciarSesion/IniciarSesion'
import Registro from './Registro/Registro'
const Stack = createStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="IniciarSesion" component={IniciarSesion}/>
          <Stack.Screen name="Registro" component={Registro} />           
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
