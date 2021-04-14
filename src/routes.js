import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';


import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Recuperar from './pages/Recuperar';
import Mapa from './pages/Mapa';
import Pesquisar from './pages/Pesquisar';
import Menu from './pages/Menu';
import Novo from './pages/Novo';
import Sair from './pages/Sair';
import Projeto from './pages/Projeto';
import Ponto from './pages/Ponto';
import FedPonto from './pages/FedPonto';
import FedRota from  './pages/FedRota';
import VerProj from './pages/VerProj';
import MenuProjeto from './pages/MenuProjeto';
import EditProj from './pages/EditProj';
import NovaRota from './pages/NovaRota';
import Rota from './pages/Rota';
import Excluir from './pages/Excluir';

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

        Pesquisar:{
            screen: Pesquisar,
            navigationOptions:{
                title: 'Mapa',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Menu:{
            screen: Menu,
            navigationOptions:{
                title: 'Mapa',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Novo:{
            screen: Novo,
            navigationOptions:{
                title: 'Mapa',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Sair:{
            screen: Sair,
            navigationOptions:{
                title: 'Mapa',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Projeto:{
            screen: Projeto,
            navigationOptions:{
                title: 'Projeto', //pegar nome do projeto setProjeto
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Ponto:{
            screen: Ponto,
            navigationOptions:{
              title: 'Projeto', //pegar nome do projeto setProjeto  
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            },
        },

        FedPonto:{
            screen: FedPonto,
            navigationOptions:{
              title: 'Projeto', //pegar nome do projeto setProjeto  
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            },
        },

        FedRota:{
            screen: FedRota,
            navigationOptions:{
              title: 'Projeto', //pegar nome do projeto setProjeto  
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            },
        },

        VerProj:{
            screen: VerProj,
            navigationOptions:{
                title: 'Projetos',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        MenuProjeto:{
            screen: MenuProjeto,
            navigationOptions:{
                title: 'Nome do Projeto',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        EditProj:{
            screen: EditProj,
            navigationOptions:{
                title: 'Projeto',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },
         
        NovaRota:{  
            screen: NovaRota,
            navigationOptions:{
                title: 'Projeto',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },

        Rota:{  
            screen: Rota,
            navigationOptions:{
                title: 'Projeto',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
            },
        },
        
        Excluir:{
            screen: Excluir,
            navigationOptions:{
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