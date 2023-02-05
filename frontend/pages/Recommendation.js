import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import MealView from "../components/MealView";
const DATA = require("../../backend/json/menuitems.json");

export default function Recommendation() {

  const renderItem = ({item}) => {
    return (
    <MealView 
    restaurant={item.restaurant} 
    fooddrink={item.fooddrink}
    item={item.item}
    price={item.price}
    glutenFree={item.glutenFree}
    vegetarian={item.vegetarian}
    vegan={item.vegan}
    waittime = {item.waittime}
    id = {item.id}
    />
    )
  };

  return (
    <View style={styles.container}>
        <FlatList
            data={DATA.filter(item => item.fooddrink === "Food")}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            style={styles.fl}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "88%"
  }
});