import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantView from "../components/RestaurantView";
const DATA = [ 
  { "restaurant": "SCR Restaurant", 
    "location": "51.49866462142452, -0.17741471717586324",
        "openingTimeWeekday": "1899-12-30T11:45:00.000Z",
        "closingTimeWeekday": "1899-12-30T14:30:00.000Z",
        "openingTimeWeekend": "N/A",
        "closingTimeWeekend": "N/A",
        "id" : 1,
        "building": "SCR",
        "waitTime" : 12,
        "tag1" : "...",
        "tag2" : "...",
        "tag3" : "...",
        "tag4" : "..."
  },
  {
      "restaurant": "h-Bar",
      "location": "51.49862450987213, -0.17834356017180142",
      "openingTimeWeekday": "1899-12-30T11:45:00.000Z",
      "closingTimeWeekday": "1899-12-30T14:30:00.000Z",
      "openingTimeWeekend": "N/A",
      "closingTimeWeekend": "N/A",
      "id" : 2,
      "building": "Sherfield Building",
      "waitTime" : 13,
      "tag1": "...",
      "tag2": "...",
      "tag3": "...",
      "tag4": "..."

  }
]

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
    restaurant={item.restaurant} 
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