import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

export default function PerfilCard() {
  return (
    <View className=" flex items-center justify-between flex-row mt-2">
        <View className="flex-row items-center">
            <TouchableOpacity activeOpacity={0.8} className="bg-white p-5 rounded-full m-5 shadow-md shadow-black/50">
                <Ionicons name="camera" size={24} color="#d4d4d8" />
            </TouchableOpacity>
            <Text className="font-bold text-xl text-center">Joao Pedro</Text>     
        </View>
        <TouchableOpacity activeOpacity={0.5} className="p-6">
            <Text className="text-center text-sm text-orange-500">Editar</Text>
        </TouchableOpacity>
    </View>
  )
}