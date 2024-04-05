import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text,StyleSheet } from 'react-native';

const CustomDropdown = ({onChange}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Rol',
    value: null,
  };

  const options = [
    { label: 'Usuario Comun', value: 'usuario_comun' },
    { label: 'Empleador', value: 'empleador' },
    
  ];

  const valuechanges = (item) =>{
    onChange(item)
    setSelectedValue(item)
  }

  return (
    <View style={styles.dropdown}>
      <Text style={styles.label}>Seleccione su rol:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => valuechanges(value)}
        value={selectedValue}
        style={styles.dropdown}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    
  },
  label: {
    fontSize: 25,
  }
});

export default CustomDropdown;