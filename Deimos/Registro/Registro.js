import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
const Registro = () => {
  return (
    <View style={stylesinicio.container}>
      <View style={stylesinicio.circle}>
        <Text style={stylesinicio.texto}>Registro</Text>
      </View>
      <CustomInput name="Nombre" iconname="user" type="text" />
      <CustomInput name="Apellido" iconname="user" type="text" />
      <CustomInput name="DPI/CUI" iconname="address-card" type="text" />
      <CustomInput name="Edad" iconname="user" type="number" />
      <CustomInput name="Contraseña" iconname="lock" type="password"/>
      <CustomButton name='Registrarse' ></CustomButton>
      
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
    transform: [{ translateY: -640 }],
  },
  texto: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 600,
  },
  
});

export default Registro;