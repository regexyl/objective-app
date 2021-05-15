import React, { useState } from 'react';
import {View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInput, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import InputField from '../../components/InputField';
import TextDefault from '../../components/Text/TextDefault';
import TextBold from '../../components/Text/TextBold';
import ButtonGradient from '../../components/Buttons/ButtonGradient';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateEmailVal = (emailVal: string) => {
        setEmail(emailVal);
    }

    const updatePasswordVal = (passwordVal: string) => {
        setPassword(passwordVal);
    }

    const onLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.screen}>
                <KeyboardAvoidingView>
                    <TextBold style={styles.header}>Login now.</TextBold>
                    <View style={styles.inputContainer}>
                        <InputField onChangeText={updateEmailVal} value={email} placeholder="Email" keyboardType="email-address"  autoCapitalize="none" />
                        <InputField secureTextEntry={true} onChangeText={updatePasswordVal} value={password} placeholder="Password" autoCapitalize="none" />
                        <TextDefault style={styles.forgotPassword}>Forgot password?</TextDefault>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonGradient onPress={onLogin}>Login</ButtonGradient>
                        <ButtonDefault style={styles.googleConnectButton}>
                            <Ionicons size={22} style={{ color: 'white', marginRight: 10, marginBottom: -10, marginTop: 5 }} name="logo-google" />
                            <Text>  Connect with Google</Text>
                        </ButtonDefault>
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.footer}>
                    <TextDefault style={styles.footerText}>Don't have an account? </TextDefault>
                    <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
                        <TextBold style={styles.signUpText}>Sign up.</TextBold>
                    </TouchableOpacity>
                </View>
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
    forgotPassword: {
        textAlign: 'right',
        fontSize: 16,
        color: Colors.placeholder
    },
    buttonContainer: {
        marginVertical: 10,
        // padding: 30,
        alignContent: 'center'
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
    }
});

export default LoginScreen;