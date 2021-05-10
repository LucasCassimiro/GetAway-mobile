import React, { useState, useEffect, Component } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout, Polyline} from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';

import api from '../Services/api';

function Ponto({ navigation }) {

  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);
  // const [projeto, setProjeto] = useState('');  
  const { coords, errorMsg } = useLocation([]);
  const [point, setPoint] = useState('');
  const [description, setDescription] = useState('');

  async function handleAddPoint() {
    var response = await api.post('point', {
      name: point,
      description: description,
      Coordinates: coords,
    });

    setPoint([...point, response.data])
    navigation.navigate('FedPonto');
  }

  const cancelar = () => {
    navigation.navigate('Rota');
  }

  const salvar = () => {
    navigation.navigate('FedPonto');
  }


  return (
    <>
      <KeyboardAvoidingView style={styles.background}
        behavior='height'
      >

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
                 <Polyline
              coordinates={[
                { latitude: -20.384363, longitude: -43.490195 },
                { latitude: -20.385274, longitude: -43.490400 },
                { latitude: -20.385604, longitude: -43.489988 },
                { latitude: -20.386140, longitude: -43.489337 },
                { latitude: -20.385901, longitude: -43.488448 },
                { latitude: -20.385546, longitude: -43.488383 },
                { latitude: -20.385529, longitude: -43.488376 },
                { latitude: -20.385766, longitude: -43.487515 },
                { latitude: -20.385890, longitude: -43.487363 },
                { latitude: -20.386057, longitude: -43.486867 },
                { latitude: -20.386484, longitude: -43.487273 },
                { latitude: -20.386969, longitude: -43.488496 },
                { latitude: -20.386865, longitude: -43.489339 },
                { latitude: -20.386425, longitude: -43.490650 },
                { latitude: -20.386098, longitude: -43.491953 },
                { latitude: -20.386199, longitude: -43.494773 },
                { latitude: -20.385280, longitude: -43.496673 },
                { latitude: -20.385137, longitude: -43.496927 },
                { latitude: -20.384061, longitude: -43.498337 },
                { latitude: -20.383502, longitude: -43.500545 },
                { latitude: -20.382789, longitude: -43.501947 },
                { latitude: -20.383008, longitude: -43.502938 },
                { latitude: -20.383630, longitude: -43.503305 },
                { latitude: -20.384788, longitude: -43.503387 },
                { latitude: -20.385287, longitude: -43.503508 }
              ]}
              strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000'
              ]}
              strokeWidth={6}
            />
          {/* { coords.latitude ? <Marker coordinate ={{latitude:coords.latitude, longitude:coords.longitude}}/> : null } */}
              {/* <Marker coordinate ={{latitude:coords.latitude, longitude:coords.longitude}}/> */}
              <Marker coordinate ={{latitude: -20.385137, longitude: -43.496927}}/> 
              {/* <Marker coordinate ={{latitude: -20.385287, longitude: -43.503508}}/> 
              <Marker coordinate ={{latitude: -20.386199, longitude: -43.49477}}/>  */}
           </MapView>

          <View style={{
            flexDirection: 'column',
            position: 'absolute',
            bottom: 110,
            width: 280,
            height: 230,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 4,
          }}>
            <TextInput
              style={styles.project}
              value={point}
              placeholder="Nome do ponto"
              autoCorrect={false} // desativar o corretor no momento da digitação
              onChangeText={setPoint} // salvar essa info em algum local. Pesquisar para saber mais sobre.
            />

            <TextInput
              style={styles.descricao}
              placeholder="Descrição"
              value={description}
              autoCorrect={false} // desativar o corretor no momento da digitação
              onChangeText={setDescription} // salvar essa info em algum local. Pesquisar para saber mais sobre.
            />

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity accessibilityLabel='Cancelar' onPress={() => cancelar()}
                style={{
                  backgroundColor: '#3a3a3a',
                  width: 114,
                  height: 36,
                  borderRadius: 4,
                  right: 10
                }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', top: 2 }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity accessibilityLabel='Salvar' onPress={()=> salvar()}
                style={{
                  backgroundColor: '#FF6B00',
                  width: 114,
                  height: 36,
                  borderRadius: 4,
                  left: 10,
                }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', top: 2 }}>Salvar</Text>
              </TouchableOpacity>
            </View>

          </View>
          {/* 
        <View style={{ alignItems:'center', flexDirection:'row', width:'100%'}}>
            <TouchableOpacity style={styles.finalizar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Finalizar rota</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.adicionar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Adicionar Ponto</Text>
            </TouchableOpacity>
        </View>   */}

        </View>

      </KeyboardAvoidingView>

    </>

  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  project: {
    backgroundColor: '#EBEBEB',
    width: 240,
    height: 36,
    marginTop: 5,
    marginBottom: 5,
    color: '#9E9E9E',
    fontSize: 15,
    borderRadius: 7,
    padding: 10,
    shadowOpacity: 70,
    textAlign: 'center',
    top: 5,
  },
  descricao: {
    backgroundColor: '#EBEBEB',
    width: 240,
    height: 120,
    marginBottom: 10,
    color: '#9E9E9E',
    fontSize: 15,
    borderRadius: 7,
    padding: 10,
    shadowOpacity: 70,
    textAlign: 'center',
    top: 5,
  },
  submitText: {
    color: '#fff',
    fontSize: 18
  },
  pesq: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B00',
    borderRadius: 100,
    marginLeft: 10,
    marginBottom: 15,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  lupa: {
    left: 265,
    width: 40,
    height: 40,
  },
  novo: {
    width: 40,
    height: 40,
    left: 80,
  },
  finalizar: {
    width: 120,
    height: 48,
    left: 10,
    top: 232.5,
    borderRadius: 4,
    backgroundColor: '#ff6b00',
    alignItems: 'center'
  },
  adicionar: {
    width: 120,
    height: 48,
    left: 110,
    top: 232.5,
    borderRadius: 4,
    backgroundColor: '#ff6b00',
    alignItems: 'center'
  },
})

export default Ponto;