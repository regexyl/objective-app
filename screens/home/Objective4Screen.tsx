// For accountability partner obj: Describe objective in detail for NLP API.

import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';

import SubObjective from '../../models/subObjective';

import Colors from '../../constants/Colors';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import TextBlack from '../../components/atomic/TextBlack';
import NoteCard from '../../components/Cards/NoteCard';
import WarningCard from '../../components/Cards/WarningCard';
import ButtonWhite from '../../components/Buttons/ButtonWhite';

const Objective4Screen = ({navigation}: any) => {
    const[subObjectives, setSubObjectives] = useState<SubObjective[]>([]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.screen}>
                <View style={styles.paddedContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Design your objective.</Text>
                        <Text style={styles.subHeaderText}>Set your sub-objectives to be smart and realistic.</Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <NoteCard style={styles.card}>Your accountability partner will be able to see this.</NoteCard>
                    </View>
                </View>
                <View style={styles.fullWidthContainer}>
                    <TextBold style={styles.fullWidthHeader}>Set sub-objectives</TextBold>
                    <View style={styles.timelineContainer}>

                        <View style={styles.timelineImage}></View>
                        <View style={styles.titleContainer}>
                            <TextBold style={styles.timelineHeaderText}>Sub-Objective Title</TextBold>
                            {/* <TextInput
                                style={styles.input}
                                label="Your sub-objective"
                                onChangeText={() => {}} 
                                value={subObjectives} /> */}
                        </View>
                        <View style={styles.deadlineContainer}>
                            <TextBold style={styles.timelineHeaderText}> Deadline</TextBold>
                        </View>
                    </View>
                </View>
                <View style={styles.paddedContainer}>
                    <View style={styles.buttonContainer}>
                        <ButtonWhite style={styles.button} onPress={() => navigation.goBack()}>{'<'} Back</ButtonWhite>
                        <ButtonWhite style={styles.button} onPress={() => navigation.navigate('Objective4Screen')}>Continue {'>'}</ButtonWhite>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingVertical: 50
    },
    paddedContainer: {
        paddingHorizontal: 50
    },
    headerContainer: {
        width: '80%',
        marginTop: 50
    },
    headerText: {
        fontSize: 30,
        color: Colors.taintedWhite
    },
    subHeaderText: {
        marginVertical: 10,
        fontSize: 19,
        color: Colors.taintedWhite
    },
    cardContainer: {
        marginVertical: 4
    },
    card: {
        marginVertical: 6
    },
    inputContainer: {
        marginVertical: 15
    },
    input: {
        width: '100%',
        height: 40
    },
    charLeftText: {
        marginVertical: 6,
        fontSize: 14,
        color: Colors.taintedWhite,
        textAlign: 'right'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    button: {
        width: 130
    },
    fullWidthContainer: {
        backgroundColor: Colors.taintedWhite,
        marginVertical: 20,
        padding: 20
    },
    fullWidthHeader: {
        fontSize: 20
    },
    timelineContainer: {
        flexDirection: 'row',
    },
    timelineImage: {
        borderRightColor: Colors.accent,
        borderRightWidth: 4,
        margin: 20
    },
    titleContainer: {
    },
    deadlineContainer: {
    },
    timelineHeaderText: {
        color: Colors.darkGray,
        fontSize: 16
    },
});

export default Objective4Screen;