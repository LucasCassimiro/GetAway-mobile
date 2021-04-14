import React, {useState, useEffect , Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, 
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';
import {AuthContext} from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';

import api from '../Services/api';

function Rota ({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);	
  const [longitude, setLongitude] = useState(-43.5033303);
  const { coords, errorMsg } = useLocation();
   
  
  // const [project, setProject] = useState([]);  
   
  const adicionar = () => {
    navigation.navigate('Ponto');
  }

    const rota = () => {
      navigation.navigate('FedRota') ;
      }
  
    //  const adicionar = () => {
    //   navigation.navigate('Ponto') ;
    //   }  
// const {latitude2, longitude2} = coords;

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
            >
              {/* { coords.latitude ? <Marker coordinate ={{latitude:coords.latitude, longitude:coords.longitude}}/> : null }
              <Marker coordinate ={{latitude:coords.latitude, longitude:coords.longitude}}/>  */}
        </MapView>
       
 
        <View style={{position:'absolute', flexDirection:'row', width:'100%'}}>
            <TouchableOpacity onPress={()=>rota()} style={styles.finalizar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Finalizar rota</Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={()=>adicionar()} style={styles.adicionar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Adicionar Ponto</Text>
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

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   },


   finalizar:{
       width:120,
       height:48,
       left:'20%',
       top:'90%',
       borderRadius:4,
       backgroundColor:'#ff6b00',
       alignItems:'center',
   },

   adicionar:{
    width:120,
    height:48,
    left: '340%',
    top: '90%',
    borderRadius:4,
    backgroundColor:'#ff6b00',
    alignItems:'center',
    },

})

export default Rota;



