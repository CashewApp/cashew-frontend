import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { produto } from '../constants';

export default function Itemtwo({navigation, route}) {

  const produto  = route.params
  const Navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image  source={produto?.image} className="h-72 w-full"/>
        </View>
        <TouchableOpacity className="bg-white rounded-full absolute mt-10 ml-5 p-2  drop-shadow-xl"
        onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={25} className=""></AntDesign>
        </TouchableOpacity>
        <View className="bg-white h-screen rounded-t-3xl -mt-6">
          <Text className="text-2xl font-bold ml-5 mt-3">{produto?.name}</Text>
          <Text className="text-md font-medium ml-5 mt-1 ">{produto?.descricao}</Text>
          <Text className="text-lg font-semibold ml-5 mt-2">{produto?.price}</Text>
        </View>
      </ScrollView>
    </View>
  )
}