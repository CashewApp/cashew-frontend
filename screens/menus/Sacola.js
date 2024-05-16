import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import USCS from '../../assets/uscs.png'
import PIX from '../../assets/pix.png'

export default function Sacola({cart, setCart,}) {

  const Navigation = useNavigation();
  const confirmarPedido = () => {
    Navigation.navigate("Accept")
  };
  const sumPrice= (arr) => {
    let soma = 0;
  
    arr.forEach(obj => {
      const precoNumerico = parseFloat(obj.price.replace('R$', '').replace(',', '.'));
  
      soma += precoNumerico;
    });
  
    return soma;
  };

  

  return (

    <View className="h-screen bg-white flex ">
      <Text className="font-bold text-3xl w-full ml-5 mt-20">Minha Sacola</Text>


      <Text className="font-bold text-xl ml-5 mt-10">Resumo - {cart?.length} Produtos</Text>

      <View className="flex gap-y-2 m-5">
        {cart?.map((el) => (
          <View className="flex-row justify-between">
            <Text className="font-medium text-base">{el?.name}</Text>
            <Text className="font-medium text-base">{el?.price}</Text>
          </View>
        ))}
      </View>
      <View className="border-t border-t-zinc-200 mx-5 flex-row justify-between ">
        <Text className="mt-5 mb-5 font-bold text-xl">Total</Text>
        <Text className="mt-5 mb-5 font-bold text-xl">R$ {sumPrice(cart)}</Text>
      </View>
      <View className=" border-t border-t-zinc-200 mx-5">
        <Text className="text-xl font-bold mt-5">Pagamento</Text>
        <View className="flex-row justify-between items-center mt-5 ">
          <View className="flex-row  items-center">
            <Image source={PIX} className="h-5 w-5  mr-2"></Image>
            <Text className=" font-medium text-base">Pix</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-orange-500 text-base font-medium">Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className=" absolute ios:bottom-28 android:bottom-14 w-full">
      <TouchableOpacity activeOpacity={0.5} onPress={confirmarPedido} className=" bg-orange-500 mx-5 py-3 justify-center items-center rounded-lg">
        <Text className="font-bold text-white text-xl">Confirmar Pedido</Text>
      </TouchableOpacity>
      </View>

      

    </View>
  )
}