import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Cartao from "./Cartao";

export default function Pagamentos() {
  const Navigation = useNavigation();

  const telaCartao = () => {
    Navigation.navigate("Cartao");
  };
  return (
    <View className="flex flex-col static h-full items-center bg-white">
      <View className=" flex-col items-center w-full">
        <Text className="mt-20 mb-10 font-bold text-2xl">
          Formas de Pagamento
        </Text>

        <View className="flex justify-center w-80 ">
          <TouchableOpacity
            activeOpacity={0.5}
            className="py-5 px-5 rounded-lg border-zinc-300 border flex  items-center justify-between flex-row"
          >
            <View className=" flex-row items-center justify-center">
              <Image
                source={require("../../assets/pix.png")}
                className="h-6 w-6"
              ></Image>
              <Text className="font-medium text-md text-center ml-4">PIX</Text>
            </View>
            <View className="mt-1"></View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={telaCartao}
          className="flex shadow-md items-center w-80 rounded-lg py-2 my-10 bg-orange-500"
        >
          <Text className="flex items-center justify-center text-white text-xl font-bold">
            Adicionar Novo Cartão
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
