import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantView from "../components/RestaurantView";
const DATA = require('../../backend/json/restaurants.json')

export default function Restaurants() {
  const photos = ( [
    require ("../assets/scr.png"),
    require ("../assets/scr.png"), 
    require ("../assets/h-bar.png"),
    require ("../assets/kimiko.png"),
    require ("../assets/library.png"),
    require ("../assets/eastside.png"),
    require ("../assets/neopizza.png"),
    require ("../assets/loud.png"),
    require ("../assets/roastery.png"),
    require ("../assets/starbuck.png"),
    require ("../assets/colcaf.png"),
  ])
  const renderItem = ({item}) => {
    return (
    <RestaurantView 
    restaurant={item.restaurants} 
    location={item.location}
    openingTimeWeekday={item.openingTimeWeekday}
    closingTimeWeekday={item.closingTimeWeekday}
    openingTimeWeekend={item.openingTimeWeekend}
    closingTimeWeekend={item.closingTimeWeekend}
    building={item.building}
    waitTime={item.waitTime}
    tag1={item.tag1}
    tag2={item.tag2}
    tag3={item.tag3}
    tag4={item.tag4}
    image = {photos[item.id]}
    />
    )
  };

  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.restaurant}
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