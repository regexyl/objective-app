import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Divider = () => {
    return (
        <View style={styles.divider}></View>
    )
};

const styles = StyleSheet.create({
    divider: {
        borderColor: '#b3b3b3',
        borderBottomWidth: 1
    }
});

export default Divider;