import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const CustomButton = ({ name,onClick }) => {
  return (
    <TouchableHighlight style={styles.button} underlayColor="#041D3F"
    onPress={onClick}>
      <Text style={styles.text}>{name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 150, // Ajusta el espacio horizontal para hacer el botón más largo
    backgroundColor: '#00367E',
    borderRadius: 10,
    marginTop: 30
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default CustomButton;


