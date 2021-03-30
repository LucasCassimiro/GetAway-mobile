import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


function Recuperar({ navigation }) {

    const [email, setEmail] = useState('');
 
    const env = () => {
    alert('O código de recuperação foi enviado ao email informado, confira a caixa de spam!')
    navigation.navigate('Main');
    }  

  return (
    <>
      <KeyboardAvoidingView style={styles.background} >
             
          <View style={styles.container}>
              <TextInput
              style={styles.input}
              placeholder= "Digite seu email cadastrado"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setEmail(text)} 
              />

            <TouchableOpacity style={styles.codigo} 
                onPress={()=>env()}>
                    <Text style={
                        {color:'white', 
                        fontSize: 20, 
                        textAlign:'center'}}>
                    Enviar código de recuperação
                    </Text>
            </TouchableOpacity>
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
      borderRadius: 4,
      padding:10
  },

  submitText:{
      color: '#fff',
      fontSize: 18
  },

  codigo: {
    width: 280,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#129BE8',
    justifyContent: 'center',
    
  },

})

export default Recuperar;