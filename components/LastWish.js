import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function LastWish() {
  return (
    <View className="m-5 p-5 rounded-md bg-white  shadow-md shadow-black/50">
        <View>
            <Text className="font-semibold text-xl">Último Pedido</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
            <View>
                <Text className="font-semibold text-lg">Cantina - 2 USCS</Text>
            </View>

            <View>
                <Image source={require('../assets/uscs.png')} style={{height:50, width:50}}></Image>
            </View>
        </View>
        <View className="mt-2">
            <Text className="text-zinc-400">1 coxinha de frango</Text>
            <Text className="text-zinc-400">1 coca-cola</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} className="flex items-center justify-center mt-5 py-2 rounded-md bg-orange-500">
            <Text className="font-bold text-md text-white">Pedir novamente</Text>
        </TouchableOpacity>
    </View>
  )
}