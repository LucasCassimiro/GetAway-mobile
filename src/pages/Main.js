import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function Main({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const login = () => {
      navigation.navigate('Mapa');
    }
  
    const cadastrar = () => {
    navigation.navigate('Cadastro') ;
    }

    const recuperar = () => {
      navigation.navigate('Recuperar');
    }  



  return (
      <KeyboardAvoidingView style={styles.background} >

        {/* <View style={styles.header}>
        <View>
          <Text style={styles.headerText}> Getaway </Text>
        </View>
      </View> */}

          <View style={styles.containerLogo}>
                <Image style={{
                    width:130,
                    height:155,
                    marginTop: 40,
                }}
                source= {require('../../assets/logo2.png')}
                />
            </View>

          <View style={styles.container}>
              <TextInput
              style={styles.input}
              placeholder= "Email"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setEmail(text)} 
              />

              <TextInput
              style={styles.input}
              placeholder= "Senha"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setSenha(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />

        <View style={{ alignItems:'center'}}>
            <TouchableOpacity style={styles.login} onPress={()=>login()}>
                <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Login</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.cadastro} onPress={()=>cadastrar()}>
                <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>          
        
        
            <TouchableOpacity style={styles.recuperar} onPress={()=>recuperar()}>
                <Text style = {{color:'black', textAlign:'center', marginTop:34}}>Recuperar senha</Text>
            </TouchableOpacity>
        
        </View>

      </KeyboardAvoidingView>

  );
}



const styles = StyleSheet.create({

  // headerText: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },

  background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
  },

  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      // width: '90%',
      // paddingBottom: 70
  },
  input: {
      backgroundColor: '#ebebeb',
      width: 280,
      height: 48,
      marginBottom: 15,
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
    height: 48,
    borderRadius: 15,
    backgroundColor: '#FF6B00',
    justifyContent: 'center',
    marginBottom: 7,
    marginTop: 10,

  },

  cadastro: {
    width: 280,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#129BE8',
    justifyContent: 'center',
    
    
  },

})

