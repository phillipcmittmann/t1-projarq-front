import React from 'react';

import {
    View,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';

import Button from '../components/Button';
import { LOGIN } from '../common/Urls';

import axios from 'axios';

import * as RootNavigation from '../../RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginScreen extends React.Component {
    state = {
        email: '',
        senha: ''
    };

    async realizarLogin() {
        try {
            const response = await axios.post(LOGIN, {
                email: this.state.email,
                password: this.state.senha
            });
            
            await AsyncStorage.setItem('AUTH_TOKEN', response.data.token);
            
            RootNavigation.navigate('Home');
        } catch (error) {
            Alert.alert('Erro',`${error}`, [{ text: "Ok" }])
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={'Email'}
                    maxLength={60}
                    value={this.state.email}
                    autoCapitalize={'none'}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ senha: text })}
                    placeholder={'Senha'}
                    maxLength={20}
                    value={this.state.senha}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />

                <Button
                    textStyle={{ width: 100, fontSize: 20 }}
                    text={'Entrar'}
                    onPress={() => this.realizarLogin()}
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