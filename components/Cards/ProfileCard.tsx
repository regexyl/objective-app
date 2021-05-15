// Cards on Profile Screen that displays both Completed and Failed Objectives
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import TextDefault from '../Text/TextDefault';
import TextBold from '../Text/TextBold';

const ProfileCard = (props: any) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            <View style={styles.topContainer}>
                <TextDefault numberOfLines={4} style={styles.objectiveTitle}>{props.objectiveTitle}</TextDefault>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.row}>
                    <TextDefault style={styles.bottomHeader}>Duration: </TextDefault>
                    <TextBold style={styles.highlight}>{props.duration}</TextBold>
                </View>
                <View style={styles.row}>
                    <TextDefault style={styles.bottomHeader}>Finish Date: </TextDefault>
                    <TextBold style={styles.highlight}>{props.finishDate}</TextBold>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: 240,
        height: 250
    },
    row: {
        flexDirection: 'row'
    },
    topContainer: {
        height: '60%',
        padding: 20,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
    },
    bottomContainer: {
        padding: 20,
        backgroundColor: Colors.whitishGray,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    bottomHeader: {
        fontSize: 17
    },
    objectiveTitle: {
        fontSize: 22,
        color: Colors.background
    },
    highlight: {
        fontSize: 17,
        color: Colors.primary
    }
});

export default ProfileCard;