import React from 'react';

import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => this.props.onPress()}
            >
                <Text style={[styles.text, this.props.textStyle]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = new StyleSheet.create({
    container: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        marginVertical: 10
    },
    text: {
        color: 'black',
        fontSize: 35,
        margin: 10,
        width: 300,
        textAlign: 'center'
    }
});