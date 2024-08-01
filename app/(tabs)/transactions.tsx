import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import CardList from '@/components/CardList'

export default function transactions() {
  return (
    <View style={styles.container}>
      <CardList/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.black,
    
},

})