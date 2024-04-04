import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
 

export default function Pagamentos({navigation}) {

/*font-bold, font-semibold, font-medium
continuar arummar os botao

*/

  return (
    <View className="flex flex-col static h-full items-center bg-white" >
      

      <View className="border-1 flex-col items-center w-full" >

        <Text className="mt-20 mb-10 font-bold text-2xl">Formas de Pagamento</Text>

        <View className="flex justify-center w-80 ">
                    <TouchableOpacity activeOpacity={0.5} className="py-7 px-5 rounded-lg border-neutral-300 border-2 flex  items-center justify-between flex-row">
                        <View className=" flex-row items-center justify-center">
                            <Image source={require('../../assets/pix.png')} className="h-6 w-6"></Image>
                            <Text className="font-normal text-md text-center ml-4">PIX</Text>
                        </View>
                        <View className="mt-1"></View>
                    </TouchableOpacity>
        </View>

        <View className="flex justify-center w-80 ">
                    <TouchableOpacity activeOpacity={0.5} className="py-7 px-5 my-4 rounded-lg border-neutral-300 border-2 flex  items-center justify-between flex-row">
                        <View className=" flex-row items-center justify-center">
                            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
                            <Text className="font-normal text-md text-center ml-4">Dinheiro</Text>
                        </View>
                        <View className="mt-1"></View>
                    </TouchableOpacity>
        </View>

        <View className="flex justify-center w-80 ">
                    <TouchableOpacity activeOpacity={0.5} className="py-5 px-5 rounded-lg border-neutral-300 border-2 flex  items-center justify-between flex-row">
                        <View className=" flex-row items-center justify-center">
                            <FontAwesome name="cc-mastercard" size={24} color="black" />

                            <View className="items-start justify-center">
                              <Text className="font-normal text-md text-center ml-4">Mastercard ● Débito</Text>
                              <Text className="font-normal text-md text-center ml-4">**** 9245</Text>
                            </View>
                                                   
                        </View>
                        <View className="mt-1">
                          <Entypo name="dots-three-vertical" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
        </View>

        <View className="flex justify-center w-80 ">
                    <TouchableOpacity activeOpacity={0.5} className="py-5 px-5 my-4 rounded-lg border-neutral-300 border-2 flex  items-center justify-between flex-row">
                        <View className=" flex-row items-center justify-center">
                            <FontAwesome name="cc-mastercard" size={24} color="black" />

                            <View className="items-start justify-center">
                              <Text className="font-normal text-md text-center ml-4">Mastercard ● Crédito</Text>
                              <Text className="font-normal text-md text-center ml-4">**** 8922</Text>
                            </View>

                            
                        </View>
                        <View className="mt-1">
                          <Entypo name="dots-three-vertical" size={15} color="black" />
                        </View>
                    </TouchableOpacity>
        </View>

        <TouchableOpacity className="flex shadow-md items-center w-80 rounded-md py-4 my-10 bg-orange-500">
          <Text className="flex items-center justify-center text-white text-xl">Adicionar Novo Cartão</Text>

        </TouchableOpacity>
        

      </View>
      
      
    </View>
  );
};




