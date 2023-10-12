import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { getData } from './Dashboard/dispatcher';

const SplashScreen = props => {

    const dispatch = useDispatch([getData])
    useEffect(() => {
        dispatch(getData())
        setTimeout(() => {
            props.navigation.navigate('HomeScreens')
        }, 500)

    });
    return (
        <View style={{ flex: 1 }}>
            <Text>Hello SplashScreen</Text>
        </View>
    );
};



export default SplashScreen;