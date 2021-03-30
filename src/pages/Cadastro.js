import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function Cadastro({ navigation }) {

  const voltar = () => {
    navigation.navigate('Main') ;
    }

    const login = () => {
    navigation.navigate('Main') ;
    }
  
    const cadastrar = () => {
    alert('Cadastro realizado com sucesso, faça seu login!');  
    navigation.navigate('Main') ;
    }


  return (
    <> 
    <KeyboardAvoidingView style={styles.background} >
           
          <View style={styles.containerLogo}>
                <Image style={{
                    width:100,
                    height:115,
                }}
                source= {require('../../assets/logo2.png')}
                />
            </View>

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder= "Email"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setEmail(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />

            <TextInput
              style={styles.input}
              placeholder= "Senha"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setSenha(text)}
              />

            <TextInput
              style={styles.input}
              placeholder= "Confirmar senha"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setSenha(text)} 
              />

            <View style={{ flexDirection:'row', alignItems:'center'}}>
              
                <TouchableOpacity style={styles.cadastro} onPress={()=>cadastrar()}>
                  <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Cadastrar</Text>
                </TouchableOpacity>
           
            </View>

          </View>
              
      </KeyboardAvoidingView>
      </> 

  );
}

const styles = StyleSheet.create({
 
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
  },
  containerLogo:{
      flex:1,
      justifyContent: 'center'
  },
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 70
  },
  input: {
      backgroundColor: '#ebebeb',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      fontSize: 20,
      borderRadius: 7,
      padding:10
  },
  
  submitText:{
      color: '#fff',
      fontSize: 18
  },

  cadastro: {
    width: 280,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#129BE8',
    justifyContent: 'center',
    
  },
  
})

export default Cadastro;