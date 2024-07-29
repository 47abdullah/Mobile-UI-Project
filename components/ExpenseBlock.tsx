import { View, Text, FlatList, ListRenderItem, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ExpenseType } from '@/types'
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';

export default function ExpenseBlock({ expensList }: { expensList: ExpenseType[] }) {
 
    const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
     
        if (index == 0) {
            return (
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.addItemBtn}>
                        <Feather name='plus' size={22} color={Colors.white} />
                    </View>
                </TouchableOpacity>
            )
        }
        
        let amount = item.amount ? item.amount.split('.') : ['0', '00'];
        return (
            
            <View style={[styles.expenseBlock, { backgroundColor: item.name == 'Food' ? Colors.blue : item.name == 'Saving' ? Colors.white : Colors.tintColor }]}>
                <Text style={[styles.expenseBlockText1, { color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white }]}>{item.name}</Text>
                <Text style={[styles.expenseBlockText2, { color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white }]}>${amount[0]}.<Text style={{ fontSize: 12, fontWeight: '400' }}>{amount[1]}</Text></Text>
                <View style={styles.expenseBlock3}>
                    <Text style={[styles.expenseBlockText1, { color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : Colors.white }]}>{item.percentage}%</Text>
                </View>
            </View>
        );
    };
    
const staticItem=[{name:"ekleme"}]
    return (
        <View  style={{paddingVertical:20}}>
            <FlatList
                data={staticItem.concat(expensList)}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}           


const styles = StyleSheet.create({
    addItemBtn:{
        flex:1,
        borderWidth:2,
         borderColor:'#666',
         borderStyle:'dashed',
         borderRadius:10,
         marginRight:20,
         padding:20,
         justifyContent:'center',
        alignItems:'center'
    },

    expenseBlock: {
        backgroundColor: Colors.tintColor,
        width: 100,
        padding: 15,
        borderRadius: 15,
        marginRight: 20,
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    expenseBlockText1: {
        color: Colors.white,
        fontSize: 14

    },
    expenseBlockText2: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600'

    },
    expenseBlock3: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },

})