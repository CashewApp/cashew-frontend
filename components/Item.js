import { View, Text } from 'react-native'
import React,{useEffect} from 'react'


export default function Item({navigation}) {

  return (
    <View className="flex items-center justify-center h-screen bg-white">
      <Text className="text-3xl font-bold">Comida do krl</Text>
    </View>
  )
}