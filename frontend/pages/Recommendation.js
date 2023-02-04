import { StyleSheet, View, FlatList } from 'react-native';
import MealView from "../components/MealView";

export default function Recommendation() {
  const DATA = [{"restaurant": "Kimiko", "fooddrink": "Food", "item": "Japanese Curry & Rice", "price": 5.95, "glutenFree": 0, "vegetarian": 1, "vegan": 1},
   {"restaurant": "Kimiko", "fooddrink": "Food", "item": "(SUMO) Japanese Curry & Rice", "price": 7.2, "glutenFree": 0, "vegetarian": 1, "vegan": 1},
   {"restaurant": "Kimiko", "fooddrink": "Food", "item": "Katsu Curry & Rice", "price": 6.9, "glutenFree": 0, "vegetarian": 0, "vegan": 0},
   {"restaurant": "Kimiko", "fooddrink": "Food", "item": "(SUMO) Katsu Curry & Rice", "price": 8.9, "glutenFree": 0, "vegetarian": 0, "vegan": 0}, 
   {"restaurant": "Kimiko", "fooddrink": "Food", "item": "Soy Braised Tofu & Rice", "price": 6.75, "glutenFree": 0, "vegetarian": 1, "vegan": 1},
   {"restaurant": "Kimiko", "fooddrink": "Food", "item": "(SUMO) Soy Braised Tofu & Rice", "price": 8.9, "glutenFree": 0, "vegetarian": 1, "vegan": 1}]

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