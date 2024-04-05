import { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
import { md5 } from 'js-md5'
const IniciarSesion = ({navigation,route}) => {
  const [formState, setFormState] = useState({ pi: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegistroPress = () => {
    navigation.navigate('Registro');
  };

  const setValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleClick = async () => {
    const body = { }
    body.pi = formState.pi
    body.type_user = formState.type_user
    body.password = md5(formState.password)
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('https://deimoss.web05.lol/login', fetchOptions)
    // Aquí puedes agregar la lógica que desees ejecutar cuando el botón sea clicado
    if (response.ok) {
      console.log('success!')
      route.params.setLoggedIn(true)
      setErrorMessage('')
      return
    }
    setErrorMessage('Incorrect user or password')
  }
  return (
    <View style={stylesinicio.container}>
      <View style={stylesinicio.circle}>
        <Text style={stylesinicio.texto}>Iniciar Sesion</Text>
      </View>

      {errorMessage !== '' && (
        <Text onPress={() => setErrorMessage('')} style={stylesinicio.error}>
          {errorMessage}
        </Text>
      )}
      <CustomInput name="Ingresar dpi" iconname="address-card" type="text" 
      value={formState.pi} onChange={(value) => setValue('pi', value)}/>
      <CustomInput name="Ingresar contraseña" iconname="lock" type="password"
      value={formState.password} onChange={(value) => setValue('password', value)}/>
      <Text style= {stylesinicio.textodescrip}>
        ¿No tienes cuenta?{' '}
        <TouchableOpacity onPress={handleRegistroPress}>
          <Text style={stylesinicio.link}>Regístrate aquí</Text>
        </TouchableOpacity>
      </Text>
      <CustomButton name='Ingresar' onClick={handleClick}></CustomButton>
      
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
  error:{
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 30,
  },
  
});

export default IniciarSesion;

