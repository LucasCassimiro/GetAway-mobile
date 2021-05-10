import React, { useState, useEffect, Component } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';


function Pesquisar({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);
  // const [projeto, setProjeto] = useState('');  
  const { coords, errorMsg } = useLocation();

  const [pesquisar, setPesquisar] = useState('');

  const novo = () => {
    navigation.navigate('Novo');
  }

  const pesq = () => {
    navigation.navigate('Main');
  }

  const menu = () => {
    navigation.navigate('Menu');
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


          <View style={{ flexDirection: 'row', alignItems: 'center', bottom: 230 }}>
            <TextInput
              style={styles.input}
              placeholder="Pesquisar"
              autoCorrect={false} // desativar o corretor no momento da digitação
              onChangeText={text => setPesquisar(text)}
            />

            <TouchableOpacity style={styles.pesq} onPress={() => pesq()}>
              <Image style={{
                width: 30,
                height: 30,
                left: 5,
                top: 4,
              }}
                source={require('../../assets/lupa.png')} />
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            position: 'absolute', bottom: 0, width: '100%', height: 50, backgroundColor: '#ff6b00'
          }}>
            <TouchableOpacity style={styles.menu} onPress={() => menu()} >
              <Image style={{
                width: 40,
                height: 40,
                top: 5,
                left: 5,
              }}
                source={require('../../assets/menu.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.novo} onPress={() => novo()}>
              <Image style={{
                width: 40,
                height: 40,
                top: 5,
              }}
                source={require('../../assets/novo.png')}
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
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 260,
    height: 40,
    marginBottom: '60%',
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
    marginBottom: '60%',
  },

  novo: {
    width: 40,
    height: 40,
    marginLeft: '35%',

  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

})

export default Pesquisar;