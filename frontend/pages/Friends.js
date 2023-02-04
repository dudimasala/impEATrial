import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default function Friends() {
  return (
    <View>
      <Text style = {styles.title}>
          Friend
      </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 0,
      },
    
})