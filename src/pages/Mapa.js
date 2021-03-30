import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Mapa ({ navigation }) {

    
    const [pesquisar, setPesquisar] = useState('');  

    const voltar = () => {
      navigation.navigate('Main') ;
      }
  
    const pesq = () => {
      navigation.navigate('Main') ;
    }  

  return (
    <> 
    <KeyboardAvoidingView style={styles.background} >
 

        <View style={styles.container}>
            
                      
        <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
        latitude: -20.3868374,
        longitude: -43.5037862,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        }}
        >
        </MapView>

         
        <View style={{ flexDirection:'row', alignItems:'center', bottom: 240}}>    
            <TextInput
              style={styles.input}
              placeholder= "Pesquisar"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setPesquisar(text)} 
              />
           
            
           
            <TouchableOpacity style={styles.pesq} onPress={()=>pesq()}>
                  <Text style={{color:'white', fontSize: 20, textAlign:'center'}}>Ir</Text>
            </TouchableOpacity>    
            </View>  
    </View>
 
              
      </KeyboardAvoidingView>
      </> 

  );
    
}

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Novo Projeto" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

const styles = StyleSheet.create({
 
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
  },
  container: {
    flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
  },
  input: {
      backgroundColor: '#F5FFFA',
      width: 260,
      height:40,
      marginBottom: 15,
      color: '#222',
      fontSize: 20,
      borderRadius: 7,
      padding:10,
      shadowOpacity:70,  
   },
  
  submitText:{
      color: '#fff',
      fontSize: 18
  },

  pesq: {
      width: 40,
      height: 40,
      backgroundColor: '#FF6B00',
      borderRadius: 100,
      marginLeft: 10,
      marginBottom:15,
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   },

})

export default Mapa;