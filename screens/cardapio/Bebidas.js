import { View, Text, ScrollView } from 'react-native'
import ItemMenu from '../../components/ItemMenu';
import React from 'react'

export default function Bebidas() {
  return (
    <View className="bg-white h-full">
      <ScrollView>
        <ItemMenu name="Coca Cola" price="R$4,99" description="coca cola 350ml"></ItemMenu>
        <ItemMenu name="Guarana Antarctica" price="R$4,99" description="guarana antarctica 350ml"></ItemMenu>
        <ItemMenu name="Guarana Viton" price="R$5,99" description="guarana viton 500ml"></ItemMenu>
        
        
      </ScrollView>
    </View>
  )
}