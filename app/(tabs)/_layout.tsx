import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

export default function _layout() {
  return (
    <>

      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems:'center',
            height: '8%',
            width:'75%',
            marginHorizontal: 55,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth:1,
            borderTopWidth:1,
            borderColor:'#333',
            borderTopColor:'#333',
            elevation:0
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#999',
          tabBarActiveTintColor: Colors.white
        }}>
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <View style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey
                }}>
                  <SimpleLineIcons name='pie-chart' size={18} color={color} />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            tabBarIcon({ color, size, focused }) {
              return (
                <View style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey
                }}>
                  <AntDesign name='swap' size={18} color={color} />
                </View>
              )

            },
            headerShown: false
          }}
        />
      <Tabs.Screen
          name='customerList'
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <View style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey
                }}>
                  <FontAwesome name='list-ul' size={18} color={color} />
                </View>
              )

            },
            headerShown: false
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <View style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey
                }}>
                  <FontAwesome name='user-o' size={18} color={color} />
                </View>
              )

            },
            headerShown: false
          }}
        />
    

      </Tabs>
      <StatusBar style='light' />
      
    </>

  )
}