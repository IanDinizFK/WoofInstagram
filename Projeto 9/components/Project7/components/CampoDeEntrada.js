import {View, Text, TextInput, StyleSheet} from 'react-native';

//eu posso passar a função que ativa o useState com props!

const CampoDeEntrada = (props) => {
   
  return(
    <View style={{padding: 5}}>
      <Text style={styles.campo}>{props.NomeDoCampo}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.hide}
        onChangeText={props.hook}>
      </TextInput>  
    </View>);
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  campo: {
    height: 5,
    marginLeft: 12,
    fontSize: 15,
  }
});

export default CampoDeEntrada;