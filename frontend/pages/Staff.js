import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import StaffRestScroll from '../components/staff/staffRestScroll';
import InsertMenu from '../components/staff/insertMenu';


export default function Staff() {
  const [scr, setScr] = useState(false);
  const [hbar, setHbar] = useState(false);
  const [kimiko, setKimiko] = useState(false);
  const [lib, setLib] = useState(false);
  const [east, setEast] = useState(false);
  const [neo, setNeo] = useState(false);
  const [loud, setLoud] = useState(false);
  const [roast, setRoast] = useState(false);
  const [star, setStar] = useState(false);
  const [col, setCol] = useState(false);

  return (
    <View>
        <Text style = {styles.title}>
          Select Restaurants
      </Text>
      <View style = {styles.scrollsection}>
        <StaffRestScroll 
        // hard code?
          // scr = {scr}
          // setScr = {setScr}
          // hbar = {hbar}
          // setHbar = {setHbar}
          // kimiko = {kimiko}
          // setKimiko = {setKimiko}
          // lib = {lib}
          // setLib = {setLib}
          // east = {east}
          // setEast = {setEast}
          // neo = {neo}
          // setNeo = {setNeo}
          // loud = {loud}
          // setLoud = {setLoud}
          // roast = {roast}
          // setRoast = {setRoast}
          // star = {star}
          // setStar = {setRoast}
          // col = {setCol}
        />
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
