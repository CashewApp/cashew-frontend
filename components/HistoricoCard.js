import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cantina () {
  return (
    <View className="m-5 p-5 rounded-md bg-white shadow-md shadow-black/50">
        <View className="flex flex-row items-center justify-between">
            <View>
                <Text className="font-semibold text-lg">Cantina - 2 USCS</Text>
            </View>

            <View>
                <Image source={require('../assets/uscs.png')} style={{height:50, width:50}}></Image>
            </View>
        </View>
        <View className="mt-2 pb-2.5 border-b border-zinc-100">
            <Text className="text-zinc-400">1 coxinha de frango</Text>
            <Text className="text-zinc-400">1 coca-cola</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} className="flex items-center justify-center  pt-2.5 ">
            <Text className="font-semibold text-md text-orange-500">Adicionar a sacola</Text>
        </TouchableOpacity>
    </View>
  )
}