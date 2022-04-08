//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';

// create a component
const CustomDrawer = (props) => {
    return (
            <DrawerContentScrollView {...props} style={{}}> 
                           <View style={{backgroundColor : 'green' , marginTop : -4 , paddingVertical : 10 , paddingHorizontal : 10}}>
                    <View style={{height : 100 
                        ,width : 100,
                        backgroundColor : 'black',
                        borderRadius : 180,
                        borderWidth :3 ,
                        borderColor : 'yellow'}}>

                    </View>
                    <Text style={{margin : 10 , color : 'white' , fontWeight : 'bold'}}>Srj</Text>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default CustomDrawer;
