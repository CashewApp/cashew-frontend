import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import USCS from '../assets/uscs.png'

export default function PerfilCard() {
  return (
    <View className=" flex items-center justify-between flex-row mt-2">
        <View className="flex-row items-center">
            <TouchableOpacity activeOpacity={0.8} className="bg-white p-5 rounded-full m-5 shadow-md shadow-black/50">
                <Ionicons name="camera" size={24} color="#d4d4d8" />
            </TouchableOpacity>
            <Text className="font-bold text-xl text-center">Nome</Text>     
        </View>
    </View>
  )
}