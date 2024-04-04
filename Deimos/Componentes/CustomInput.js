import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Importa los iconos de FontAwesome5

const CustomInput = ({name,iconname,type,onChange,value}) => {
  let keyboardType = 'default';
  let secureTextEntry = false;
  let textContentType = 'none';
  if (type === 'password') {
    secureTextEntry = true;
  } else if (type === 'number') {
    keyboardType = 'numeric';
  } else if (type === 'text') {
    textContentType = 'none';
  }
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Icon name={iconname} size={40} color="white" />
      </View>
      <TextInput style={styles.input} placeholder={name}
      placeholderTextColor="#6580A5"
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      onChangeText={(value) => onChange(value)}
      value={value}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginBottom: 20
  },
  square: {
    width: 70,
    height: 70,
    backgroundColor: '#0069AD',
    marginRight: 0, // Espacio entre el cuadro y el TextInput
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#ECECEC',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20
  },
});

export default CustomInput;

