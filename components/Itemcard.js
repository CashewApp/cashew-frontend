import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Itemcard({name, price}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={1.0} className="m-5 mr-0" onPress={() => {navigation.navigate('Item')}} >
      <View className="rounded-xl bg-white shadow shadow-black/50 ">
        <Image className="flex h-36 w-48 rounded-t-xl" source={require('../assets/no-image.png')}></Image>
        <Text className="p-2 text-xl font-bold">{name}</Text>
      </View>
      <Text className="flex text-lg font-semibold pl-2.5 pb-5 mt-1">{price}</Text>
    </TouchableOpacity>

  )
}