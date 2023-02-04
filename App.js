import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from "./frontend/components/NavBar";
import Recommendation from "./frontend/pages/Recommendation";
import Restaurants from "./frontend/pages/Restaurants";
import Staff from "./frontend/pages/Staff";


export default function App() {
  const [currPage, setCurrPage] = useState('home');
  const changePage = (newPage) => {
    setCurrPage(newPage);
  };

  return (
    <SafeAreaView style={styles.container}>
      {currPage === 'home' ? <Recommendation /> : currPage === 'nav' ? <Restaurants /> : <Staff />}
      <View style={styles.navbar}>
        <NavBar setCurrView={changePage} currPage={currPage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});
