import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Item({navigation}) {

  const Navigation = useNavigation();

  return (
    <View >
      <ScrollView>
        <View className="relative">
          <Image  source={require('../assets/no-image.png')} className="h-72 w-full"/>
        </View>
        <TouchableOpacity className="bg-white rounded-full absolute mt-10 ml-5 p-2  drop-shadow-xl"
        onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={25} className=""></AntDesign>
        </TouchableOpacity>
        <View className="bg-white h-screen rounded-t-3xl -mt-6">
          <Text className="text-2xl font-bold ml-5 mt-3">Coxinha de frango </Text>
          <Text className="text-md font-medium ml-5 mt-1 ">deliciosa coxinha de frango com catupiry</Text>
          <Text className="text-lg font-semibold ml-5 mt-2">R$5,50</Text>
        </View>
      </ScrollView>
    </View>
  )
}