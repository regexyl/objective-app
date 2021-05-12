import React, { useState } from 'react';
import {View, FlatList, Button, ScrollView, StyleSheet} from 'react-native';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import TextDefault from '../../components/atomic/TextDefault';
import TextBold from '../../components/atomic/TextBold';
import ButtonGradient from '../../components/Buttons/ButtonGradient';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import ButtonOutlineGray from '../../components/Buttons/ButtonOutlineGray';
import ProfileStats from '../../components/ProfileStats';
import ProfileCard from '../../components/Cards/ProfileCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextBlack from '../../components/atomic/TextBlack';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const DATA = [
    {
      id: '1',
      objectiveTitle: 'Finish the 2020 ST Virtual Run of 17.5km within 1.5 hours.',
      duration: '3 months',
      finishDate: '24 Aug 2020',
    },
    {
      id: '2',
      objectiveTitle: 'Build a Python script to automate the conversion of file formats.',
      duration: '1 month',
      finishDate: '30 Sep 2020',
    },
    {
      id: '3',
      objectiveTitle: '58694a0f-3da1-471f-bd96-145571e29d72',
      duration: '3 months',
      finishDate: '24 Aug 2020',
    },
  ];

const FAILEDDATA = [
    {
      id: '1',
      objectiveTitle: 'Go for yoga class once a week for a month.',
      duration: '2 weeks',
      finishDate: '3 Apr 2020',
    },
  ];

const ProfileScreen = ({navigation}: any) => {
    
    const renderItem = ({item}: any) => (
        <ProfileCard style={styles.profileCard} objectiveTitle={item.objectiveTitle} duration={item.duration} finishDate={item.finishDate} />
    );
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.settingsIcon} onPress={() => navigation.navigate('SettingsScreen')}>
                <Ionicons size={33} style={{ color: Colors.accent, marginRight: 10, marginBottom: -10, marginTop: 5 }} name="settings-sharp" />
            </TouchableOpacity>
            <View style={styles.headerContainer}>
                <TextBold style={styles.nameText}>Name</TextBold>
                <View style={styles.headerSubContainer}>
                    <View style={styles.headerStats}>
                        <ProfileStats title="Completed" stats="2" />
                        <View style={styles.divider} />
                        <ProfileStats title="In-Progress" stats="1" />
                    </View>
                    <ButtonOutlineGray title="Edit Profile" style={styles.editProfileButton} onPress={() => navigation.navigate('EditProfileScreen')} />
                </View>
            </View>
            <View style={styles.cardContainer}>
                <TextBold style={styles.objectiveSectionHeader}>Completed Objectives</TextBold>
                <View style={styles.cardRow}>
                    <FlatList horizontal data={DATA} renderItem={renderItem} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false} />
                </View>
            </View>
            <View style={styles.cardContainer}>
                <TextBold style={styles.objectiveSectionHeader}>Failed Objectives</TextBold>
                <View style={styles.cardRow}>
                    <FlatList horizontal data={FAILEDDATA} renderItem={renderItem} keyExtractor={item => item.id} showsHorizontalScrollIndicator={false} />
                </View>
            </View>
            <View style={styles.failedContainer}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingLeft: 40,
    },
    settingsIcon: {
        marginTop: 64,
        alignItems: 'flex-end',
        marginHorizontal: 17
    },
    headerContainer: {
        marginVertical: 10
    },
    nameText: {
        fontSize: 36
    },
    headerSubContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginVertical: 13
    },
    headerStats: {
        flexDirection: 'row'
    },
    divider: {
        borderRightColor: Colors.darkGray,
        borderRightWidth: 1,
        marginHorizontal: 12
    },
    editProfileButton: {
        marginRight: 28
    },
    cardContainer: {
        marginBottom: 8
    },
    cardRow: {
        flexDirection: 'row',
        marginTop: 18
    },
    profileCard: {
        marginRight: 18
    },
    failedContainer: {},
    objectiveSectionHeader: {
        fontSize: 26
    },
});

export default ProfileScreen;