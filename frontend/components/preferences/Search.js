import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import Item from "./search/Item"; // actually need to use database for this (checkboxes) 
// Could use AsyncStorage for this to reduce database reads and writes.
const DATA = [
    {
        "name": "Sweet",
        "type": "flavour",
        "checked": false,
        "id": 1
    },
    {
        "name": "Savory",
        "type": "flavour",
        "checked": false,
        "id": 2
    },
    {
        "name": "Bitter",
        "type": "flavour",
        "checked": false,
        "id": 3
    },
    {
        "name": "Sour",
        "type": "flavour",
        "checked": false,
        "id": 4
    },
    {
        "name": "Crispy",
        "type": "flavour",
        "checked": false,
        "id": 5
    },
    {
        "name": "Spicy",
        "type": "flavour",
        "checked": false,
        "id": 6
    }]
export default function Search() {
  const [data, setData] = useState(DATA);
  const [userInput, setUserInput] = useState("");

  const changeText = (input) => {
    setUserInput(input);
    if(input) {
      input = input.toLowerCase().replace(/\s+/g, '');
    }
    setData(DATA.filter(item => item ? item.name.toLowerCase().startsWith(input) : false));
  } 

  const renderItem = ({item}) => {
    return (
    <Item checked={item.checked} name={item.name} type={item.type} id={item.id} />
    );
  };

  return (
    <View style={styles.container}>
        <SearchBar
            placeholder="Search Tags"
            value={userInput}
            onChangeText={(text) => changeText(text)}
            onClearPress={() => changeText("")}
        />
        {
        data.length !== 0 ? 
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.fl}
        />
        :
        <View style={styles.nrf}>
          <Text>No results found</Text>
        </View>
        }
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    fl: {
        marginTop: 10,
        height: "100%"
    },
    nrf: {
      height: "100%",
      marginTop: -18,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    item: {
      paddingHorizontal: 10,
      height: 50,
      marginVertical: 8,
      marginHorizontal: 8,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    checkbox: {
      height: 25,
      width: 25
    },
    name: {
      fontSize: 20,
    },
    location: {
      fontSize: 15
    },
    waitTime: {
      fontSize: 15
    },
  });
  