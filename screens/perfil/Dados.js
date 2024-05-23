import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function Dados({ navigation }) {
  /*font-bold, font-semibold, font-medium
continuar arummar os botao

*/

  return (
    <View className="flex flex-col static h-full bg-white">
      <ScrollView className=" flex-col  w-full">
        <Text className="w-90 mx-10 m-auto  mt-20  font-bold text-2xl">
          Meus Dados
        </Text>

        <Text className="w-90 mx-10  mt-10  font-semibold text-xl">
          Dados de Contato
        </Text>

        <Text className="w-90 mx-10 mt-4 mb-2 font-semibold text-lg">
          E-mail
        </Text>

        <TextInput
          placeholder="Luc*****@gmail.com"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
       rounded-md p-4"
        ></TextInput>

        <Text className="w-90 mx-10 mt-6  mb-2 font-semibold text-lg">
          Celular
        </Text>

        <TextInput
          keyboardType="numeric"
          placeholder="(Opcional)"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>

        <Text className="w-90 mx-10 mt-14  mb-2 font-semibold text-xl">
          Informações Pessoais
        </Text>
        <Text className="w-90 mx-10 mt-4  mb-2 font-bold text-lg">
          Nome Completo
        </Text>

        <TextInput
          placeholder="Lucas Pereira"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>
        <Text className="w-90 mx-10 mt-6  mb-2 font-semibold text-lg">CPF</Text>

        <TextInput
          placeholder="56*.***.***-89"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>

        <Text className="w-90 mx-10 mt-6  mb-2 font-bold text-xl">
          Alterar Senha
        </Text>
        <Text className="w-90 mx-10 mt-6  mb-2 font-semibold text-lg">
          Senha Atual
        </Text>

        <TextInput
          secureTextEntry
          placeholder="Digite sua senha atual"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>
        <Text className="w-90 mx-10 mt-6  mb-2 font-semibold text-lg">
          Nova Senha
        </Text>

        <TextInput
          secureTextEntry
          placeholder="Digite sua senha nova"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>

        <Text className="w-90 mx-10 mt-6  mb-2 font-semibold text-lg">
          Confirmar nova senha
        </Text>

        <TextInput
          secureTextEntry
          placeholder="Digite sua senha nova"
          className="w-90 mx-10 text-orange text-md border-zinc-400 border 
        rounded-md p-4"
        ></TextInput>

        <TouchableOpacity className="flex items-center mx-10 mb-5 mt-10 rounded-md py-4 bg-orange-500">
          <Text className=" text-white text-xl font-bold">Salvar Dados</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
