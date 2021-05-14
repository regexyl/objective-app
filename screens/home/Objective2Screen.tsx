// Displayed if user currently has uncompleted objectives.

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import TextBlack from '../../components/atomic/TextBlack';
import ButtonWhite from '../../components/Buttons/ButtonWhite';
import ButtonWhiteIcon from '../../components/Buttons/ButtonWhiteIcon';

const Objective2Screen = (props: any) => {
    const { objectiveTitle } = props.route.params;
    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Choose how you'd like to complete your objective.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonWhiteIcon style={styles.selectButton} onPress={() => props.navigation.navigate('Objective3Screen',
                    {
                        objectiveTitle: objectiveTitle,
                        type: 'accountability'
                    }
                )}>
                    <Ionicons size={40} style={{ marginBottom: -10, marginTop: 5, color: Colors.primary, textAlign: 'center' }} name="people-circle-outline" />
                    <TextBold style={styles.buttonText}>With an accountability partner</TextBold>
                </ButtonWhiteIcon>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonWhiteIcon style={styles.selectButton} onPress={() => props.navigation.navigate('Objective4Screen',
                    {
                        objectiveTitle: objectiveTitle,
                        type: 'solo',
                        description: null
                    }
                )}>
                    <Ionicons size={40} style={{ marginBottom: -10, marginTop: 5, color: Colors.primary, textAlign: 'center' }} name="person-circle-outline" />
                    <TextBold style={styles.buttonText}>Solo</TextBold>
                </ButtonWhiteIcon>
            </View>
            <ButtonWhite style={styles.backButton} onPress={() => props.navigation.goBack()}>{'<'} Back</ButtonWhite>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 50
    },
    headerContainer: {
        width: '80%',
        marginTop: 50
    },
    headerText: {
        fontSize: 30,
        color: Colors.taintedWhite
    },
    buttonContainer: {
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.primary,
        paddingVertical: 10,
        fontSize: 16
    },
    selectButton: {
        padding: 10
    },
    backButton: {
        width: 130,
        marginVertical: 50
    }
});

export default Objective2Screen;