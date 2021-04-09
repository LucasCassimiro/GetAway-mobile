// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import Routes from './src/routes';
import {AuthProvider} from './src/contexts/authContext';

// import api from './src/Services/api';

export default function App() {

    return (
    
      <AuthProvider >
      <Routes />
     </AuthProvider>
  );
}

