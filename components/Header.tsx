import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=8' }} style={styles.userImg} />
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.userText,{  fontSize: 12 }]}>Selam Abdullah</Text>
            <Text style={[styles.userText,{  fontSize: 16 }]}>Lorem, <Text style={{ fontWeight: 700 }}>ipsum</Text> ipsum </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => { }} style={styles.btnWrapper}>
          <Text style={styles.btnText}> Lorem, ipsum dolo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70, alignItems: 'center',
    paddingHorizontal: 20
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'

  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  btnWrapper: {
    borderColor: '#666',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10
  },
  btnText: {
    color: Colors.white,
    fontSize: 12
  },
  userText:{
    color:Colors.white,
  }


})