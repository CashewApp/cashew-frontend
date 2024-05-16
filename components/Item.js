import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

export default function Item({navigation, route, cart, setCart}) {

  const produto = route.params
  const Navigation = useNavigation();
  const [carrinho, setCarrinho] = useState([])

  const handleADDToCart = () => {
    setCart((prevState) => ([
      ...prevState,
      {
        name: produto?.name,
        price: produto?.price
      }
    ]))
    Toast.show({
      type: 'success',
      text1: 'Adicionado',
      text2: 'Seu produto foi adicionado ao carrinho',
      position:'bottom'
    });
    Navigation.goBack()
  }

  return (
    <View className="bg-white">
      
      <ScrollView >
        <View className="relative">
          <Image  source={produto?.image} className="h-72 w-full"/>
        </View>
        <TouchableOpacity className="bg-white rounded-full absolute mt-10 ml-5 p-2  drop-shadow-xl"
        onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={25} className=""></AntDesign>
        </TouchableOpacity>
        <View className="bg-white h-screen rounded-t-3xl -mt-6">
          <Text className="text-2xl font-bold ml-5 mt-3">{produto?.name} </Text>
          <Text className="text-md ml-5 mt-1 ">{produto?.descricao}</Text>
          <Text className="text-lg font-semibold ml-5 mt-2">{produto?.price}</Text>
          <View className="border border-zinc-300 rounded-md m-5 p-2 mt-10">
            <View className="border-b border-zinc-300 pb-2">
              <Text >Cantina-2</Text>
            </View>
            <Text className="pt-2 text-zinc-600">Retirar</Text>
          </View>
        </View>
        
      </ScrollView>

      <View className="mx-5">
        <TouchableOpacity activeOpacity={0.8} onPress={handleADDToCart} className="absolute bottom-10 bg-orange-500 w-full py-3 justify-center items-center rounded-lg">
          <Text className="font-bold text-xl text-white">Adicionar a sacola</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}