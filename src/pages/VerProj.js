import React, {useState, useEffect , Component, useContext } from 'react';
import { SafeAreaView, KeyboardAvoidingView, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import api from '../Services/api';


import {AuthContext} from '../contexts/authContext';
import auth, { firebase } from '@react-native-firebase/auth';

export default function VerProj ({navigation}) {
  
    const [projects, setProjects] = useState([]);  
    const { getIdToken,firebaseId,IdToken, User, setUser } = useContext(AuthContext);

    function projeto (){
      navigation.navigate('MenuProjeto');
    }

    useEffect(() => {
      (async function getProjects() {
        const token = await getIdToken();
        
        if (token){
          const IdToken = 'Bearer '.concat(token); 
          // console.log('IdToken',IdToken)
          // const firebaseId = auth().currentUser.uid
          // console.log('FirebaseUID', firebaseId)
          // console.log(User)
          // console.log(User.projects)
          if (User.projects){ 

            try {
              console.log('Entrei no try do listar projetos')
              const response = await api.get('/allProjects', {
                params:{
                projectID : User.projects,
                },
                headers: { authorization: IdToken }
              })
              console.log('Array de projetos abaixo:');
              setProjects(response.data);
              console.log('setProjects',projects);
              return true;
            }
            catch (error){
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

        <FlatList        
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <TouchableOpacity onPress={()=> projeto()} >
              <Text style={styles.projects}>{project.name}</Text>
            </TouchableOpacity>

          )}
        />

        </SafeAreaView>

      </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
  },

  container: {
      flex:1,
  },

  projects: {
    color:'#FF6B00',
    fontSize: 25,
    paddingTop: 15
  },  
   
})

