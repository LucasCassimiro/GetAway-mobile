import React, {useState, Component } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { color } from 'react-native-reanimated';


function EditProj ({ navigation }) {

    
    const [projeto, setProjeto] = useState('');  
    const [ponto, setPonto] = useState('');  
    const [descricao, setDescricao] = useState(''); 

    const cancelar = () => {
      navigation.navigate('VerProj') ;
      }
  
    const salvar = () => {
      alert('Edição salva com sucesso!')  
      navigation.navigate('VerProj') ;
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
              position:'absolute', 
              bottom:120,
              width:288, 
              height: 360, 
              backgroundColor:'white',
               alignItems:'center',
               borderRadius:7,}}>              
             <TextInput
              style={styles.project}
              placeholder= "Nome do projeto"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setProjeto(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />

             <TextInput
              style={styles.project}
              placeholder= "Ponto de interesse"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setPonto(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />

             <TextInput
              style={styles.descricao}
              placeholder= "Descrição"
              autoCorrect= {false} // desativar o corretor no momento da digitação
              onChangeText={text=>setDescricao(text)} // salvar essa info em algum local. Pesquisar para saber mais sobre.
              />
            
            <View style={{flexDirection: 'row', marginTop:40}}>
            <TouchableOpacity onPress={()=>cancelar()}
                style={{backgroundColor:'#3a3a3a', 
                        width:114,
                        height:36,
                        borderRadius:4,
                        right:10
                        }}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center', top: 2}}>Voltar</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>salvar()}
                style={{backgroundColor:'#FF6B00', 
                        width:114,
                        height:36,
                        borderRadius:4,
                        left:10,
                        }}>
                 <Text style={{color:'white', fontSize:20, textAlign:'center', top:2}}>Editar</Text>
             </TouchableOpacity>
            </View>
             
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
      width: 208,
      height:36,
      marginTop: 15,
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

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
   },



})

export default EditProj;

