import React from 'react';

import {
    View,
    StyleSheet,
    Alert
} from 'react-native';

import Button from '../components/Button';
import { PEDIDO } from '../common/Urls';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RadioButtonRN from 'radio-buttons-react-native';

export default class AtualizarPedidosScreen extends React.Component {
    state = {
        selectedOption: ''
    }

    async atualizarPedidos() {
            axios.post(`${PEDIDO}/importar${this.state.selectedOption === 'TODOS' ? '' : `?ecommerce=${this.state.selectedOption}`}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${await AsyncStorage.getItem('AUTH_TOKEN')}`
                }
            })
            .then(function(response) {
                Alert.alert(
                    'E-commerce cadastrado com sucesso.',
                    '',
                    [
                        {
                            text: "Ok"
                        }
                    ]
                )
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
            });
    }

    render() {
        const data = [
            {
                label: 'AMAZON'
            },
            {
                label: 'SARAIVA'
            },
            {
                label: 'TODOS'
            }
        ];

        return (
            <View style={styles.container}>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => this.setState({ selectedBtn: e.label })}
                    box={false}
                    initial={1}
                    textStyle={styles.text}
                    style= {styles.radialStyle}
                    activeColor={'black'}
                    deactiveColor={'gray'}
                />

                <Button
                    textStyle={{ width: 100, fontSize: 20 }}
                    text={'Atualizar'}
                    onPress={() => this.atualizarPedidos()}
                />                
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        marginLeft: 20
    },
    radialStyle: {
        alignItems: 'center',
        width: 200,
        marginLeft: 40,
        marginBottom: 50
    }
});