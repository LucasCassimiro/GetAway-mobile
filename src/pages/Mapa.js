import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


function Mapa ({ navigation }) {

    
    const [pesquisar, setPesquisar] = useState('');  

    const menu = () => {
      navigation.navigate('Menu') ;
      }
  
     const lupa = () => {
      navigation.navigate('Pesquisar') ;
      }  

    const novo = () => {
      navigation.navigate('Novo');
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

          <View style={{ flexDirection:'row', 
              position:'absolute', bottom:0,width:'100%', height: 50, backgroundColor:'#ff6b00'}}>              
            
              <TouchableOpacity style={styles.menu} onPress={()=>menu()}>
                  <Image style={{
                    width:40,
                    height:40,
                    top: 5,
                    left:10,
                  
                }}
                source= {require('../../assets/menu.png')}
                />
              </TouchableOpacity>
                
              <TouchableOpacity style={styles.lupa} onPress={()=>lupa()}>
                  <Image style={{
                    width:40,
                    height:40,
                    top: 5, 
                }}
                source= {require('../../assets/lupa.png')}
                />
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.novo} onPress={()=>novo()}>
                  <Image style={{
                    width:40,
                    height:40,
                    top: 5,
                }}
                source= {require('../../assets/novo.png')}
                />
              </TouchableOpacity>
                
          </View> 
         
      </View>
    
    </KeyboardAvoidingView>

  </> 

  );
    
}

const styles = StyleSheet.create({
 
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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

   lupa: {
    left:265,
     width:40,
     height:40,
   },

   novo: {
     width:40,
     height:40,
     left: 80,
     
   }

})

export default Mapa;

      