import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
const IniciarSesion = ({navigation}) => {
  const handleRegistroPress = () => {
    navigation.navigate('Registro');
  };
  return (
    <View style={stylesinicio.container}>
      <View style={stylesinicio.circle}>
        <Text style={stylesinicio.texto}>Iniciar Sesion</Text>
      </View>
      <CustomInput name="Ingresar dpi" iconname="address-card" type="text" />
      <CustomInput name="Ingresar contraseña" iconname="lock" type="password"/>
      <Text style= {stylesinicio.textodescrip}>
        ¿No tienes cuenta?{' '}
        <TouchableOpacity onPress={handleRegistroPress}>
          <Text style={stylesinicio.link}>Regístrate aquí</Text>
        </TouchableOpacity>
      </Text>
      <CustomButton name='Ingresar' ></CustomButton>
      
    </View>
  );
};

const stylesinicio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    top: 50, // Ajusta la posición vertical según sea necesario
    width: 800,
    height: 800,
    borderRadius: 500, // La mitad del ancho y altura para formar un círculo
    backgroundColor: '#0069AD',
    alignItems: 'center', 
    transform: [{ translateY: -550 }],
  },
  texto: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 570,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  textodescrip:{
    fontSize: 20,
  },
  
});

export default IniciarSesion;

