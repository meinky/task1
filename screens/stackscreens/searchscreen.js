//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { categories } from '../../data/ads';

// create a component
const SearchScreen = ({ route , navigation }) => {

    const { searchTerm } = route.params
    const [_searchTerm, _setsearchTerm] = useState(searchTerm)
    const [searchResults, setSearchResults] = useState([])

    const renderResults = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginTop: 20 }}
            onPress={()=>navigation.navigate('Details',{name : item.name ,
                posted_on:item.posted_on,
               author :   item.author,
               location :  item.location,
               price :  item.price})}
            >
                <Text style={{ fontSize: 20, fontWeight: 'bold' , marginBottom : 10 }}>{item.name} </Text>
                <Text style={{fontSize : 16, marginBottom : 10 }}>{item.author} </Text>
                <Text style={{fontSize : 16, marginBottom : 10 }}>{item.posted_on} </Text>

                <Text style={{fontSize : 20 , fontWeight : 'bold'}}>{item.price} </Text>

                <View style={{ borderWidth: 1, marginVertical: 20 }} />
            </TouchableOpacity>


        )
    }

    useEffect(() => {
        handleSearch(searchTerm)
    }, [])

    const handleSearch = (text) => {
        if (text) {

            const filterResult = categories.filter((res) => {
                return res.name.toLowerCase().includes(text.toLowerCase())

            })
            setSearchResults(filterResult)
        }
        else{
            setSearchResults([])
        }
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
                <TouchableOpacity onPress={() => navigation.navigate('SearchScreen', { searchTerm })}
                    disabled={searchTerm.length < 3 ? true : false}
                >
                    <Ionicons color='black' name='search' size={20} />

                </TouchableOpacity>
                <TextInput
                    onChangeText={(text) => handleSearch(text)}
                    style={{ flex: 1, maxWidth: 255, marginLeft: 10 }} />

            </View>

            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Search Results</Text>

            <FlatList
                data={searchResults}
                renderItem={renderResults}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20

    },
});

//make this component available to the app
export default SearchScreen;
