import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemMenu from '../../components/ItemMenu';

export default function Salgados() {
  return (
    <View className="bg-white h-full">
      <ScrollView>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
        <ItemMenu></ItemMenu>
      </ScrollView>
    </View>
  )
}