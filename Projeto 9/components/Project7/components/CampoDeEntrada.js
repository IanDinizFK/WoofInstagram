import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CampoDeEntrada = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.NomeDoCampo}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.hide}
        onChangeText={props.hook}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default CampoDeEntrada;
