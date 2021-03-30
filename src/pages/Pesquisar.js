import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


function Pesquisar ({ navigation }) {

    
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

         
        <View style={{ flexDirection:'row', alignItems:'center', bottom: 220}}>    
            <TextInput
              style={styles.input}
              placeholder= "Pesquisar"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setPesquisar(text)} 
              />
           
            <TouchableOpacity style={styles.pesq} onPress={()=>pesq()}>
            <Image style={{
                    width:30,
                    height:30,
                    left:5,
                    top:4,
                }}
                source= {require('../../assets/lupa.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection:'row', 
              position:'absolute', bottom:0,width:'100%', height: 50, backgroundColor:'#ff6b00'}}>              
            <TouchableOpacity style={styles.menu} >
                  <Image style={{
                    width:40,
                    height:40,
                    top: 5,
                    left:5,
                }}
                source= {require('../../assets/menu.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.novo}>
                  <Image style={{
                    width:40,
                    height:40,
                    left: 120,
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

export default Pesquisar;