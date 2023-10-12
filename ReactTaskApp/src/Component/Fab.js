import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Fab = props => {


    return (
        <TouchableOpacity onPress={() => props.onPressFab()} style={{ height: 50, width: 90, borderRadius: 10, justifyContent: 'center', alignSelf: 'flex-end', right: 30, bottom: 30, position: 'absolute', backgroundColor: "red" }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', }}>
                {"Click"}
            </Text>
        </TouchableOpacity>
    );
};



export default Fab;