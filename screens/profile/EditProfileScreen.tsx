import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import InputField from '../../components/InputField';
import ButtonGradient from '../../components/Buttons/ButtonGradient';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import NoteCard from '../../components/Cards/NoteCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditProfileScreen = ({navigation}: any) => {
    const [username, updateUsername] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}} onPress={() => navigation.goBack()}>
                    <Ionicons size={30} style={{ color: Colors.accent, marginRight: 10, marginBottom: -10, marginTop: 5 }} name="arrow-back" />
                </TouchableOpacity>
                <TextBold style={styles.headerText}>Edit Profile</TextBold>
            </View>
            <View style={styles.content}>
                <NoteCard>Your accountability partner will only be able to see your username.</NoteCard>
                <View style={styles.form}>
                    <TextDefault style={styles.formLabel}>Username</TextDefault>
                    <InputField onChangeText={updateUsername} value={username} placeholder="Username" />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 26
    },
    headerText: {
        textAlign: 'center',
        fontSize: 28,
        flex: 1, 
        paddingRight: 40
    },
    content: {
        paddingHorizontal: 10
    },
    note: {
        backgroundColor: '#D2EEFF',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 14
    },
    noteTitle: {
        color: Colors.primary,
        fontSize: 19,
        marginBottom: 6
    },
    noteText: {
        color: Colors.primary,
        fontSize: 18,
        marginBottom: 6
    },
    form: {},
    formLabel: {
        color: Colors.darkGray
    }
});

export default EditProfileScreen;