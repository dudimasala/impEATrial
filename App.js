import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import {Feather, Ionicons} from 'react-native-vector-icons';
import NavBar from './frontend/components/NavBar';
import Recommendation from './frontend/pages/Recommendation';
import Restaurants from './frontend/pages/Restaurants';
import Staff from './frontend/pages/Staff';
import Friends from './frontend/pages/Friends';
import Search from './frontend/components/preferences/Search';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [currPage, setCurrPage] = useState('home');
  const changePage = (newPage) => {
    setCurrPage(newPage);
  };

  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style = {styles.titleWrap}>
          <Ionicons name = 'fast-food-outline' size = {25}/>
          <Text style={styles.label}> impEATrial</Text>
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Feather name="settings" size={windowWidth / 15} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        propagateSwipe
        isVisible={visible}
        coverScreen
        onSwipeComplete={toggleModal}
        swipeDirection={['left', 'right']}
        backdropOpacity={0.6}
      >
        <View style={styles.modal}>
          <TouchableOpacity onPress={toggleModal} style = {styles.closeButtonContainer}>
            <Feather name="x" size={windowWidth / 15} style={styles.settingsIcon} />
          </TouchableOpacity>
          <Search />
        </View>
      </Modal>
      {currPage === 'home' ? <Recommendation /> : currPage === 'nav' ? <Restaurants /> : currPage === 'staff' ? <Staff /> : <Friends />}
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
  },
  header: {
    width: windowWidth * 0.9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  label: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: windowWidth / 16,
    marginBottom: 10,

  },
  settingsIcon: {
    marginBottom: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    overflow: 'hidden',
  },
  closeButtonContainer: { 
    ...StyleSheet.absoluteFillObject,
    top: 15,
    left: 310,
  },
  titleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
