import React, { useState, useEffect, Component, useContext } from 'react';
import {
  View, KeyboardAvoidingView, Image, TextInput,
  TouchableOpacity, Text, StyleSheet, PermissionsAndroid
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import useLocation from '../Hooks/useLocation';
import { AuthContext } from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';
import api from '../Services/api';

function EditProj({ navigation }) {

  const [latitude, setLatitude] = useState(-20.3866452);
  const [longitude, setLongitude] = useState(-43.5033303);
  const { coords, errorMsg } = useLocation();
  const [project, setProject] = useState();
  const [point, setPoint] = useState([]);
  const [description, setDescription] = useState('');

  const { getIdToken, firebaseId, IdToken, User, setUser } = useContext(AuthContext);

  async function updateProject() {

    const token = await getIdToken();

    if (token) {
      const IdToken = 'Bearer '.concat(token);
      const firebaseId = auth().currentUser.uid

      try {
        console.log('Entrei no try - Editar Projeto Nome')
        const response = await api.put('/projectName', {
          projectID: User.projects,
          name: project
        }, {
          headers: { authorization: IdToken }
        })
        console.log('Sai - Editar Projeto');
        console.log(response.data);
        return true;
      }
      catch (error) {
        console.log(error)
        return false;
      }

      // try {
      //   console.log('Entrei no try - Editar Projeto Descrição')
      //   const response = await api.put('/projectDescription', {
      //     projectID: User.projects,
      //     description: description
      //   }, {
      //     headers: { authorization: IdToken }
      //   })
      //   console.log('Sai - Editar Projeto Descrição');
      //   console.log(response.data);
      //   return true;
      // }
      // catch (error) {
      //   console.log(error)
      //   return false;
      // }

    }

  }

  const cancelar = () => {
    navigation.navigate('VerProj');
  }

  return (

    <KeyboardAvoidingView style={styles.background}
      behavior='height'
    >

      <View style={styles.container}>

        <MapView
          showsUserLocation={true}
          showsMyLocationButton={false}
          toolbarEnabled={false}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
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
          bottom: 120,
          width: 270,
          height: 230,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 7,
        }}>
          <TextInput
            style={styles.project}
            placeholder="Nome do projeto"
            autoCorrect={false}
            value={project}
            onChangeText={setProject}
          />

          <TextInput
            style={styles.descricao}
            placeholder="Descrição"
            autoCorrect={false}
            value={description}
            onChangeText={setDescription}
          />

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity onPress={() => cancelar()}
              style={{
                backgroundColor: '#3a3a3a',
                width: 114,
                height: 36,
                borderRadius: 4,
                right: 10
              }}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', top: 2 }}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={updateProject}
              style={{
                backgroundColor: '#FF6B00',
                width: 114,
                height: 36,
                borderRadius: 4,
                left: 10,
              }}>
              <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', top: 2 }}>Editar</Text>
            </TouchableOpacity>
          </View>

        </View>

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
    top: 10,
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
    top: 10,
  },

  submitText: {
    color: '#fff',
    fontSize: 18
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

})

export default EditProj;

