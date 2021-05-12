import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

const InputField = (props: any) => {
    return (
        <TextInput secureTextEntry={props.secureTextEntry || false} style={styles.input} onChangeText={props.onChangeText} value={props.value} placeholder={props.placeholder} keyboardType={props.keyboardTypes}  autoCapitalize={props.autoCapitalize || true} />
    )
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.placeholder,
    }
});

export default InputField;