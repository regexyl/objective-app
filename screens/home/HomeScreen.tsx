import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import SwitchButton from '../../components/Buttons/SwitchButton';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import TextBlack from '../../components/atomic/TextBlack';

const HomeScreen = ({navigation}: any) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const placeholder = 
            <View style={styles.screenContent}>
                <TextBold style={styles.header}>Your Objectives</TextBold>
                <View style={styles.placeholder}>
                    <Image style={styles.placeholderImage} source={require('../../assets/images/objective-mountain-transparent.png')} />
                    <TextDefault style={styles.placeholderText}>Add an objective!</TextDefault>
                </View>
            </View>

    const addNewGoalButton = 
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Objective1Screen')}>
            <Ionicons size={30} style={{ marginBottom: -10, marginTop: 5, color: Colors.whitishGray, textAlign: 'center' }} name="add-outline" />
            <TextBold style={styles.addButtonText}>Add an objective</TextBold>
        </TouchableOpacity>

    const content = isSwitchOn ? addNewGoalButton : placeholder;

    return (
        <View style={styles.screen}>
            <View style={styles.switchButton}>
                <SwitchButton value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <View style={styles.addButtonContainer}>
                {content}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    screenContent: {
        alignItems: 'center'
    },
    switchButton: {
        marginTop: 70,
        marginRight: 30,
        alignItems: 'flex-end'
    },
    header: {
        fontSize: 26,
    },
    placeholder: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '10%'
    },
    placeholderImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 150,
        opacity: 0.5,
    },
    placeholderText: {
        fontSize: 24,
        opacity: 0.5
    },
    addButtonContainer: {
        alignItems: 'center',
    },
    addButton: {
        width: 200,
        borderRadius: 50,
        backgroundColor: Colors.primary,
        padding: 40
    },
    addButtonText: {
        textAlign: 'center',
        fontSize: 26,
        marginTop: 18,
        color: Colors.whitishGray
    }
});

export default HomeScreen;