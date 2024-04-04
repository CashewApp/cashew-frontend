import { View, Text, TouchableOpacity, Alert  } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import React from 'react'


const showAlert = () =>
  Alert.alert(
    'Limpar histórico',
    'Deseja limpar seu histórico?',
    [
      {
        text: 'Confirmar',
        onPress: () => Alert.alert('Histórico limpo com sucesso!'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      
    },
  );
  
  const showVersao = () =>
  Alert.alert(
    'Você está com a versão mais atualizada!',
    'Versão 0.14.5',
    [
      {
        
      },
    ],
    {
      cancelable: true,
      
    },
  );


import { useNavigation } from '@react-navigation/native';

export default function Config({navigation}) {
  return (
    <View className="flex bg-white flex-col static h-full items-center">

      <Text className="text-xl font-semibold mt-20">Configurações</Text>

      <View className="w-full border-b border-zinc-300 mt-10">
        <TouchableOpacity onPress={showVersao} activeOpacity={0.5} className=" flex items-center 
        justify-between flex-row p-10 pb-5">
          <View className=" flex-row items-center justify-center ">
              
                <Text className="font-normal text-md text-center ml-1">Sobre esta versão</Text>
          </View>
          <View className="mt-1">
            <Entypo name="chevron-right" size={15} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="w-full border-b border-zinc-300">
        <TouchableOpacity onPress={showAlert} activeOpacity={0.5} className=" flex items-center 
        justify-between flex-row p-10 pb-5 pt-5">
          <View className=" flex-row items-center justify-center">
             
                <Text className="font-normal text-md text-center ml-1">Limpar histórico de busca</Text>
          </View>
          <View className="mt-1">
            <Entypo name="chevron-right" size={15} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="w-full border-b border-zinc-300">
        <TouchableOpacity onPress={() => {navigation.navigate('Saindo')}}  activeOpacity={0.5} className=" flex items-center 
        justify-between flex-row p-10 pb-5 pt-5">
          <View className=" flex-row items-center justify-center">
              
                <Text className="font-normal text-md text-center ml-1">Sair</Text>
          </View>
          <View className="mt-1">
            <Entypo name="chevron-right" size={15} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      
       
    </View>
  );
};