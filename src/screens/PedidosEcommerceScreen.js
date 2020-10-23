import React from 'react';

import {
    View,
    StyleSheet,
    Alert,
    TextInput,
    FlatList
} from 'react-native';

import { PEDIDO } from '../common/Urls';
import Button from '../components/Button';
import ItemPedido from '../components/ItemPedido';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class PedidosEcommerceScreen extends React.Component {
    state = {
        nome: '',
        pedidos: []
    };
    
    async buscarPedidos() {
        axios.get(`${PEDIDO}/ecommerce?nome=${this.state.nome}`,
        {
            headers: {
                Authorization: `Bearer ${await AsyncStorage.getItem('AUTH_TOKEN')}`
            }
        })
        .then((response) => {
            this.setState({
                pedidos: response.data.pedidos
            });
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
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ nome: text })}
                    placeholder={'E-commerce'}
                    maxLength={20}
                    value={this.state.nome}
                />

                <View style={styles.viewButton}>
                    <Button text={'Buscar'} onPress={() => this.buscarPedidos()} />
                </View>

                <View style={styles.containerList}>
                    <FlatList
                        data={this.state.pedidos}
                        extraData={this.state}
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    containerList: {
        height: '35%',
        borderTopColor: 'black',
        borderTopWidth: 1,
        marginTop: 20
    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInput: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        marginVertical: 10,
        color: 'black',
        fontSize: 30,
        margin: 10,
        width: 300,
        textAlign: 'center'
    },
    list: {
        marginTop: 10,
        height: '30%'
    },
});