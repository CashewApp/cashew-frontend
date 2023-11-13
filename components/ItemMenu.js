import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ItemMenu() {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={1.0} className="flex-row flex ml-3 mt-3 mb-3 " onPress={() => {navigation.navigate('Item')}}>
        <View className="basis-1/2 ">
            <Text className="font-semibold">Coxinha de presunto</Text>
            <Text className="text-xs">Deliciosa coxinha de presunto</Text>
            <Text className="font-semibold mt-4">R$ 6,00</Text>
        </View>
        <View className="basis-1/2  justify-items-center flex ">
            <Image className="flex h-16 w-24 ml-20 rounded-lg" source={require('../assets/coxinha.jpeg')}></Image>
        </View>
    </TouchableOpacity>
  )
}