import React, { useState, useEffect } from 'react';

import {
    View,
    StyleSheet,
    Alert,
    FlatList
} from 'react-native';

import { PEDIDO } from '../common/Urls';
import ItemDetalhesProduto from '../components/ItemDetalhesProduto';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalhesPedido({ route }) {
    const [pedidos, setPedidos] = useState(0);

    useEffect(() => {
        async function fetchData() {
            axios.get(`${PEDIDO}/detalhes/${route.params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('AUTH_TOKEN')}`
                }
            })
            .then((response) => {
                setPedidos(response.data.produtoInfos)
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
        };

        fetchData();
    }, [route.params.id]);

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList
                    data={pedidos}
                    renderItem={({item, index}) => {
                        return (
                            <ItemDetalhesProduto
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
        marginTop: 20
    },
    list: {
        marginTop: 10,
    },
});