import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import Item from "./staffItem";
const DATA = [
    {
        "name": "SCR Restaurant",
        "checked": false,
        "image": "../../../assets/scr.png",
        "id": 1
    },
    {
        "name": "h-Bar",
        "checked": false,
        "image": "../../../assets/h-bar.png",
        "id": 2
    },
    {
        "name": "Kimiko",
        "checked": false,
        "image": "../../../assets/kimiko.png",
        "id": 3
    }
]

export default function StaffRestScroll() {
  const [data, setData] = useState(DATA);
  const [userInput, setUserInput] = useState("");

  const changeText = (input) => {
    setUserInput(input);
    input = input.toLowerCase();
    const checkStart = (item) => {
        return (item.startsWith(input))
      }
    setData(DATA.filter(item => item.name.toLowerCase().split(" ").some(checkStart)));
  }

  const renderItem = ({item}) => {
    return (
    <Item checked={item.checked} name={item.name} type={item.type} id={item.id} />
    );
  };


  return (
    <View style={styles.container}>
        <SearchBar
            placeholder="Search Restaurants"
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
        height: 240,
        marginBottom: 0
    },
    fl: {
        padding: 20,
        marginTop: 0,
        height: "100%",
        paddingVertical: 30,
        marginBottom: 10
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
      borderRadius: 30,
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
  