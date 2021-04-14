import React, { useState, createContext, useContext, Children } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ErrMsg, setErrMsg] = useState('');
  const [UserInfo, setUserInfo] = useState(null);
  const [IdToken, setIdToken] = useState(null);
  const [User, setUser] = useState(null);

  //pega o idToken e armazena no context, essa função deve ser chamada
  //sempre que for preciso utilizar o IdToken.
  async function getIdToken(){
    const user = firebase.auth().currentUser

    if(user){
      const token = await auth().currentUser.getIdToken(true)
      .then(async (idToken) => {
        setIdToken(idToken);
        return idToken;
      })
      .catch(error => {
        setErrMsg(error)
        return false;
      })
      return token;
    }
    return false;
  }

  async function SignIn(email, password){
    var firebaseEmailReturn
    var firebaseIdReturn
    var tokenReturn

    //login no firebase
    const response = await auth().signInWithEmailAndPassword(email, password)
    .then( async () => {      
      const firebaseId = auth().currentUser.uid;
      const firebaseEmail = auth().currentUser.email;

      //obtendo o token e colocando junto das informações do usuário
      //somente para mostrar como pegar o token.
      //pegar somente na hora q for fazer a requisição ao backend.

      const token = await auth().currentUser.getIdToken(true)
      .then(async (idToken) => {
        setUserInfo([firebaseEmail, firebaseId, idToken]);
        return idToken;
      })

      firebaseEmailReturn = firebaseEmail;
      firebaseIdReturn = firebaseId;
      tokenReturn = token;

      return true;
    })
    .catch(error => {
      //código de erro comum
      if (error.code === 'auth/invalid-email') {
        setErrMsg('Email invalido');
        return false;
      }
      if (error.code === 'auth/wrong-password') {
        setErrMsg('Senha errada');
        return false;
      }

      if (error.code === 'auth/user-not-found') {
        setErrMsg('Usuário não encontrado');
        return false;
      }
      setErrMsg(error.code);
      return false;
    })

    if(response) {
      return {
        firebaseEmailReturn,
        firebaseIdReturn,
        tokenReturn
      }
    }

    return response;
  }

  //criação de conta no firebase
  async function SignUp(email, password){
    var firebaseEmailReturn
    var firebaseIdReturn
    var tokenReturn

    const response = await auth().createUserWithEmailAndPassword(email, password)
    .then( async () => {
      const firebaseId = auth().currentUser.uid
      const firebaseEmail = auth().currentUser.email

      const token = await auth().currentUser.getIdToken(true)
      .then(async (idToken) => {
        setUserInfo([firebaseEmail, firebaseId, idToken])
        return idToken
      })

      firebaseEmailReturn = firebaseEmail
      firebaseIdReturn = firebaseId
      tokenReturn = token

      return true;

    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        setErrMsg('Email em uso');
        return false
      }
      if (error.code === 'auth/invalid-email') {
        setErrMsg('Email invalido');
        return false
      }
      if (error.code === 'auth/weak-password') {
        setErrMsg('Senha Fraca');
        return false
      }
      setErrMsg(error.code);
      return false
    })


    if(response) {
      return {
        firebaseEmailReturn,
        firebaseIdReturn,
        tokenReturn
      }
    }

    return response;
  }

  //Sair do firebase
  async function LogOut(){
    const res = await auth().signOut()
    .then(() => {
      setUserInfo(null)
      return true;
    })
    .catch(err => {
      setErrMsg(err.code);
      return false;
    })
    return res;
  }

  //Função utilizada para deletar um usuário, só funciona se ele estiver logado no app
  async function Delete(){
    const response = await auth().currentUser.delete()
    .then(() => {
      setUserInfo(null);
      Clear();
      return true;
    }).catch(err => {
      setErrMsg(err);
      return false;
    })

    return response;
  }

  //Controle do app para saber se o usuário está logado
//   async function getUserInfo(){
//     const user = firebase.auth().currentUser;

//     //console.log(user);
//     if(user){
//       await auth().currentUser.getIdToken(true)
//       .then(async (idToken) => {
//         const firebaseId = auth().currentUser.uid
//         const firebaseEmail = auth().currentUser.email
//         setUserInfo([firebaseEmail, firebaseId, idToken])
//       })
//       return true
//     }
//     return false
//   }

  //Limpa mensagem de erro 
  async function Clear(){
    setErrMsg(null);
  }

  //envia para o email do usuário as informações necessárias para alteração de senha 
  async function ResetPassword(email){
    const response = await auth().sendPasswordResetEmail(email)
    .then(async () => {
      return true;
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        setErrMsg('Email inválido');
        return false;
      }
      if (error.code === 'auth/user-not-found') {
        setErrMsg('Usuário não encontrado');
        return false;
      }
      setErrMsg(error.code);
      return false
    });

    return response;
  }

  async function ChangePassword(newPassword){  
    var user = auth().currentUser;
    
    const response = await user.updatePassword(newPassword)
    .then(() => {
      return true;
    })
    .catch((error) => {
      setErrMsg(error.code);
      return false;
    })

    return response;
  }

  return(
    <AuthContext.Provider
      value={{
        // UserInfo,
        // getUserInfo,
        ErrMsg,
        SignIn,
        SignUp,
        LogOut,
        Delete,
        ResetPassword,
        Clear,
        getIdToken,
        setErrMsg,
        ChangePassword,
        IdToken,
        User,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}