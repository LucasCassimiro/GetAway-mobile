import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


export default function MenuProjeto ({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const projeto = () => {
      alert('Ir para página do projeto');
    }

    const editar = () => {
       navigation.navigate('EditProj');
    }

    const excluir = () => {
        alert('Tem certeza que deseja excluir o projeto?');
    }

  return (
      <KeyboardAvoidingView style={styles.background} >

      <View style={styles.container}>

      <MapView
         style={styles.map}
         loadingEnabled={true}
         region={{
         latitude: -20.3868374,
         longitude: -43.5037862,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
          }}
          >
        </MapView>
       

             <TouchableOpacity style={styles.editar} onPress={()=>editar()}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Editar</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.excluirPro} onPress={()=>excluir()}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Exlcuir Projeto</Text>
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
      },
  
    container: {
      flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
       },

  editar: {
      backgroundColor:'#129BE8',
      width:200,
      height:30,
      bottom:0,
      top: 230,
      borderRadius:4,
  },

  excluirPro: {
        backgroundColor:'red',
        width:200,
        height:30,
        top: 240,
        bottom:0,
        borderRadius:4,
  }
})

