//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './hometabs';
import Home from './tabscreens/home';
import Ads from './tabscreens/ads';
import Add from './tabscreens/add';
import Favourite from './tabscreens/favourite';
import Profile from './tabscreens/profile';
import Details from './stackscreens/details';

// create a component
const HomeStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown : false
            }}
        >
            <Stack.Screen name='Home' component={HomeTabs}/>
            <Stack.Screen name='Details' component={Details}/>

           
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeStack;
