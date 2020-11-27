import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import Button from '../components/Button';

export default class TelaPrincipalScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Button text={'Cadastrar E-commerce'} onPress={() => this.props.navigation.navigate('Cadastrar E-commerce')} />
              <Button text={'Pedidos E-commerce'} onPress={() => this.props.navigation.navigate('Pedidos E-commerce')} />
              <Button text={'Pedidos por Data'} onPress={() => this.props.navigation.navigate('Pedidos Data')} />
              <Button text={'Pedidos por Agilidade'} onPress={() => this.props.navigation.navigate('Pedidos Agilidade')} />
              <Button text={'Pedidos Entregues'} onPress={() => this.props.navigation.navigate('Pedidos Entregues')} />
              <Button text={'Atualizar Pedidos'} onPress={() => this.props.navigation.navigate('Atualizar Pedidos')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  }
});