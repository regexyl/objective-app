import React, { useState } from 'react';
import {View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInput, Text, StyleSheet} from 'react-native';
import { firebase } from '../../src/firebase/config'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import ButtonOutline from '../../components/Buttons/ButtonOutline';
import Divider from '../../components/Divider';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegistrationScreen = ({navigation}: any) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [passwordWarning, setPasswordWarning] = React.useState(<View></View>);

    const updateNameVal = (nameVal: string) => {
        setName(nameVal);
    }

    const updateEmailVal = (emailVal: string) => {
        setEmail(emailVal);
    }

    const updatePasswordVal = (passwordVal: string) => {
        setPassword(passwordVal);
    }

    const checkPasswordMatch = (passwordVal: string) => {
        setConfirmPassword(passwordVal);
    }

    const usersRef = firebase.firestore().collection('users')

    const onRegistration = () => {
        // Check if passwords match first
        if (password === confirmPassword) {
            setPasswordWarning(<View></View>)
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    console.log(result)
                    const userId = result.user.uid
                    // Create user details document in Firebase
                    usersRef.doc(userId).set({
                        "name": name,
                        "email": email
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            setPasswordWarning(<TextDefault style={styles.passwordWarning}>Passwords do not match!</TextDefault>)
        }

    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.screen}>
                <KeyboardAvoidingView>
                    <TextBold style={styles.header}>Create your account.</TextBold>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} onChangeText={updateNameVal} value={name} placeholder="Your name" />
                        <TextInput style={styles.input} onChangeText={updateEmailVal} value={email} placeholder="Email" keyboardType="email-address"  autoCapitalize="none" />
                        <TextInput style={styles.input} secureTextEntry={true} onChangeText={updatePasswordVal} value={password} placeholder="Password" autoCapitalize="none" />
                        <TextInput style={styles.input} secureTextEntry={true} onChangeText={checkPasswordMatch} value={confirmPassword} placeholder="Confirm Password" autoCapitalize="none" />
                        {passwordWarning}
                    </View>
                    <View style={styles.separator}>
                        <Divider />  
                        {/* <TextDefault>OR</TextDefault>
                        <Divider />   */}
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonDefault style={styles.googleConnectButton}>
                            <Ionicons size={22} style={{ color: 'white', marginRight: 10, marginBottom: -10, marginTop: 5 }} name="logo-google" />
                            <Text>  Connect with Google</Text>
                        </ButtonDefault>
                    </View>
                    <ButtonOutline style={styles.createButton} onPress={onRegistration}>Create</ButtonOutline>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        padding: 55
    },
    header: {
        fontSize: 42,
        marginBottom: 14
    },
    inputContainer: {
        marginVertical: 20
    },
    input: {
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.placeholder,
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 16,
        color: Colors.placeholder
    },
    passwordWarning: {
        marginTop: 4,
        fontSize: 17,
        color: Colors.darkRed,
        textAlign: 'right'
    },
    buttonContainer: {
        marginVertical: 10,
        // padding: 30,
        alignContent: 'center'
    },
    separator: {
        // flexDirection: 'row',
        marginBottom: 8
    },
    footer: {
        // flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        left: 0,
        right: 0,
        bottom: '5%'
    },
    footerText: {
        fontSize: 18
    },
    signUpText: {
        fontSize: 18,
        color: Colors.primary
    },
    googleConnectButton: {
        backgroundColor: Colors.darkRed
    },
    createButton: {
        marginTop: 74
    }
});

export default RegistrationScreen;