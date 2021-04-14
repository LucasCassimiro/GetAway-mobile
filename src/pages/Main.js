import React, {useContext, useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import api from '../Services/api';

import {AuthContext} from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';


export default function({navigation}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { SignIn, Clear , firebaseId, getIdToken, IdToken, User, setUser} = useContext(AuthContext);


  async function onClickSignIn (){
    Clear();

    if(email.length == 0)
      return;
    
     if(password.length == 0)
      return;  

      const result = await SignIn(email, password);

      if(!result){
        alert('Email e/ou senha incorretos, verifique e tente novamente!');
        return
      }

      if(result){
        navigation.navigate('Mapa');
      }  

      const token = await getIdToken();
      // console.log('O token do firebase aqui no login',token);

     if (token){
     const IdToken = 'Bearer '.concat(token); 
     const firebaseId = auth().currentUser.uid
     console.log('FirebaseUID', firebaseId)
     try {
     console.log('Entrei no try - Login')

     const response = await api.get('/User', { headers: { authorization: IdToken, uid: firebaseId }
     })
 
     console.log(response.data);
     setUser(response.data);
     return true;
     }
     catch (error){
     console.log(error)
     return false;
   }
 }
}


  useEffect(() => {
    Clear();
    console.log('Chamei o clear');
  },[])

 
  function cadastrar (){
    navigation.navigate('Cadastro');
  }

  function recuperar (){
    navigation.navigate('Recuperar');
  }

  return (
      <KeyboardAvoidingView 
      style={styles.background} >

          <View style={styles.containerLogo}>
                <Image style={{
                    width:140,
                    height:180,
                    marginTop: 10,
                    marginBottom: 20,
                }}
                source= {require('../../assets/logo2.png')}
                />
            </View>

          <View style={styles.container}>
              <TextInput
              style={styles.input}
              placeholder= "Email"
              autoCorrect= {false} 
              value={email}
              onChangeText={setEmail} 
              />

              <TextInput
              style={styles.input}
              placeholder= "Senha"
              secureTextEntry 
              autoCorrect= {false} 
              value={password}
              onChangeText={setPassword} 
              />

        <View style={{ alignItems:'center'}}>
            <TouchableOpacity style={styles.login} onPress={async ()=> await onClickSignIn()}>
                <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.cadastro} onPress={()=>cadastrar()}>
                <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>          
        
        
            <TouchableOpacity style={styles.recuperar} onPress={()=>recuperar()}>
                <Text style = {{color:'black', textAlign:'center', marginTop:10}}>Recuperar senha</Text>
            </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
  },
  container: {
      
      alignItems: 'center',
      justifyContent: 'center',
      // width: '90%',
      // paddingBottom: 70
  },
  input: {
      backgroundColor: '#ebebeb',
      width: 280,
      height: 40,
      marginBottom: 10,
      color: '#222',
      fontSize: 20,
      borderRadius: 4,
      padding:10,
  },

  submitText:{
      color: '#fff',
      fontSize: 18
  },

  login: {
    width: 280,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#FF6B00',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 5,

  },

  cadastro: {
    width: 280,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#129BE8',
    justifyContent: 'center',
    
  },

})

