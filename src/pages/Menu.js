import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


function Menu ({ navigation }) {

    
    const [pesquisar, setPesquisar] = useState('');  

    const sair = () => {
      navigation.navigate('Sair') ;
      }
  
     const lupa = () => {
      navigation.navigate('Pesquisar') ;
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

          <View style={{ flexDirection:'column', 
              position:'absolute', bottom:0,width:'100%', height: 190, backgroundColor:'white'}}>              
            
             <TouchableOpacity style={styles.ver}>
                 <Text style={{color:'#9E9E9E', fontSize:20, textAlign:'center'}}>Ver projetos</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.sair} onPress={()=>sair()}>
                 <Text style={{color:'#9E9E9E', fontSize:20, textAlign:'center'}}>Sair da conta</Text>
             </TouchableOpacity>

             <TouchableOpacity style={styles.excluir}>
                 <Text style={{color:'#FF0000', fontSize:20, textAlign:'center'}}>Exlcuir conta</Text>
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
   }, 

   ver: {
       width:'100%',
       height:48,
       alignContent:'center',
       top: 15,
   },

   sair: {
    width:'100%',
       height:48,
       alignContent:'center',
       top: 15,
   },

   excluir: {
    width:'100%',
    height:48,
    alignContent:'center',
    top: 30,
   },
})

export default Menu;