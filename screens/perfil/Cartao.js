import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Cartao() {
  const Navigation = useNavigation();
  const salvarcartao = () => {
    Navigation.goBack();
  };

  return (
    <View className="h-full bg-white">
      <View className="flex justify-center items-center mt-20 mb-10">
        <Text className="font-bold  text-2xl">Adicionar Cartao</Text>
      </View>
      <View className="mx-5 gap-y-5">
        <View>
          <Text className="font-medium text-base mb-1">N° do cartao</Text>
          <TextInput className="border-2 border-zinc-200 rounded-md p-2"></TextInput>
        </View>
        <View className="flex-row justify-between">
          <View className="w-1/2">
            <Text className="font-medium text-base mb-1 ">
              Data de validade
            </Text>
            <TextInput className="border-2 border-zinc-200 rounded-md p-2"></TextInput>
          </View>
          <View className="w-1/2">
            <Text className="font-medium text-base mb-1">CVV</Text>
            <TextInput className="border-2 border-zinc-200 rounded-md p-2"></TextInput>
          </View>
        </View>
        <View>
          <Text className="font-medium text-base mb-1">Nome do titular</Text>
          <TextInput className="border-2 border-zinc-200 rounded-md p-2"></TextInput>
        </View>
        <View>
          <Text className="font-medium text-base mb-1">CPF do titular</Text>
          <TextInput className="border-2 border-zinc-200 rounded-md p-2"></TextInput>
        </View>
      </View>
      <View className="absolute bottom-16 w-full">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={salvarcartao}
          className=" flex justify-center items-center bg-orange-500 mx-5 rounded-md"
        >
          <Text className="font-bold text-xl text-white py-2">Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
