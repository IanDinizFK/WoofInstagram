import {View, ScrollView, StyleSheet, Text} from 'react-native'
import CampoDeEntrada from './CampoDeEntrada'

const Formulario = (props) => {
  return(
    <View style={styles.back}>
    <ScrollView style={styles.fomrs}>

        <Text style={styles.titulo}>Cadastre seu Pet</Text>

        <CampoDeEntrada
          hook={props.email}
          NomeDoCampo="Email" 
          placeholder="Digite o Seu Email">
        </CampoDeEntrada>

        <CampoDeEntrada
          hook={props.senha}
          NomeDoCampo="Senha" 
          placeholder="Digite sua senha"
          hide={true}>
        </CampoDeEntrada>

        <CampoDeEntrada
          hook={props.repetirSenha}
          NomeDoCampo="Confirmar Senha" 
          placeholder="Digite sua senha novamente"
          hide={true}>
        </CampoDeEntrada>
      
        <CampoDeEntrada
          hook={props.nome}
          NomeDoCampo="Nome do seu Pet" 
          placeholder="Digite o nome do seu Pet" >
        </CampoDeEntrada>

        <CampoDeEntrada
          hook={props.aniversario}
          NomeDoCampo="Aniversário do seu Pet" 
          placeholder="Digite a data de aniversário do seu pet" >
        </CampoDeEntrada>

        <CampoDeEntrada
          hook={props.raca}
          NomeDoCampo="Raça" 
          placeholder="Digite a raça do seu pet" >
        </CampoDeEntrada>

        <CampoDeEntrada
          hook={props.brinquedo}
          NomeDoCampo="Brinqued" 
          placeholder="Digite o brinquedo favorito do seu Pet" >
        </CampoDeEntrada>
           
        <button style={styles.botao} onClick={props.enviar}>Enviar</button>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fomrs: {
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
  botao: {
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20 
  }
});

export default Formulario;

