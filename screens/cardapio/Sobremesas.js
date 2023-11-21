import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemMenu from '../../components/ItemMenu';

export default function Sobremesas() {
  return (
    <View className="bg-white h-full">
      <ScrollView>
        <ItemMenu name="Bala 7Belo" price="R$0,50" description="bala de framboesa 7Belo"></ItemMenu>
      </ScrollView>
    </View>
  )
}