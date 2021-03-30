import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


function Ponto ({ navigation }) {

    
    const [ponto, setPonto] = useState('');  
    const [descricao, setDescricao] = useState('');  


    const cancelar = () => {
      navigation.navigate('Projeto') ;
      }
  
     const salvaPonto = () => {
      navigation.navigate('FedPonto') ;
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
 


        <View style={{ 
              flexDirection:'column', 
              position:'absolute', 
              bottom:229,
              width:280, 
              height: 270, 
              backgroundColor:'white', 
              alignItems:'center',
              borderRadius:4,
              }}>              
             <TextInput
              style={styles.project}
              placeholder= "Nome do ponto"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setPonto(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />

            <TextInput
              style={styles.descricao}
              placeholder= "Descrição"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setDescricao(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />
            
            <View style={{flexDirection: 'row', marginTop:30}}>
            <TouchableOpacity onPress={()=>cancelar()}
                style={{backgroundColor:'#3a3a3a', 
                        width:114,
                        height:36,
                        borderRadius:4,
                        right:10
                        }}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center', top: 2}}>Cancelar</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>salvaPonto()}
                style={{backgroundColor:'#FF6B00', 
                        width:114,
                        height:36,
                        borderRadius:4,
                        left:10,
                        }}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center', top:2}}>Salvar</Text>
             </TouchableOpacity>
            </View>
             
          </View> 

        <View style={{ alignItems:'center', flexDirection:'row', width:'100%'}}>
            <TouchableOpacity style={styles.finalizar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Finalizar rota</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.adicionar}>
                <Text style={{color:'white', fontSize: 15, top:12}}>Adicionar Ponto</Text>
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
  
  project: {
      backgroundColor: '#EBEBEB',
      width: 240,
      height:36,
      marginTop: 5,
      marginBottom: 15,
      color: '#9E9E9E', 
      fontSize: 15,
      borderRadius: 7,
      padding:10,
      shadowOpacity:70,
      textAlign: 'center',
      top: 20,  
   },

   descricao:{
    backgroundColor: '#EBEBEB',
      width: 240,
      height:120,
      
      marginBottom: 10,
      color: '#9E9E9E', 
      fontSize: 15,
      borderRadius: 7,
      padding:10,
      shadowOpacity:70,
      textAlign: 'center',
      top: 20,  
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

   finalizar:{
       width:120,
       height:48,
       left:10,
       top: 232.5,
       borderRadius:4,
       backgroundColor:'#ff6b00',
       alignItems:'center'
   },

   adicionar:{
    width:120,
    height:48,
    left:110,
    top: 232.5,
    borderRadius:4,
    backgroundColor:'#ff6b00',
    alignItems:'center'
    },

})

export default Ponto;