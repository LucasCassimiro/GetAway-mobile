import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function VerProj ({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const proj = () => {
      navigation.navigate('MenuProjeto');
    }

  return (
      <KeyboardAvoidingView style={styles.background} >



        <View style={{ alignItems:'center', 
        flexDirection:'column', 
        position:'absolute', 
        top:20,
        width:316, 
        height: 100, 
        backgroundColor:'#FF6B00', 
        alignItems:'center'}}>
            <TouchableOpacity onPress={()=>proj()} style={{
                color:'#FF6B00', 
                width:316, 
                height:100, 
                borderRadius:4,
                marginBottom:10,}}>
                <Text style={{color:'white', fontSize: 24, textAlign:'center', top:30,}}>Projeto 1</Text>
            </TouchableOpacity>
        </View> 
        
        <View style={{ alignItems:'center', 
        flexDirection:'column', 
        position:'absolute', 
        top:140,
        width:316, 
        height:100, 
        backgroundColor:'#FF6B00', 
        alignItems:'center'}}>
            <TouchableOpacity onPress={()=>proj()} style={{
                color:'#FF6B00', 
                width:316, 
                height:100, 
                borderRadius:4}}>
                <Text style={{color:'white', fontSize: 24, textAlign:'center', top:30,}}>Projeto 2</Text>
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

