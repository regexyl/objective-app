// For accountability partner obj: Describe objective in detail for NLP API.

import React, { useState } from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, FlatList, StyleSheet} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import { windowHeight, windowWidth } from '../../src/local/config';
import Colors from '../../constants/Colors';
import SubObjective from '../../models/subObjective';
import TextDefault from '../../components/Text/TextDefault';
import TextBold from '../../components/Text/TextBold';
import ButtonOutline from '../../components/Buttons/ButtonOutline'
import ButtonWhite from '../../components/Buttons/ButtonWhite';
import NoteCard from '../../components/Cards/NoteCard';
import SubObjInput from '../../components/Inputs/SubObjInput';
import InputDate from '../../components/Inputs/InputDate';

const Objective4Screen = (props: any) => {
    const [latestId, setLatestId] = useState(1);
    const [currInputIndex, setCurrInputIndex] = useState('');
    const [minDate, setMinDate] = useState(new Date);
    const [numOfSubObj, setNumOfSubObj] = useState(1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [finalDeadline, setFinalDeadline] = useState('');

    const { objectiveTitle, type, description } = props.route.params;

    const [subObjectives, setSubObjectives] = useState<SubObjective[]>([
        {
            id: '0',
            subTitle: '',
            subDeadline: ''
        },
    ]);

    console.log('subObjectives: ', subObjectives)

    const timelineImgHeight = 40 * numOfSubObj

    /**
     * @dev The following functions display the DatePicker modal and handles chosen date.
     */
    const showDatePicker = (selectedIndex: string) => {
        Keyboard.dismiss();
        setCurrInputIndex(selectedIndex);

        let i: number;
        let indexInSubObjArr: number;
        let currMinDate: Date;

        for (i = 0; i < subObjectives.length; i++) {
            if (subObjectives[i].id === selectedIndex) {
                indexInSubObjArr = i;
                break;
            }
        }

        if (indexInSubObjArr === 0) {
            currMinDate = new Date;
        } else if (indexInSubObjArr > 0) {
            const prevObjDate = subObjectives[indexInSubObjArr - 1].subDeadline;
            console.log('prevObjDate: ', prevObjDate)
            const year = parseInt(prevObjDate.slice(-4));
            const month = parseInt(prevObjDate.slice(3, 5));
            const day = parseInt(prevObjDate.slice(0, 2));
            currMinDate = new Date(year, month - 1, day);
        } else {
            subObjectives.slice(-1)[0].subDeadline
            currMinDate = subObjectives.slice(-1)[0].subDeadline;
        }
        setMinDate(currMinDate);
        setDatePickerVisibility(true);
      };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const handleConfirm = (date) => {
        // Due to bug in DateTimePicker Modal package, the following condition is added
        if (date < new Date) { date = new Date }

        const chosenDate = moment(date).format("DD/MM/YYYY");
        console.log('date: ', date)

        console.log('currInputIndex: ', currInputIndex)

        if (currInputIndex !== '-1') {
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
        } else {
            setFinalDeadline(chosenDate);
        }

        hideDatePicker();
    };

    /**
     * @dev 
     */

    const addSubObj = () => {
        if (numOfSubObj < 3) {
            setSubObjectives(() => [ ...subObjectives, 
                { 
                    id: latestId.toString(), 
                    subTitle: '',
                    subDeadline: ''
                }]);
            setLatestId(latestId + 1);
            setNumOfSubObj(numOfSubObj + 1);
        }
    }

    const removeSubObj = (selectedIndex: string) => {
        setSubObjectives((currentSubObj) => {
            return currentSubObj.filter((subObj) => subObj.id !== selectedIndex)
        })
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

                <View style={styles.fullWidthContainer}>
                    <View style={styles.timelineHeader}>
                        <TextBold style={styles.fullWidthHeader}>Objective Completion Date</TextBold>
                    </View>
                    <InputDate
                        style={styles.finalDeadlineInput}
                        deadlineValue={finalDeadline}
                        deadlineOnFocus={showDatePicker.bind(this, '-1')}
                    />
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
                    minimumDate={minDate}
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
        marginTop: 20,
        marginBottom: 10,
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
    finalDeadlineInput: {
        marginVertical: 14
    }
});

export default Objective4Screen;