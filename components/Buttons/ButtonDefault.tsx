import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import TextBold from '../Text/TextBold';

const ButtonGradient = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <TextBold style={styles.buttonText}>
                    {props.children}
                </TextBold>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 8
    },
    buttonText: {
        fontSize: 18,
        color: Colors.background,
        textAlign: 'center'
    }
});

export default ButtonGradient;