import React from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import Button from '../components/Button';
import { ECOMMERCE } from '../common/Urls';
import { PEDIDO } from '../common/Urls';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CadastrarEcommerceScreen extends React.Component {
    state = {
        nome: '',
        cnpj: ''
    };

    async cadastrarEcommerce() {
            axios.post(ECOMMERCE, {
                nome: this.state.nome,
                cnpj: this.state.cnpj
            },
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
            })
            .then(() => {
                this.setState({
                    nome: '',
                    cnpj: ''
                });
    
                ;(async function() {
                    axios.post(`${PEDIDO}/importar`, {}, {
                        headers: {
                            Authorization: `Bearer ${await AsyncStorage.getItem('AUTH_TOKEN')}`
                        }
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
                })();
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ nome: text })}
                    placeholder={'Nome'}
                    maxLength={60}
                    value={this.state.nome}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ cnpj: text })}
                    placeholder={'cnpj'}
                    maxLength={20}
                    value={this.state.cnpj}
                    keyboardType={'numeric'}
                />

                <Button
                    textStyle={{ width: 100, fontSize: 20 }}
                    text={'Cadastrar'}
                    onPress={() => this.cadastrarEcommerce()}
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
    }
});