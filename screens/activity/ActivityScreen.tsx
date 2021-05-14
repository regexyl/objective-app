import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonGradient from '../../components/Buttons/ButtonGradient';

const ActivityScreen = () => {
    return (
        <View>
            <Text>This is the activity screen.</Text>
            <ButtonGradient>Hello there</ButtonGradient>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ActivityScreen;