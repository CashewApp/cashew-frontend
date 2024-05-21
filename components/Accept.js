import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import USCS from "../assets/uscs.png";
import PIX from "../assets/pix.png";

export default function Accept({ cart, setcart, route }) {
  const { numero, formattedDateTime } = route.params;
  const Navigation = useNavigation();

  const [pedidos, setPedidos] = useState([]);
  const [numeroAleatorioMaisRecente, setNumeroAleatorioMaisRecente] =
    useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.48:5000/api/pedidos"
        );
        setPedidos(response.data);

        // Encontra o pedido mais recente
        if (response.data.length > 0) {
          const pedidoMaisRecente = response.data[response.data.length - 1];
          setNumeroAleatorioMaisRecente(pedidoMaisRecente.numeroAleatorio);
        }
      } catch (error) {}
    };
    fetchPedidos();
  }, []);

  const sumPrice = (arr) => {
    let soma = 0;

    arr.forEach((obj) => {
      const precoNumerico = parseFloat(
        obj.price.replace("R$", "").replace(",", ".")
      );

      soma += precoNumerico;
    });

    return soma;
  };

  return (
    <View className="h-full bg-white">
      <View className="relative">
        <TouchableOpacity
          className=" rounded-full absolute mt-11 ml-5 p-2  drop-shadow-xl"
          onPress={() => Navigation.goBack()}
        >
          <AntDesign name="down" size={25} className=""></AntDesign>
        </TouchableOpacity>
        <View className="flex justify-center items-center mt-12">
          <Text className="text-2xl font-bold">Detalhes do Pedido</Text>
        </View>

        <View className="flex-row items-center m-5 mt-10">
          <Image source={USCS} className="h-16 w-16 rounded-full "></Image>
          <View className="ml-2">
            <Text className="font-semibold text-lg">Cantina 2 - USCS</Text>
            <Text className="font-semibold text-md text-zinc-500">
              Realizado as {formattedDateTime}
            </Text>
          </View>
        </View>
        <View className="bg-zinc-200 flex-row justify-center items-center p-2 mx-5 rounded-md mb-5">
          <MaterialCommunityIcons
            name="store-clock-outline"
            size={22}
            color="black"
          />
          <Text className="text-base font-semibold ml-2">
            Aguardando retirada
          </Text>
        </View>

        <View className="flex gap-y-2 p-5 border-t border-t-zinc-200 mx-5">
          {cart?.map((el) => (
            <View className="flex-row justify-between">
              <Text className="font-medium ">{el?.name}</Text>
              <Text className="font-medium ">{el?.price}</Text>
            </View>
          ))}
        </View>
        <View className=" flex-row justify-between  p-5 mt-0 border-t border-t-zinc-200 mx-5">
          <Text className="font-medium mt-2">Pagamento</Text>
          <View className="flex-row items-center flex">
            <Image source={PIX} className="h-5 w-5 mt-2 mr-2"></Image>
            <Text className="font-medium mt-2">PIX</Text>
          </View>
        </View>
        <View className="p-5 mt-0 border-t border-t-zinc-200 mx-5 flex-row justify-between">
          <Text className="font-bold text-xl mt-2">Total</Text>
          <Text className="font-bold text-xl mt-2">R$ {sumPrice(cart)}</Text>
        </View>
        <View className="mx-5"></View>
      </View>
      <View className=" absolute bottom-10 w-full  ">
        <View className="bg-orange-500 mx-5 flex justify-center items-center rounded-lg py-2">
          <Text className="text-white font-semibold text-base">
            Codigo do pedido
          </Text>
          <Text className="text-white font-bold text-xl">
            {numeroAleatorioMaisRecente}
          </Text>
        </View>
      </View>
    </View>
  );
}
