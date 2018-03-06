import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface Props {
    name: String
}

export default class Button extends Component<Props, any> {

    constructor(props: Props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <TouchableHighlight>
                <Text style={styles.text}>{this.props.name}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: { padding: 5, margin: 2, width: 150, height: 80, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 28 }
})