//import liraries
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './hometabs';
import AdsPurchase from './drawerscreens/adspurchase';
import PaymentHistory from './drawerscreens/paymenthistory';
import ContactUs from './drawerscreens/contactus';
import { Text, View } from 'react-native';
import {Ionicons , MaterialIcons , FontAwesome , AntDesign} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import CustomDrawer from '../components/drawer';

// create a component
const HomeDrawer = ({navigation}) => {
    const Draw = createDrawerNavigator()


    return (
        <Draw.Navigator
        drawerContent={props=> <CustomDrawer {...props}/>}

        screenOptions={{
        
        headerStyle:{
          backgroundColor : 'green'
        }
        }} >
            <Draw.Screen component={HomeTabs} name='HomeTabs'
                options={{
                              drawerItemStyle: {
                                display: 'none'
                              },
                              headerTitleAlign: 'center',
                              headerLeftContainerStyle: {
                              },
                              
                  
                              headerTitle: () => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  <Ionicons name='location' size={20} color='black' style={{
                                    marginRight: 10
                                  }}
                                  
                                  />
                                  <Text>kerala</Text>
                                </View>
                  
                              ),
                  
                              headerRight: () => (
                                <View style={{ flexDirection: 'row' , marginRight : 10 }}>
                                  <Ionicons name='notifications' size={20} color='black'
                                    style={{ marginRight: 10 }}
                                    onPress={()=>navigation.navigate('Notifications')}
                                  />
                                  <MaterialIcons name="g-translate" size={20} color="black" />
                                </View>
                  
                  
                              )
                  
                            }}
            />
            <Draw.Screen name='MoreAds' component={AdsPurchase} options={{
                title : 'Purchase More Ads',
                drawerIcon : ()=>(
                    <FontAwesome name="dollar" size={24} color="black" />
                ),
                drawerLabel : 'Purchase More Ads'
                
            }} />
            <Draw.Screen name='PaymentHistory' component={PaymentHistory} options={{
                                title : 'Payment history',

                drawerLabel : 'Payment History',
                drawerIcon : ()=>(
                    <AntDesign name="creditcard" size={24} color="black" />
                )
            }} />
            <Draw.Screen name='ContactUs' component={ContactUs} options={{
                title : 'Contact us',
                drawerIcon : ()=>(
                    <MaterialIcons name="contact-page" size={24} color="black" />
                ),
                drawerLabel : 'Contact us'
            }}  />
        </Draw.Navigator>
    );
};


export default HomeDrawer;
