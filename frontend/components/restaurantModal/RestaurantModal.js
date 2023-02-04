import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import Dish from './Dish';
import Config from '../../../backend/config';

export default function RestaurantView(props) {
  const [menuItems, setMenuItems] = useState([]);

  function getOpeningTime() {
    const ow = new Date(props.openingTime);
    let hours = ow.getHours();
    let minutes = ow.getMinutes();
    if(parseInt(hours) < 10) {
        hours = "0" + hours;
    }
    if(parseInt(minutes) < 10) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  }

  function getClosingTime() {
    const ow = new Date(props.closingTime);
    let hours = ow.getHours();
    let minutes = ow.getMinutes();
    if(parseInt(hours) < 10) {
      hours = "0" + hours;
    }
    if(parseInt(minutes) < 10) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  }

  async function getMenuItems() {
    const url = `${Config.localtunnel}/restaurants`;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        restaurant: `${props.restaurant}`,
      }),
    });
    const resultJson = await result.json();
    setMenuItems(resultJson);
  }

  useEffect(() => {
    getMenuItems();
    console.log(menuItems);
  }, []);

  const renderItem = ({ item }) => (
    <Dish
      restaurant={item.restaurant}
      item={item.item}
      glutenFree={item.gluten_free}
      vegetarian={item.vegetarian}
      vegan={item.vegan}
      price={item.price}
    />
  );

  return (
    <View style={[styles.container]}>
      <View style={[styles.item]}>
          <Image source = {props.image} style = {styles.image}/>
          <View style={styles.totalR}>
          <View style={styles.overlay}>
          <View style={styles.sc}>
            <Text style = {[styles.name]}>
              {props.restaurant}
            </Text>
        </View>
          <View style={styles.restInfo}>
          <Text style = {styles.rest}>
              {props.waitTime} mins
          </Text>
          <Text style = {styles.rest}>
              {getOpeningTime()} - {getClosingTime()}
          </Text>
          <Text style = {styles.rest}>
              {props.building}
          </Text>

          </View>
          </View>
          <View style = {styles.tagsHolder}>
          <View style = {[styles.tags, styles.tag1]}>
              <Text style = {styles.tagst}>{props.tag1}</Text>
          </View>
          <View style = {[styles.tags, styles.tag2]}>
              <Text style = {styles.tagst}>{props.tag2}</Text>
          </View>
          <View style = {[styles.tags, styles.tag3]}>
              <Text style = {styles.tagst}>{props.tag3}</Text>
          </View>
          <View style = {[styles.tags, styles.tag4]}>
              <Text style = {styles.tagst}>{props.tag4}</Text>
          </View>
          </View>
          </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      {
        menuItems ?
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          style={styles.fl}
        /> : <View />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  item: {
    paddingHorizontal: 8,
    height: 100,
    width: 362,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  overlay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 240,
    height: 75
  },
  sc: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  image: {
    width: 80,
      height:80,
      borderWidth:2,
      borderColor:'#FFFFFF',
      margin:8,
      borderRadius: 15,
  },
  checkbox: {
    height: 25,
    width: 25
  },
  name: {
    fontSize: 16,
    marginHorizontal: 8,
    fontWeight: 'bold',
    maxWidth: 100
  },
  rest: {
    fontSize: 15,
  },
  restInfo: {
    height: 75,
    marginLeft: 30,
    justifyContent: 'space-around'
  },
  tagsHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tags: {
    marginLeft: 8,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  tag1: {
    backgroundColor: "#6EEAA0"
  },
  tag2: {
    backgroundColor: '#FFA5E6'
  },
  tag3: {
    backgroundColor: '#8CD5FE'
  },
  tag4: {
    backgroundColor: '#8CD5FE'
  },
  tagst: {
    fontSize: 10
  }
})