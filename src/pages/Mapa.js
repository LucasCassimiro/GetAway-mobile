import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';

// import {AuthContext} from '../contexts/authContext';


function Mapa({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);	//utilizaremos estas duas variáveis (latitude e longitude) como posições padrão caso não seja possível obter a posição do usuário.
  const [currentRegion, setCurrentRegion] = useState(null);
  const { coords, errorMsg } = useLocation();

  const [pesquisar, setPesquisar] = useState('');

  const menu = () => {
    navigation.navigate('Menu');
  }

  const lupa = () => {
    navigation.navigate('Pesquisar');
  }

  const novo = () => {
    navigation.navigate('Novo');
  }

  // console.log('useLocation:',coords);
  // function handleRegionChanged(region){
  //   setCurrentRegion(region);
  // }

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


          <View style={{
            flexDirection: 'row',
            position: 'absolute', bottom: 0,
            left: 0, right: 0,
            width: '100%', height: '6%', backgroundColor: '#ff6b00'
          }}>

            <TouchableOpacity accessibilityLabel='menu' style={styles.menu} onPress={() => menu()}>
              <Image style={{
                width: 40,
                height: 40,
                top: 5,
                left: 10,

              }}
                source={require('../../assets/menu.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel='novo' style={styles.novo} onPress={() => novo()}>
              <Image style={{
                width: 40,
                height: 40,
                top: 5,
              }}
                source={require('../../assets/novo.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity accessibilityLabel='lupa' style={styles.lupa} onPress={() => lupa()}>
              <Image style={{
                width: 40,
                height: 40,
                top: 5,
              }}
                source={require('../../assets/lupa.png')}
              />
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

  input: {
    backgroundColor: '#F5FFFA',
    width: 260,
    height: 40,
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 10,
    shadowOpacity: 70,
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
    marginLeft: '34%',
    width: 40,
    height: 40,
  },

  novo: {
    width: 40,
    height: 40,
    marginLeft: '35%',

  }

})

export default Mapa;

