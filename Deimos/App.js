import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IniciarSesion from './IniciarSesion/IniciarSesion'
import Registro from './Registro/Registro'
export default function App() {
  return (
    <View style={styles.container}>
      <Registro/>
      <StatusBar style="auto" />
    </View>
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
