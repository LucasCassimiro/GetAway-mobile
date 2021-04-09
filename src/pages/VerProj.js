import React, {useState, useEffect , Component, useContext } from 'react';
import { SafeAreaView, KeyboardAvoidingView, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import api from '../Services/api';

 import {AuthContext} from '../contexts/authContext';
import { firebase } from '@react-native-firebase/auth';

export default function VerProj ({navigation}) {
  
    const [project, setProject] = useState([]);  
    const { getIdToken,firebaseId,IdToken } = useContext(AuthContext);

    useEffect(() => {
      (async function getToken(){
        const res = await getIdToken();   //exemplo de uso da getIdToken
        console.log(res);
      })();
    }, []);
    const config = { 
      headers: {  
          Authorization: `Bearer ${IdToken}` 
      } 
  };
  const data = {
    firebaseUID: firebaseId,
  }

   api.get('/Projects', data, config)
  .then(async (response) => { 
      setProject(response.data);
  })
  .catch(async (error) => { 
     alert(error)
  });

    // useEffect (() => {
    //     api.get('/Project').then(response => {
    //     setProject(response.data);
    //   })
    //   .catch(error=> {
    //     alert(error)
    //   });
    // }, [])
    
  return (
      <KeyboardAvoidingView style={styles.background} >
       
        <SafeAreaView style={styles.container}>
        <FlatList>        
          data={project}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.projects}>{project.name}</Text>
          )}
        </FlatList>
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
    fontSize: 20,
  },  
   
})

