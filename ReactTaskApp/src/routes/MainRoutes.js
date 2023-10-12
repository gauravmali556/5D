import React from 'react';
import { Root } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreens from '../screens/Dashboard/HomeScreens';
import AddData from '../screens/Dashboard/AddData';

const Stack = createStackNavigator();
const MainRoutes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SplashScreen}  >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="HomeScreens" component={HomeScreens} />
                <Stack.Screen name="AddData" component={AddData} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default MainRoutes;