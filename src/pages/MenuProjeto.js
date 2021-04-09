import React, {useState, useEffect , Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, 
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';


export default function MenuProjeto ({navigation}) {

  const [latitude, setLatitude] = useState(-20.3866452);	
  const [longitude, setLongitude] = useState(-43.5033303);
    // const [projeto, setProjeto] = useState('');  
    const { coords, errorMsg } = useLocation();
  
    async function deleteProject (){
      const response = await api.delete('project', {
        firebaseID,
        projectID,
      });
  
      setProject([...project,response.data])
      alert('Projeto excluido com sucesso!')
      navigation.navigate('Mapa');
    }

    const editar = () => {
       navigation.navigate('EditProj');
    }



  return (
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
       

             <TouchableOpacity style={styles.editar} onPress={()=>editar()}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center'}}>Editar</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.excluirPro} onPress={deleteProject}>
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
      top:'42%',
      borderRadius:4,
  },

  excluirPro: {
        backgroundColor:'red',
        width:200,
        height:30,
        top: '43%',
        borderRadius:4,
  }
})

