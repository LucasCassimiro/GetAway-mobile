import React, { useState, useEffect, Component, useContext } from 'react';
import { SafeAreaView, KeyboardAvoidingView, FlatList, TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import api from '../Services/api';


import { AuthContext } from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';
import { Callout } from 'react-native-maps';

export default function VerProj({ navigation }) {

  const [projects, setProjects] = useState([]);
  const { getIdToken, firebaseId, IdToken, User, setUser } = useContext(AuthContext);

  useEffect(() => {
    (async function getProjects() {

      const token = await getIdToken();

      if (token) {
        const IdToken = 'Bearer '.concat(token);
        const firebaseId = auth().currentUser.uid
        console.log(User.projects)
       
        if (User.projects) {
          try {
            console.log('Entrei no try do listar projetos')
            const response = await api.get('/allProjects', {
              params: {
                projectID: User.projects,
              },
              headers: { authorization: IdToken }
            })
            setProjects(response.data);
            console.log('projects', response.data);
            console.log("Sai do try - Listar projetos")
            return true;
          }
          catch (error) {
            console.log(error)
            return false;
          }
        }
      }
    })();
  }, [])
 
  return (
    <KeyboardAvoidingView style={styles.background} >

      <SafeAreaView style={styles.container}>


        {projects.map(projects => (
          <View key={projects._id} style={{ flex: 1, alignItems: 'center' }} >
            <Callout key={projects._id} >
              <TouchableOpacity onPress={() => {
                navigation.navigate('MenuProjeto', {
                  itemId: projects,
                  itemX: 'Lucas'
                });
              }}>
                <Text style={styles.projects}>{projects.name}</Text>
              </TouchableOpacity>
            </Callout>
          </View>
        ))
        }

      </SafeAreaView>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  projects: {
    color: '#FF6B00',
    fontSize: 25,
    paddingTop: 15,
  },
})

