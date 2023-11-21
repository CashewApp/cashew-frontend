import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemMenu from '../../components/ItemMenu';

export default function Salgados() {
  return (
    <View className="bg-white h-full">
      <ScrollView>
        <ItemMenu name="Coxinha" price="R$5,50" description="coxinha de frango com catupiry"></ItemMenu>
        <ItemMenu name="Croissaint" price="R$7,50" description="croissaint de frango desfiado"></ItemMenu>
        <ItemMenu name="Pao de batata de calabresa" price="R$5,50" description="pao de batata com calebresa"></ItemMenu>
        <ItemMenu name="Hamburgao" price="R$5,99" description="Hamburguer de carne com queijo"></ItemMenu>
        <ItemMenu name="Hot Dog" price="R$9,99" description="Hot dog com batata palha, reqeuijao e vinagrete"></ItemMenu>
        
      </ScrollView>
    </View>
  )
}