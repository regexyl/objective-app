import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import TextBold from '../Text/TextBold';

const ButtonGradient = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient colors={buttonGradient} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} locations={[0, 0.99]} style={{...styles.button, ...props.style}}>
                <TextBold style={styles.buttonText}>
                    {props.children}
                </TextBold>
            </LinearGradient>
        </TouchableOpacity>
    )
};

const buttonGradient = [Colors.primary, '#96D8FF'];

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
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