//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../../data/ads';
import { FlatList } from 'react-native-gesture-handler';

// create a component
const Home = ({navigation}) => {
    const [inputCheck, setinputCheck] = useState(false)
    const [searchTerm, setsearchTerm] = useState('')

    const renderAds = ({ item }) => {
        return (
            <Pressable style={{ width : 200 , padding : 20 , borderRadius : 10, overflow: 'hidden', marginLeft : item.id == 1 ? 4 : 20 , backgroundColor : 'white',elevation : 4 ,marginVertical : 10 }}
            onPress={()=>navigation.navigate('Details',{name : item.name ,
               posted_on:item.posted_on,
              author :   item.author,
              location :  item.location,
              price :  item.price})}
            >
                <View style={{ height: 100, width: '100%', backgroundColor: 'white' , alignSelf : 'center' , borderRadius : 10 , elevation : 5 }} />
                <Text style={{alignSelf : 'center' , fontSize : 20 , fontWeight : 'bold'}}> {item.name} </Text>
                <View style={{flexDirection : 'row' , alignItems : 'center' ,marginBottom : 10}}>
                    <Ionicons name='watch' size={15} color='black'/>
                    <View>
                        <Text>Posted On</Text>
                    <Text> {item.posted_on} </Text>
                    </View>
                    
                </View>

                <View style={{flexDirection : 'row' , alignItems : 'center',marginBottom : 10}}>
                    <Ionicons name='person' size={15} color='black'/>
                    <View>
                        <Text> {item.author} </Text>
                    </View>
                    
                </View>

                <View style={{flexDirection : 'row' , alignItems : 'center',marginBottom : 10}}>
                    <Ionicons name='location' size={15} color='black'/>
                    <View>
                        <Text numberOfLines={2} > {item.location} </Text>
                    </View>
                    
                </View>
                <Text style={{textAlign : 'center' , fontSize : 20 , fontWeight : 'bold' , color:'green'}}> {item.price} </Text>
            </Pressable>


        )
    }
    return (
        <View style={styles.container}>
            <View style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
                paddingVertical: 10,
            }}>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('SearchScreen', {searchTerm})
                    setsearchTerm('')
                }}
                disabled={searchTerm.length <3 ? true : false}
                >
                    <Ionicons color='black' name='search' size={20} />

                </TouchableOpacity>
                <TextInput
                value={searchTerm}
                onChangeText={(value)=>setsearchTerm(value)}
                style={{ flex: 1, maxWidth: 255, marginLeft: 10 }} />

            </View>
            {/* categories */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'grey' }} />
                    <Text style={{ color: 'green', fontSize: 16 }}>Machineries</Text>

                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'grey' }} />
                    <Text style={{ color: 'green', fontSize: 16 }}>Fertilizers</Text>

                </View>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'grey' }} />
                    <Text style={{ color: 'green', fontSize: 16 }}>Seeds</Text>

                </View>
            </View>

            {/* carouselplaceholder */}
            <View style={{width : '100%' , height : 120 , backgroundColor : 'grey' , marginTop : 10}}/>

            {/* featured ads */}

            <Text>Featured ads</Text>
            <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categories}
                    renderItem={renderAds}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
});

//make this component available to the app
export default Home;
