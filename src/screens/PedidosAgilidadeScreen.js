import React, { useState, useEffect } from 'react';

import {
    View,
    StyleSheet,
    Alert,
    FlatList
} from 'react-native';

import { PEDIDO } from '../common/Urls';
import ItemPedido from '../components/ItemPedido';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PedidosAgilidadeScreen() {
    const [pedidos, setPedidos] = useState(0);

    useEffect(() => {
        ;(async function() {
            axios.get(`${PEDIDO}/agilidade`,
            {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('AUTH_TOKEN')}`
                }
            })
            .then((response) => {
                setPedidos(response.data.pedidos)
            })
            .catch(function(error) {
                Alert.alert(
                    'Erro',
                    `${error}`,
                    [
                        {
                            text: "Ok"
                        }
                    ]
                )
            })
        })()
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    data={pedidos}
                    renderItem={({item, index}) => {
                        return (
                            <ItemPedido
                                item={item} 
                                index={index} 
                            />
                        )
                    }}
                    style={styles.list}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    containerList: {
        height: '35%',
        marginTop: 20
    },
    list: {
        marginTop: 10,
        height: '30%'
    },
});