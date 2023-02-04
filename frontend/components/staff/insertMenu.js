import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import {Entypo, FontAwesome5} from 'react-native-vector-icons';
import SearchBar from "react-native-dynamic-search-bar";
  

export default function InsertMenu() {
   const [userInput, setUserInput] = useState("");

   const changeText = (input) => {
    setUserInput(input);
  }

  return (
    <View>
        <View >
            <SearchBar
                placeholder="Enter New Product Name"
                value={userInput}
                searchIconComponent = {<Entypo name = "pencil" size = {23}/>}
                onClearPress={() => changeText("")}
                onChangeText = {(text) => changeText(text)}
                style = {styles.searchbar}
            />
         </View>
        <View>
            <TouchableOpacity style={[styles.item]}>
                <Text style = {styles.title}>
                Generate Hashtags
                </Text> 
            </TouchableOpacity>
        <View style = {styles.container}>
            <View style = {styles.row}>
                <View style={[styles.ft]}>
                    <Text style = {styles.filterTag}>
                      Food?
                    </Text> 
                 </View>
                 <View style={[styles.ft2]}>
                    <Text style = {styles.filterTag}>
                      Ingredient?
                    </Text> 
                 </View>
            </View>
            <View style = {styles.row}>
                <View style={[styles.ct]}>
                    <Text style = {styles.filterTag}>
                      Cuisine?
                    </Text> 
                 </View>
                 <View style={[styles.flt]}>
                    <Text style = {styles.filterTag}>
                      Flavour?
                    </Text> 
                 </View>
            </View>
        </View>
        <TouchableOpacity style={[styles.item]}>
            <Text style = {styles.title}>
              Update Database
            </Text> 
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    },
    bar: {
        flexDirection: "row",
        alignItems: "center",
    },
    row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5
    },

    ft : {
        backgroundColor : '#8CD5FE',
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: 175
    },
    ft2 : {
        backgroundColor : '#FFE792',
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: 175
    },
    ct : {
        backgroundColor : "#6EEAA0",
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: 175
    },
    flt : {
        backgroundColor : '#FFA5E6',
        paddingHorizontal: 10,
        height: 50,
        marginVertical: 8,
        marginHorizontal: 0,
    borderRadius: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    width: 175
    },
    item: {
    paddingHorizontal: 10,
    height: 50,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  filterTag: {
    fontWeight: "480",
    fontSize: 15,
    alignText: 'center'
  },
  searchbar: {
    marginTop: 10,
    marginBottom: 10
  }
  });
  