import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ItemMenu() {
  return (
    <TouchableOpacity className="flex-row flex ml-3 mt-3 mb-3 ">
        <View className="basis-1/2 ">
            <Text className="font-semibold">Pao de Queijo</Text>
            <Text className="text-xs">Enroladinho de queijo com presunto</Text>
            <Text className="font-semibold mt-4">R$ 10,00</Text>
        </View>
        <View className="basis-1/2  justify-items-center flex ">
            <Image className="flex h-16 w-24 ml-20 rounded-lg" source={require('../assets/coxinha.jpeg')}></Image>
        </View>
    </TouchableOpacity>
  )
}