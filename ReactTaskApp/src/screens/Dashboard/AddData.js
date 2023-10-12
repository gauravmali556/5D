import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addChinpzData } from '../Dashboard/dispatcher';

const AddData = props => {

    const [value, onChangeText] = useState('');
    const dispatch = useDispatch([addChinpzData])


    const onPressAdd = () => {
        if (value.length > 0) {
            dispatch(addChinpzData(value))
            props.navigation.goBack()
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 30 }}>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={2}
                        placeholder='Enter Name'
                        maxLength={40}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={{ padding: 10, borderWidth: 1 }}
                    />
                </View>

                <TouchableOpacity onPress={() => onPressAdd()} style={{ alignItems: 'center', justifyContent: 'center', top: 30, margin: 50, backgroundColor: "red", height: 50 }}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </ScrollView>


        </View>
    );
};



export default AddData;