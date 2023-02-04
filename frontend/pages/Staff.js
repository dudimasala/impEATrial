import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import StaffRestScroll from '../components/staff/staffRestScroll';
import InsertMenu from '../components/staff/insertMenu';


export default function Staff(props) {
  
  return (
    <View>
        <Text style = {styles.title}>
          Select Restaurants
      </Text>
      <View style = {styles.scrollsection}>
        <StaffRestScroll checkedRest={props.checkedRest} changeCheckedRest={props.changeCheckedRest} />
      </View>
      <Text style = {styles.title}>
          Add To Menu
      </Text>
      <View>
        <InsertMenu/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: "100%"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10
  },
  scrollsection: {
    marginTop: 0,
  }
});
