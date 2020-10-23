import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ItemPedido extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.item.ecommerce.nome}
                </Text>

                <Text style={styles.textValues}>
                    Data Pedido: {this.props.item.dataPedido}
                </Text>

                <Text style={styles.textValues}>
                    Data Estimada: {this.props.item.dataEstimadaEntrega}
                </Text>

                <Text style={styles.textValues}>
                    Status Pedido: {this.props.item.statusPedido}
                </Text>

                <Text style={styles.textValues}>
                    Valor Total: {this.props.item.valorTotalCompra}
                </Text>
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    container: {
        marginHorizontal: 40,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 25
    },
    textValues: {
        fontSize: 20,
        color: 'grey',
        marginLeft: 10
    }
});