import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

export default function profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>profile</Text>
    </View>
  )
}


const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:Colors.black,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    color:Colors.white
}

})