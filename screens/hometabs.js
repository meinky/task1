//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './tabscreens/home';
import Ads from './tabscreens/ads';
import Add from './tabscreens/add';
import Favourite from './tabscreens/favourite';
import Profile from './tabscreens/profile';
import {Ionicons , MaterialIcons} from '@expo/vector-icons'

// create a component
const HomeTabs = ({navigation}) => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle : {
                backgroundColor : 'green',
                height : 60
            },
            headerShown : false,
            
        }}  >
            <Tab.Screen name='Home' component={Home}
            options={{
                tabBarIcon : ({focused})=>(
                    <Ionicons name='home' color='white' size={25} />
                ),
                tabBarLabel : ({focused})=>(
                    focused ? <Text style={{color : 'white'}}>Home</Text> : null
                ),
            }}
            />
            <Tab.Screen name='Ads' component={Ads} options={{
                tabBarIcon : ({focused})=>(
                    <Ionicons name='receipt' color='white' size={25} />
                ),
                tabBarLabel : ({focused})=>(
                    focused ? <Text style={{color : 'white'}}>Ads</Text> : null
                ),
            }}/>
            <Tab.Screen name='Add' component={Add} options={{
                tabBarIcon : ({focused})=>(
                    <Ionicons name='md-add-circle-sharp' color='white' size={25} />
                ),
                tabBarLabel : ({focused})=>(
                    focused ? <Text style={{color : 'white'}}>Add</Text> : null
                ),
            }}/>
            <Tab.Screen name='Favourite' component={Favourite} options={{
                tabBarIcon : ({focused})=>(
<MaterialIcons name="favorite" size={25} color="white" />                ),
                tabBarLabel : ({focused})=>(
                    focused ? <Text style={{color : 'white'}}>Favorite</Text> : null
                ),
            }}/>
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon : ({focused})=>(
                    <Ionicons name='person' color='white' size={25} />
                ),
                tabBarLabel : ({focused})=>(
                    focused ? <Text style={{color : 'white'}}>Profile</Text> : null
                ),
            }}/>

        </Tab.Navigator>
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
export default HomeTabs;
