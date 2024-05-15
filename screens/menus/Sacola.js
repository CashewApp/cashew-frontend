import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

export default function Sacola({cart, setCart}) {

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
          <Text className="font-medium">{el?.name} - Preço: {el?.price}</Text>
        ))}
      </View>

      <Text className={`absolute ios:bottom-44 android:bottom-28 font-bold text-xl ml-5 mt-10`}>Total R$ {sumPrice(cart)}</Text>

      <View className=" absolute ios:bottom-28 android:bottom-14 w-full">
      <TouchableOpacity activeOpacity={0.8} className=" bg-orange-500 mx-5 py-3 justify-center items-center rounded-lg">
        <Text className="font-bold text-white text-xl">Realizar Pedido</Text>
      </TouchableOpacity>
      </View>

      

    </View>
  )
}