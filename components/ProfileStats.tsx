import React, { useState } from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import TextDefault from './atomic/TextDefault';
import TextBold from './atomic/TextBold';
import ButtonGradient from './Buttons/ButtonGradient';
import ButtonDefault from './Buttons/ButtonDefault';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileStats = (props: any) => {
    return (
        <View>
            <TextBold style={styles.header}>{props.title}</TextBold>
            <TextDefault style={styles.stats}>{props.stats}</TextDefault>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        color: Colors.primary,
        fontSize: 16
    },
    stats: {
        paddingTop: 4,
        color: Colors.accent,
        fontSize: 26
    }
});

export default ProfileStats;