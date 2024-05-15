import { View, Text, Image } from 'react-native'
import { useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'

export default function Loading({navigation}) {

    const api_url=process.env.EXPO_PUBLIC_API_URL
    
    useEffect (() => {
      const timer = setTimeout(() => {
        navigation.reset({
          routes: [{ name: "Inicio"}]
        })
      },4000)
      return () => clearTimeout(timer);
    },[])

    

  return (
    <View className="h-full bg-orange-500 flex justify-center items-center">
      <Image source={require('../../assets/cashew.png')} className="rotate-[60deg] object-center h-36 w-60"></Image>
    </View>
  )
}