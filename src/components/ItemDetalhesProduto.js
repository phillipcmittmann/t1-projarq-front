import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ItemDetalhesProduto extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.item.nome}
                </Text>

                <Text style={styles.textValues}>
                    Valor: {this.props.item.valorUnidade}
                </Text>

                <Text style={styles.textValues}>
                    Quantidade: {this.props.item.quantidade}
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