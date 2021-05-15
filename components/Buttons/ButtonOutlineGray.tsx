import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import TextDefault from '../Text/TextDefault';

const ButtonOutlineGray = (props: any) => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={props.onPress}>
            <TextDefault style={styles.editProfileText}>{props.title}</TextDefault>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        borderColor: Colors.darkGray,
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    editProfileText: {
        color: Colors.darkGray,
        fontSize: 16
    }
});

export default ButtonOutlineGray;