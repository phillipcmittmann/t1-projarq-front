import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation';

import LoginScreen from './src/screens/LoginScreen';
import TelaPrincipalScreen from './src/screens/TelaPrincipalScreen';
import CadastrarEcommerceScreen from './src/screens/CadastrarEcommerceScreen';
import PedidosEcommerceScreen from './src/screens/PedidosEcommerceScreen';
import PedidosDataScreen from './src/screens/PedidosDataScreen';
import PedidosAgilidadeScreen from './src/screens/PedidosAgilidadeScreen';
import PedidosEntreguesScreen from './src/screens/PedidosEntreguesScreen';
import DetalhesPedidoScreen from './src/screens/DetalhesPedidoScreen';
import AtualizarPedidosScreen from './src/screens/AtualizarPedidosScreen';
 
const Stack = createStackNavigator();

export default function App({ navigation }) {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} navigation={navigation} />
                <Stack.Screen name="Home" component={TelaPrincipalScreen} navigation={navigation} />
                <Stack.Screen name="Cadastrar E-commerce" component={CadastrarEcommerceScreen} navigation={navigation} />
                <Stack.Screen name="Pedidos E-commerce" component={PedidosEcommerceScreen} navigation={navigation} />
                <Stack.Screen name="Pedidos Data" component={PedidosDataScreen} navigation={navigation} />
                <Stack.Screen name="Pedidos Agilidade" component={PedidosAgilidadeScreen} navigation={navigation} />
                <Stack.Screen name="Pedidos Entregues" component={PedidosEntreguesScreen} navigation={navigation} />
                <Stack.Screen name="Detalhes Pedido" component={DetalhesPedidoScreen} navigation={navigation} />
                <Stack.Screen name="Atualizar Pedidos" component={AtualizarPedidosScreen} navigation={navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};