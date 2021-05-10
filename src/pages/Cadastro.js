import React, { useContext, useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import api from '../Services/api';

import { AuthContext } from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';

function Cadastro({ navigation }) {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const { SignUp, IdToken, getIdToken, firebaseId } = useContext(AuthContext);


  async function onClickSignUp() {

    if (password != passwordConf)
      return;
    if (password.length == 0)
      return;
    if (email.length == 0)
      return;

    const result = await SignUp(email, password);
    //console.log(result);

    if (!result)
      return;

    if (result) {
      navigation.navigate('Main');
      alert('Cadastro efetuado com sucesso!')
    }
    const token = await getIdToken();
    console.log('O token do firebase ', token);
    if (token) {
      const IdToken = 'Bearer '.concat(token);
      // const IdToken = token;
      const firebaseId = auth().currentUser.uid

      try {
        console.log('Entrei no try - cadastro')
        const response = await api.post('/User', {
          uid: firebaseId,
          name: nome
        }, {
          headers: { authorization: IdToken }
        })
        console.log('Sai');
        // console.log(response.data);
        return true;
      }
      catch (error) {
        console.log(error)
        return false;
      }
    }
  }


  return (
    <>
      <KeyboardAvoidingView style={styles.background} >

        <View style={styles.containerLogo}>
          <Image style={{
            width: 100,
            height: 115,
          }}
            source={require('../../assets/logo2.png')}
          />
        </View>



        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            value={nome}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Senha"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Confirmar senha"
            autoCorrect={false}
            value={passwordConf}
            onChangeText={setPasswordConf}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity accessibilityLabel='Cadastro' style={styles.cadastro} onPress={async () => await onClickSignUp()}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Cadastrar</Text>
            </TouchableOpacity>

          </View>

        </View>

      </KeyboardAvoidingView>
    </>

  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 70
  },
  input: {
    backgroundColor: '#ebebeb',
    width: 280,
    height: 40,
    marginBottom: 10,
    color: '#222',
    fontSize: 20,
    borderRadius: 4,
    padding: 10,
  },

  submitText: {
    color: '#fff',
    fontSize: 18
  },

  cadastro: {
    width: 280,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#129BE8',
    justifyContent: 'center',

  },

})

export default Cadastro;