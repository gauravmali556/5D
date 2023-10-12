import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView } from 'react-native'
import Fab from '../../Component/Fab';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Dashboard/dispatcher';

const HomeScreens = props => {

  const data = useSelector((state) => state.dashboard.chinpzList)


  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ bottom: 50 }}>
        {
          data.map((item, index) => {
            return (
              <View style={{ height: 50, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }} key={index}>
                <Text>{item.userName}</Text>
              </View>
            )
          })
        }
      </ScrollView>

      <Fab onPressFab={() => props.navigation.navigate('AddData')} />
    </View>
  );
};



export default HomeScreens;