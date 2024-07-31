import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import DataList from '@/components/DataList'

export default function profile() {
  return (
   <>
    <DataList/>
   </>
     
   
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