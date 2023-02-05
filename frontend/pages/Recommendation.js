import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import MealView from '../components/MealView';
import Config from '../../backend/config';

const DATA = require('../../backend/json/menuitems.json');

const testNutritionData = require('../../backend/json/testnutritiondata.json');
const recommendationMale = require('../../backend/json/recommendation_male.json');
import rankMenuItems from '../../backend/algorithm';

export default function Recommendation() {
  const [menuItems, setMenuItems] = useState([]);

  const renderItem = ({ item }) => (
    <MealView
      restaurant={item.restaurant}
      fooddrink={item.fooddrink}
      item={item.item}
      price={item.price}
      glutenFree={item.glutenFree}
      vegetarian={item.vegetarian}
      vegan={item.vegan}
    />
  );

  async function getMenuItems() {
    const url = `${Config.localtunnel}/menuitems`;
    const result = await fetch(url);
    const resultJson = await result.json();
    setMenuItems(resultJson);
    console.log(menuItems);
  }

  useEffect(() => {
    getMenuItems();
    console.log(testNutritionData[0].data[0].summary);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={rankMenuItems(menuItems, testNutritionData[5].data[0], recommendationMale, null)}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={styles.fl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '88%',
  },
});
