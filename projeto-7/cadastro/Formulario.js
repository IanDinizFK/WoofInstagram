import {View, ScrollView} from 'react-native'
import CampoDeEntrada from './CampoDeEntrada'

const Formulario = (props) => {
  return(
    <ScrollView>
        <CampoDeEntrada
          hook={props.email}
          NomeDoCampo="Email" 
          placeholder="Digite o Seu Email" >
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
    </ScrollView>
  );
} 

export default Formulario;