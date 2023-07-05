import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';

// You can import from local files
import Formulario from './cadastro/Formulario'


export default function App() {
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
        email={setEmail}>
        senha={setPassword}
        repetirSenha={setRpassword}
        nome={setName}
        aniversario={setBirthday}
        raca={setBreed}
        brinquedo={setToy}
      </Formulario>
    </ScrollView>
  );
}

