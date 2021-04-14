import React, {useContext, useState, useEffect, Component} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, 
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';
import {AuthContext} from '../contexts/authContext';


function Menu ({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);	
  const [longitude, setLongitude] = useState(-43.5033303);	//utilizaremos estas duas variáveis (latitude e longitude) como posições padrão caso não seja possível obter a posição do usuário.

  const { coords, errorMsg } = useLocation();
    
    const [pesquisar, setPesquisar] = useState('');  

    const {LogOut, Delete, firebaseId, getIdToken} = useContext(AuthContext);

  
  
    async function onClickSignOut(){
      const res = await LogOut();
  
      if(res)
        navigation.navigate('Main');
      
    }
  
    const excluir = () => {
      navigation.navigate('Excluir') ;
      }  

    const sair = () =>{
      navigation.navigate('Sair');
    }

     const ver = () => {
      navigation.navigate('VerProj') ;
      }  

      
  return (
    <> 
    <KeyboardAvoidingView style={styles.background} >
 

      <View style={styles.container}>
            
      <MapView
              showsUserLocation={true}		//destacando a localização do usuário no mapa
     	 showsMyLocationButton={false} 	//ocultando o botão que move o mapa para a localização do usuário
              toolbarEnabled={false}	//ocultando opções do google maps ao clicar em objetos do mapa
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',		
              }}	// Fazendo com que o mapa ocupe a tela inteira
              initialRegion={{
                latitude,	//posição inicial do mapa
                longitude,	//posição inicial do mapa
                latitudeDelta: 0.015,  	//determina o zoom do mapa
                longitudeDelta: 0.0121,	//determina o zoom do mapa
                ...coords	// Aqui sobrescrevemos as variáveis latitude e longitude com a posição do usuário obtida no hook que criamos para obter a localização.
              }}
            />

          <View style={{ flexDirection:'column', 
              position:'absolute', bottom:0,width:'100%', height: 190, backgroundColor:'white'}}>              
            
             <TouchableOpacity onPress={()=>ver()} style={styles.ver}>
                 <Text style={{color:'#9E9E9E', fontSize:20, textAlign:'center'}}>Ver projetos</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.sair} onPress={()=> sair()}>
                 <Text style={{color:'#9E9E9E', fontSize:20, textAlign:'center'}}>Sair da conta</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.excluir} onPress={()=> excluir()}>
                 <Text style={{color:'#FF0000', fontSize:20, textAlign:'center'}}>Exlcuir conta</Text>
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
    },

  container: {
    flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
  },
  
  input: {
      backgroundColor: '#F5FFFA',
      width: 260,
      height:40,
      marginBottom: 15,
      color: '#222',
      fontSize: 20,
      borderRadius: 7,
      padding:10,
      shadowOpacity:70,  
   },
  
  submitText:{
      color: '#fff',
      fontSize: 18
  },

  pesq: {
      width: 40,
      height: 40,
      backgroundColor: '#FF6B00',
      borderRadius: 100,
      marginLeft: 10,
      marginBottom:15,
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   },

   lupa: {
    left:265,
     width:40,
     height:40,
   },

   novo: {
     width:40,
     height:40,
     left: 80,
   }, 

   ver: {
       width:'100%',
       height:48,
       alignContent:'center',
       top: 15,
   },

   sair: {
    width:'100%',
       height:48,
       alignContent:'center',
       top: 15,
   },

   excluir: {
    width:'100%',
    height:48,
    alignContent:'center',
    top: 30,
   },
})

export default Menu;