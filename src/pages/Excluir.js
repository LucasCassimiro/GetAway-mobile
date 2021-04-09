import React, {useContext, useState, useEffect, Component} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';

import {AuthContext} from '../contexts/authContext';


function Excluir ({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);	
  const [longitude, setLongitude] = useState(-43.5033303);	//utilizaremos estas duas variáveis (latitude e longitude) como posições padrão caso não seja possível obter a posição do usuário.
  const [currentRegion, setCurrentRegion] = useState(null);
  const { coords, errorMsg } = useLocation();   

 const {LogOut, Delete, UserInfo, getIdToken} = useContext(AuthContext);

  async function onClickDelete(){
   const responsee = await Delete();
       
    if(responsee)
     navigation.navigate('Main');
    else {
      return;
    }
} 

 const cancelar = () => {
  navigation.navigate('Menu') ;
}
  
    
 return (
 <> 
  <KeyboardAvoidingView style={styles.background} >
 
   <View style={styles.container}>
                              
   <MapView 
  // onRegionChangeComplete={handleRegionChanged}
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
        position:'absolute', bottom:229,width:288, height: 190, backgroundColor:'white', alignItems:'center'}}>                
         <Text style={{color:'#9C9C9C', fontSize:20, textAlign:'center', top:30}}>
           Tem certeza que deseja excluir essa conta ?
          </Text>
            
       <View style={{flexDirection: 'row', marginTop:70}}>
        <TouchableOpacity onPress={()=>cancelar()}
          style={{backgroundColor:'#3a3a3a', 
                  width:114,
                  height:36,
                  borderRadius:4,
                  right:10
                 }}>
          <Text style={{color:'white', fontSize:20, textAlign:'center', top: 2}}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={async ()=> await onClickDelete()}
          style={{backgroundColor:'#E30000', 
                  width:114,
                  height:36,
                  borderRadius:4,
                  left:10,
                 }}>
           <Text style={{color:'white', fontSize:20, textAlign:'center', top:2}}>Excluir</Text>
         </TouchableOpacity>
      </View>
            
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

   excluir: {
    width:'100%',
    height:48,
    alignContent:'center',
    top: 30,
   },
})

export default Excluir;