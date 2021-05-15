import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import TextDefault from '../Text/TextDefault';
import TextBold from '../Text/TextBold';

const WarningCard = (props: any) => {
    return (
        <View style={{...styles.note, ...props.style}}>
            <TextBold style={styles.noteTitle}>WARNING</TextBold>
            <TextDefault style={styles.noteText}>{props.children}</TextDefault>
        </View>
    )
};

const styles = StyleSheet.create({
    note: {
        backgroundColor: '#FFDADA',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 14
    },
    noteTitle: {
        color: '#DB4437',
        fontSize: 16,
        marginBottom: 4
    },
    noteText: {
        color: '#DB4437',
        fontSize: 15,
        marginBottom: 6
    }
});

export default WarningCard;