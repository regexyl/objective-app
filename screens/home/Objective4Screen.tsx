// For accountability partner obj: Describe objective in detail for NLP API.

import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, FlatList, StyleSheet} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import SubObjective from '../../models/subObjective';

import { windowHeight, windowWidth } from '../../src/local/config';
import Colors from '../../constants/Colors';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import ButtonOutline from '../../components/Buttons/ButtonOutline'
import ButtonWhite from '../../components/Buttons/ButtonWhite';
import NoteCard from '../../components/Cards/NoteCard';
import SubObjInput from '../../components/Inputs/SubObjInput';

const Objective4Screen = (props: any) => {
    const [latestId, setLatestId] = useState(1);
    const [currInputIndex, setCurrInputIndex] = useState('');
    const [numOfSubObj, setNumOfSubObj] = useState(1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // const [timelineImgHeight, setTimelineImgHeight] = useState(40);

    const { objectiveTitle, type, description } = props.route.params;
    console.log('SCREEN IS RELOADED')
    console.log('currInputIndex: ', currInputIndex)
    const [subObjectives, setSubObjectives] = useState<SubObjective[]>([{
        id: '0',
        subTitle: '',
        subDeadline: '14/05/2021'
    },
]);

    const timelineImgHeight = 40 * numOfSubObj

    console.log('timelineImgHeight: ', timelineImgHeight)

    /**
     * @dev The following functions display the DatePicker modal and handles chosen date.
     */
    const showDatePicker = (selectedIndex: string) => {
        Keyboard.dismiss();
        setCurrInputIndex(selectedIndex);
        console.log('currInputIndex: ', currInputIndex)
        setDatePickerVisibility(true);
      };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        const chosenDate = moment(date).format("DD/MM/YYYY");

        // Add the new chosen date to the specific row
        let i: number;
        let indexToChange: number;

        for (i = 0; i < subObjectives.length; i++) {
            if (subObjectives[i].id === currInputIndex) {
                indexToChange = i;
                break;
            }
        }

        let subObjectivesCopy = [...subObjectives];
        let item = {...subObjectivesCopy[indexToChange]};
        item.subDeadline = chosenDate;
        subObjectivesCopy[indexToChange] = item;

        setSubObjectives([ ...subObjectivesCopy ])

        hideDatePicker();
    };

    /**
     * @dev 
     */

    const addSubObj = () => {
        if (numOfSubObj < 3) {
            setSubObjectives((currentSubObj) => [ ...subObjectives, 
                { 
                    id: latestId.toString(), 
                    subTitle: '',
                    subDeadline: moment(new Date()).format("DD/MM/YYYY")
                }]);
            setLatestId(latestId + 1);
            setNumOfSubObj(numOfSubObj + 1);
            // setTimelineImgHeight(40 * numOfSubObj);
        }
    }

    const removeSubObj = (selectedIndex: string) => {
        setSubObjectives((currentSubObj) => {
            return currentSubObj.filter((subObj) => subObj.id !== selectedIndex)
        })
        // setTimelineImgHeight(40 * numOfSubObj);
        if (numOfSubObj > 0) {
            setNumOfSubObj(numOfSubObj - 1);
        }
    }
    
    const subObjTextHandler = (selectedIndex: string, enteredText: string) => {
        let i: number;
        let indexToChange: number;

        for (i = 0; i < subObjectives.length; i++) {
            if (subObjectives[i].id === selectedIndex) {
                indexToChange = i;
                break;
            }
        }

        let subObjectivesCopy = [...subObjectives];
        let item = {...subObjectivesCopy[indexToChange]};
        item.subTitle = enteredText;
        subObjectivesCopy[indexToChange] = item;

        setSubObjectives([ ...subObjectivesCopy ])
    }

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

                    <View style={styles.timelineHeader}>
                        <TextBold style={styles.fullWidthHeader}>Set sub-objectives</TextBold>
                        <ButtonOutline style={styles.addButton} onPress={addSubObj}>Add sub-objective</ButtonOutline>
                    </View>

                    <View style={styles.timelineContainer}>
                        <View style={styles.titleContainer}>
                            <TextBold style={styles.timelineHeaderText}>Sub-Objective Title</TextBold>
                        </View>
                        <View style={styles.deadlineContainer}>
                            <TextBold style={styles.timelineHeaderText}> Deadline</TextBold>
                        </View>
                    </View>

                    <View style={{...styles.timelineImage, height: timelineImgHeight}}></View>

                    <View style={styles.timelineInputContainer}>
                        <FlatList 
                            keyExtractor={item => item.id}
                            data={subObjectives}
                            renderItem={itemData => (
                                <SubObjInput 
                                    subTitleValue={itemData.item.subTitle} 
                                    deadlineValue={itemData.item.subDeadline} 
                                    onChangeText={subObjTextHandler.bind(this, itemData.item.id)}
                                    deadlineOnFocus={showDatePicker.bind(this, itemData.item.id)}
                                    onPress={removeSubObj.bind(this, itemData.item.id)}
                                    />
                            )}
                        />

                        <View style={styles.newRow}>
                            <View style={styles.finalObjective}>
                                <View style={styles.blueCircle} />
                                <View style={styles.objectiveText}>
                                    <TextDefault style={styles.objectiveTitle}>{objectiveTitle}</TextDefault>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={styles.paddedContainer}>
                    <View style={styles.buttonContainer}>
                        <ButtonWhite style={styles.button} onPress={() => props.navigation.goBack()}>{'<'} Back</ButtonWhite>
                        <ButtonWhite style={styles.button} onPress={() => props.navigation.navigate('Objective4Screen', 
                            {
                                objectiveTitle: objectiveTitle,
                                type: type,
                                description: description,
                                subObjectives: subObjectives
                            }
                        )}>
                            Continue {'>'}
                        </ButtonWhite>
                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date}
                />
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
        fontSize: 27.6,
        color: Colors.taintedWhite
    },
    subHeaderText: {
        marginVertical: 10,
        fontSize: 17,
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
    timelineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4
    },
    fullWidthHeader: {
        fontSize: 22,
    },
    timelineContainer: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingLeft: windowWidth / 10.8
    },
    timelineImage: {
        position: 'absolute',
        top: windowHeight / 9.4,
        left: windowWidth / 21,
        borderRightColor: Colors.accent,
        borderRightWidth: 4,
        marginTop: 12,
        marginRight: 30,
        paddingLeft: 10
    },
    titleContainer: {
        width: windowWidth * 0.5
    },
    deadlineContainer: {
        width: windowWidth * 0.25
    },
    timelineInputContainer: {
        
    },
    timelineHeaderText: {
        color: Colors.darkGray,
        fontSize: 16,
    },
    // example of row
    newRow: {
        marginTop: 10
    },
    blueCircle: {
        width: windowWidth / 18,
        height: windowWidth / 18,
        borderRadius: windowWidth / 2,
        backgroundColor: Colors.primary,
        borderColor: Colors.accent,
        borderWidth: 3
    },
    finalObjective: {
        flexDirection: 'row',
        // height: windowWidth / 16
    },
    objectiveText: {
        marginLeft: 14,
        width: windowWidth * 0.5,
        paddingRight: 10
    },
    objectiveTextInput: {
        height: windowWidth / 16 + 5
    },
    objectiveTitle: {
        fontSize: 17,
        color: Colors.accent,
        // flexWrap: 'wrap'
    },
    deadlineText: {
        width: windowWidth * 0.25
    },
    deadlineTextInput: {
        height: windowWidth / 16 + 5
    },
    addButton: {
        width: windowWidth / 2.8,
        height: windowHeight / 28,
        padding: 0,
        marginVertical: 0,
        fontSize: 15
    },
});

export default Objective4Screen;