import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../Componentes/CustomButton';
import CustomInput from '../Componentes/CustomInput';
import { md5 } from 'js-md5';
import { useContext,useState } from 'react';
import CustomDropdown from '../Componentes/CustomDropdown';
const Registro = ({route}) => {
  const [formState, setFormState] = useState({ pi: '',name: '', lastname: '',password_md5: '',age: '',type_user: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const setValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleDropdownChange = (selectedItem) => {
    setValue('type_user', selectedItem);
  }
  
  const click = async () => {
    const body = { }
    body.pi = formState.pi
    body.name = formState.name
    body.lastname = formState.lastname
    body.password_md5 = md5(formState.password_md5)
    body.age = formState.age
    body.type_user = formState.type_user
    
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('https://deimoss.web05.lol/register', fetchOptions)
    
    if (response.ok) {
      console.log('success!')
      route.params.setLoggedIn(true)
      setErrorMessage('')
      return
    }else{
      setErrorMessage('Esta intentando ingresar a un usuario no admitido')
    }
    
  }

  return (
    <View style={stylesinicio.container}>
      <View style={stylesinicio.circle}>
        <Text style={stylesinicio.texto}>Registro</Text>
      </View>
      <CustomInput 
        name="Nombre" 
        iconname="user" 
        type="text" 
        value={formState.name}
        onChange={(value) => setValue('name', value)}/>
      <CustomInput 
        name="Apellido" 
        iconname="user" 
        type="text" 
        value={formState.lastname}
        onChange={(value) => setValue('lastname', value)}/>
      <CustomInput 
        name="DPI/CUI" 
        iconname="address-card" 
        type="text" 
        value={formState.pi}
        onChange={(value) => setValue('pi',value)}/>
      <CustomInput 
        name="Edad" 
        iconname="user" 
        type="number" 
        value={formState.age}
        onChange={(value) => setValue('age',value)}/>
      <CustomInput 
        name="Contraseña" 
        iconname="lock" 
        type="password"
        value={formState.password_md5}
        onChange={(value) => setValue('password_md5',value)}/>
      <CustomDropdown onChange={handleDropdownChange}></CustomDropdown>
      <CustomButton name='Registrarse' onClick={click}></CustomButton>

      
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
    transform: [{ translateY: -700 }],
  },
  texto: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 650,
  },
  
});

export default Registro;