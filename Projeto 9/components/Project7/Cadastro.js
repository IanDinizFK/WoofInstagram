import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';

import Formulario from './components/Formulario'

export function Cadastro() {
  //copiei so isso daqui porque eu estva fazendo da forma errada
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rPassword, setRpassword] = useState('')
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  return (
    <ScrollView>
      <Formulario
        email={setEmail}
        senha={setPassword}
        repetirSenha={setRpassword}
        nome={setName}
        aniversario={setBirthday}
        raca={setBreed}
        brinquedo={setToy}
        enviar={confirmaSenha(password,rPassword)}>
      </Formulario>
    </ScrollView>
  );
}

const confirmaSenha = (password, rPassword) => {
  if(password !== rPassword) {
    alert('As senha não batem!');
  }
}

//infelismente não cosegui instalar o formik, tentei baixar a pasta e instalar viar 'npm' porem não funcionou, o arquivo acaba ficando muito grande e ide não aceita.  
export default Cadastro;
