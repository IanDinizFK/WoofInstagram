import React from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import CampoDeEntrada from './CampoDeEntrada';

const Formulario = (props) => {
  return (
    <View style={styles.back}>
      <ScrollView style={styles.forms}>
        <Text style={styles.titulo}>Cadastre seu Pet</Text>

        <CampoDeEntrada
          hook={props.email}
          NomeDoCampo="Email"
          placeholder="Digite o Seu Email"
        />

        <CampoDeEntrada
          hook={props.senha}
          NomeDoCampo="Senha"
          placeholder="Digite sua senha"
          hide={true}
        />

        <CampoDeEntrada
          hook={props.repetirSenha}
          NomeDoCampo="Confirmar Senha"
          placeholder="Digite sua senha novamente"
          hide={true}
        />

        <CampoDeEntrada
          hook={props.nome}
          NomeDoCampo="Nome do seu Pet"
          placeholder="Digite o nome do seu Pet"
        />

        <CampoDeEntrada
          hook={props.aniversario}
          NomeDoCampo="Aniversário do seu Pet"
          placeholder="Digite a data de aniversário do seu pet"
        />

        <CampoDeEntrada
          hook={props.raca}
          NomeDoCampo="Raça"
          placeholder="Digite a raça do seu pet"
        />

        <CampoDeEntrada
          hook={props.brinquedo}
          NomeDoCampo="Brinqued"
          placeholder="Digite o brinquedo favorito do seu Pet"
        />

        <Button title="Enviar" onPress={props.enviar} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  forms: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  back: {
    padding: 15,
    backgroundColor: 'green'
  },
  titulo: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
  },
});

export default Formulario;
