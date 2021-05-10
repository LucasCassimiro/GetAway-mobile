import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout, Polyline } from 'react-native-maps';
import useLocation from '../Hooks/useLocation';
import api from '../Services/api';
import { AuthContext } from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';


export default function MenuProjeto({ navigation, route }) {

  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);
  const { coords, errorMsg } = useLocation();
  // const itemId = route.params;
  const { getIdToken, firebaseId, IdToken, User, projects, setUser, setProjects } = useContext(AuthContext);


  // useEffect(()=> {
  //   console.log('Routes', route)
  // },[]) 

  async function deleteProject() {

    const token = await getIdToken();
    navigation.navigate('Mapa');

    if (token) {
      const IdToken = 'Bearer '.concat(token);
      const firebaseId = auth().currentUser.uid;
      console.log('Projetos de novo', User.projects)

      try {
        console.log('Entrei no try - deletar projeto')
        const response = await api.delete('/project', {
          headers: { authorization: IdToken },
          data: {
            projectID: "6089921f30dce00628b00c28", //Descobrir como fazer com o id do projeto em que
            uid: firebaseId                        //o user escolheu   
          },
          uid: firebaseId
        })
        console.log('Sai - deletar projeto');
        console.log(response.data);
        return true;
      }
      catch (error) {
        console.log(error)
        return false;
      }
    }
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
          {/* <Marker coordinate={{ latitude: -20.385137, longitude: -43.496927 }} /> */}
          <Marker coordinate={{ latitude: -20.385137, longitude: -43.496927 }}>
            <Callout style={{ width: 260, height: 260 }}>
              <View>
                <Text style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 20,
                  bottom: 0,

                }}>
                  Nome: Casa
            </Text>
                <Text style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 20,
                  bottom: 0,

                }}>
                  Descrição: Minha casa
            </Text>
              </View>
            </Callout>
          </Marker>
          <Marker coordinate={{ latitude: -20.385287, longitude: -43.503508 }} />
          <Marker coordinate={{ latitude: -20.386199, longitude: -43.49477 }} />
        </MapView>

        <TouchableOpacity accessibilityLabel='Editar' style={styles.editar} onPress={() => editar()}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel='Excluir Projeto' style={styles.excluirPro} onPress={deleteProject}>
          <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Exlcuir Projeto</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  editar: {
    backgroundColor: '#129BE8',
    width: 200,
    height: 30,
    top: '42%',
    borderRadius: 4,
  },
  excluirPro: {
    backgroundColor: 'red',
    width: 200,
    height: 30,
    top: '43%',
    borderRadius: 4,
  }
})

