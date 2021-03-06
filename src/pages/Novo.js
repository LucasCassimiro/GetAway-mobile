import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';
import useLocation from '../Hooks/useLocation';
import Geolocation from 'react-native-geolocation-service';
import api from '../Services/api';

import { AuthContext } from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';


function Novo({ navigation }) {
  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);	//utilizaremos estas duas variáveis (latitude e longitude) como posições padrão caso não seja possível obter a posição do usuário.

  const { coords, errorMsg } = useLocation();
  const { getIdToken, firebaseId, IdToken } = useContext(AuthContext);
  const [project, setProject] = useState('');

  async function handleAddProject() {

    const token = await getIdToken();
    // console.log('O token do firebase ', token);
    if (token) {
      const IdToken = 'Bearer '.concat(token);
      // const IdToken = token;
      const firebaseId = auth().currentUser.uid
      navigation.navigate('NovaRota');
      try {

        console.log('Entrei no try - Novo Projeto')
        const response = await api.post('/project', {
          uid: firebaseId,
          name: project,
          description: '',
          // paths: []
        }, {
          headers: { authorization: IdToken }
        })
        console.log('Sai - Novo Projeto');
        console.log(response.data);
        return true;
      }
      catch (error) {
        console.log(error)
        return false;
      }
    }
  }

  const cancelar = () => {
    navigation.navigate('Mapa');
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
          />


          <View style={{
            flexDirection: 'column',
            position: 'absolute', bottom: 200, width: 270, height: 100, backgroundColor: 'white', alignItems: 'center', borderRadius: 4,
          }}>
            <TextInput
              style={styles.project}
              placeholder="Nome do projeto"
              autoCorrect={false} // desativar o corretor no momento da digitação
              value={project}
              onChangeText={setProject} // salvar essa info em algum local. Pesquisar para saber mais sobre.
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

              <TouchableOpacity accessibilityLabel='Iniciar' onPress={handleAddProject}
                style={{
                  backgroundColor: '#FF6B00',
                  width: 114,
                  height: 36,
                  borderRadius: 4,
                  left: 10,
                }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', top: 2 }}>Iniciar</Text>
              </TouchableOpacity>
            </View>

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
    width: 208,
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

export default Novo;