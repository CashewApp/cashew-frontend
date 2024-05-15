import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Notifica() {
  return (
    <View className="m-5 p-5 rounded-md bg-white  shadow-md shadow-black/50">
        
        <View className="flex flex-row items-end m-auto pl-20">
            <Text className="text-orange-500 font-bold text-xl">Nova Notificação</Text>
            <MaterialCommunityIcons  name="exclamation-thick" size={24} color="orange" />
            <View>
                <Text className="ml-7 text-zinc-300 font-bold text-md">12:47</Text>
            </View>
            
        </View>
         
        <View className="flex flex-row">
            <Text className="mr-40  font-semibold text-lg">Oferta Imperdível</Text>
            
        </View>
       
        <View className="flex flex-row items-center justify-between">
            <View>
                <Text className="font-medium text-md text-zinc-400">Apenas hoje salgado + refri</Text>
                <Text className="font-medium text-md text-zinc-400">por apenas R$ 10,00</Text>
            </View>

            <View>
                <Image className="rotate-45" source={require('../assets/cashew.png')} style={{height:30, width:50,}}></Image>
            </View>
        </View>
        <View className="mt-2">
            
        </View>
        
    </View>
  )
}