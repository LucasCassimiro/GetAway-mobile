import React, { useState, useEffect, Component } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';


function FedPonto({ navigation }) {

  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);
  // const [projeto, setProjeto] = useState('');  
  const { coords, errorMsg } = useLocation();

  const ok = () => {
    navigation.navigate('Projeto');
  }

  const finalizar = () => {
    navigation.navigate('Mapa');
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



          <View style={{
            flexDirection: 'column',
            position: 'absolute',
            bottom: 229,
            width: 280,
            height: 100,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 4,
          }}>

            <Text onPress={() => ok()} style={{
              color: '#9C9C9C',
              textAlign: 'center',
              fontSize: 20,
              top: 25,
            }}>
              Ponto de interesse salvo com sucesso!
            </Text>


          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
            <TouchableOpacity style={styles.finalizar} onPress ={()=> finalizar()}>
              <Text style={{ color: 'white', fontSize: 15, top: 12 }}>Finalizar rota</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => ok()} style={styles.ok}>
              <Text style={{ color: 'white', fontSize: 15, top: 12 }}>OK</Text>
            </TouchableOpacity>
          </View>

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
    marginBottom: 15,
    color: '#9E9E9E',
    fontSize: 15,
    borderRadius: 7,
    padding: 10,
    shadowOpacity: 70,
    textAlign: 'center',
    top: 20,
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
    top: 20,
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
    left: 60,
    top: 232.5,
    borderRadius: 4,
    backgroundColor: '#ff6b00',
    alignItems: 'center'
  },

  ok: {
    width: 120,
    height: 48,
    left: 110,
    top: 232.5,
    borderRadius: 4,
    backgroundColor: '#129BE8',
    alignItems: 'center'
  },

})

export default FedPonto;