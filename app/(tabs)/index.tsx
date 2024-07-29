import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from '@/components/ExpenseBlock'
import ExpensList from '@/data/expense.json'
import IncomeBlock from '@/components/IncomeBlock'
import Incomelists from '@/data/income.json'
import SpendingBlock from '@/components/SpendingBlock'
import SpendingList from '@/data/spending.json'

export default function index() {


  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: '47%'
    },
    { value: 40, color: Colors.blue, text: "40%" },
    { value: 16, color: Colors.white, text: "16%" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: '#FF7F97' },
  ];
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />
        }}
      />
      <View style={[styles.container, { padding: 70 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>Harcamalarım</Text>
              <Text style={{ color: Colors.white, fontSize: 36, fontWeight: 700 }}>$1453.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text></Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: 'center' }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                // semiCircle //TAM DAİRE YAPABİLRİZ
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text
                        style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                        47%
                      </Text>
                      <Text style={{ fontSize: 14, color: 'white' }}>Excellent</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expensList={ExpensList} />
          <IncomeBlock incomeList={Incomelists} />
          <SpendingBlock spendingList={SpendingList} />
        </ScrollView>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,

  }

})