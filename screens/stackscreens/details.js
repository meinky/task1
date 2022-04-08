//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageComponent, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 , Entypo } from '@expo/vector-icons';

// create a component
const Details = ({ navigation, route }) => {
    const { name, posted_on, author, location, price } = route.params
    return (
        <View style={{ flex: 1 }}>
            <ScrollView

                contentContainerStyle={{
                    flexGrow: 1,
                }}
            // style={[styles.container, { paddingTop: useSafeAreaInsets().top }]}
            >
                <StatusBar backgroundColor='green' />
                {/* headercontainer */}


                {/* item pic */}



                <View style={{ width: '100%', height: 400, paddingTop : 40 , paddingLeft : 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' color='black' size={30} />

                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', flex: 1, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name} </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <FontAwesome name="share" size={24} color="black" />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialIcons name="favorite" size={24} color="black"
                                    style={{ marginLeft: 20 }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{price} </Text>
                        <Text >{location} </Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'grey', marginVertical: 20 }} />

                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Product Details </Text>
                        <Text >For best results please apply with minimum water </Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'grey', marginVertical: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginRight: 20 }}>Review </Text>
                            <Ionicons name='star' color='orange' size={25} style={{
                                marginRight : 5
                            }} />
                            <Ionicons name='star' color='orange' size={25} style={{
                                marginRight : 5
                            }} />
                            <Ionicons name='star' color='orange' size={25} style={{
                                marginRight : 5
                            }} />
                            <Ionicons name='star' color='orange' size={25} style={{
                                marginRight : 5
                            }} />
                            <Ionicons name='star' color='orange' size={25} style={{
                                marginRight : 5
                            }} />

                        </View>

                        <Ionicons name='chevron-forward' color='black' size={25} />


                    </View>

                    <View style={{ borderWidth: 1, borderColor: 'grey', marginVertical: 20 }} />

                    <View>
                        <Text style={{
                            fontSize: 18, fontWeight: 'bold', color: 'black',
                            marginBottom: 10
                        }}>Posted By </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: 'grey', height: 70, width: 70, borderRadius: 180, marginRight: 10 }} />
                            <View>
                                <Text>{author} </Text>
                                <Text>Posted on {posted_on} </Text>

                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection : 'row' , justifyContent :'space-between' , marginVertical : 20}}>
                        <View style={{ paddingVertical : 10 ,flexDirection : 'row' , paddingHorizontal : 20 , backgroundColor : 'green',
                        borderRadius : 5, width : '45%' , justifyContent : 'center'
                    }}> 
                            <Entypo name='phone' color='white' size={20}/>
                            <Text style={{color : 'white' , fontSize : 16 , marginLeft : 10 }}>Call</Text>
                        </View>

                        <View style={{ paddingVertical : 10 ,flexDirection : 'row' , paddingHorizontal : 20 , backgroundColor : 'green',
                        borderRadius : 5, width : '45%' , justifyContent : 'center'
                    }}> 
                            <FontAwesome5 name="hands-helping" size={20} color="white" />
                            <Text style={{color : 'white', fontSize : 16 , marginLeft : 10 }}>Make offer</Text>
                        </View>
                    </View>






                </View>



            </ScrollView>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Details;
