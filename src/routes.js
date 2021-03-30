import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';


import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Recuperar from './pages/Recuperar';
import Mapa from './pages/Mapa';



const Routes =  createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'GetAway',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },
        
        Cadastro:{
            screen: Cadastro,
            navigationOptions: {
                title: 'Cadastro',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
        },
        },

        Recuperar:{
            screen: Recuperar,
            navigationOptions: {
                title: 'Recuperação de senha',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Mapa:{
            screen: Mapa,
            navigationOptions: {
                title: 'Mapa',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ff6b00',
            },
        },
    })
);

export default Routes;