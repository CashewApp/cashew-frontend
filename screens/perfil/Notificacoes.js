import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Notifica from '../../components/Notifica'

export default function Notificacoes() {
  return (
    <View className="flex flex-col static h-full bg-white">

      <Text className="w-90 mx-10 m-auto  mt-20 mb-10 font-bold text-2xl">Notificacoes</Text>
        <ScrollView>

        
            <Notifica></Notifica>
            <Notifica></Notifica>
            <Notifica></Notifica>

        </ScrollView>
    </View>
  )
}