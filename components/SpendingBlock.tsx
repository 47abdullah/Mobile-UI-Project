import { View, Text } from 'react-native'
import React from 'react'
import { SpendingType } from '@/types'
import Colors from '@/constants/Colors'
import { AirbnbIcon, AmazonIcon, DollarIcon, FigmaIcon, NetflixIcon, ShoopingCartIcon, SpotifyIcon } from '@/constants/Icons'

export default function SpendingBlock({spendingList}:{spendingList:SpendingType[]}) {
   
  return (
    <View style={{marginVertical:20,alignItems:'flex-start'}}>
      <Text style={{color:Colors.white,fontSize:14,marginBottom:20}}>Temmuz <Text style={{fontWeight:'700'}}>Harcaması</Text></Text>

      {spendingList.map((item)=>{
         let icon=<DollarIcon width={22} height={22} color={Colors.white}/>
         if (item.name == 'AirBnB Rent') {
             icon=<AirbnbIcon width={22} height={22} color={Colors.white}/>
         }else if (item.name == 'Netflix') {
            icon=<NetflixIcon width={22} height={22} color={Colors.white}/>
         }
         else if (item.name == 'Spotify') {
            icon=<SpotifyIcon width={22} height={22} color={Colors.white}/>
         }
         else if (item.name == 'Amazon') {
            icon=<AmazonIcon width={22} height={22} color={Colors.white}/>
         }
         else if (item.name == 'Figma') {
            icon=<FigmaIcon width={22} height={22} color={Colors.white}/>
         }
         else if (item.name == 'Online Shopping') {
            icon=<ShoopingCartIcon width={22} height={22} color={Colors.white}/>
         }
    return(

        <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}} key={item.id}>
            <View style={{backgroundColor:Colors.grey,padding:15,borderRadius:50,marginRight:10}}>
                {icon}
            </View>
            <View style={{ flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
            <View style= {{gap:5}}>
            <Text style={{color:Colors.white,fontSize:16,fontWeight:'600'}}>{item.name} </Text>
            <Text style={{color:Colors.white}}>{item.date} </Text>
            </View>
            <Text style={{color:Colors.white}}>${item.amount} </Text>
            </View>
        </View>
    )
    
       } )}
    </View>
  )
}