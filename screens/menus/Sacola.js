import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

import USCS from "../../assets/uscs.png";
import PIX from "../../assets/pix.png";
import MPG from "../../components/MPG";

export default function Sacola({ cart, setCart }) {
  const Navigation = useNavigation();
  const [isModalVisible, setIsModalVisibli] = useState(false);

  const editarpagamento = () => {
    Navigation.navigate("Cartao");
  };
  const confirmarPedido = async () => {
    const activeItems = cart.filter((item) => item.active);
    const numeroAleatorio =
      Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    const now = new Date();
    const timeZone = "America/Sao_Paulo";
    const zonedTime = toZonedTime(now, timeZone);
    const formattedDateTime = format(zonedTime, "HH:mm - dd/MM/yyyy", {
      timeZone,
    });
    const formattedItems = activeItems.map((item) => ({
      id: item.id,
      tipo: item.name,
      preco: item.price,
      dataCompra: new Date().toISOString(),
      status: statusPedido,
      numeroAleatorio: numeroAleatorio,
    }));
    try {
      const response = await axios.post(
        "http://192.168.0.48:5000/api/pedidos",
        formattedItems
      );
      console.log("Resposta do servidor:", response.data);
    } catch (error) {}

    Navigation.navigate("Accept", { formattedDateTime });
  };

  const [statusPedido, setStatusPedido] = useState("a retirar");

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

  const limparCarrinho = () => {
    setCart([]);
  };

  return (
    <View className="h-screen bg-white flex ">
      <View className="flex-row items-center justify-between mx-5 mt-20">
        <Text className="font-bold text-3xl  ">Minha Sacola</Text>
        <TouchableOpacity onPress={limparCarrinho}>
          <Text className="text-orange-500 font-medium">Limpar</Text>
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-xl ml-5 mt-10">
        Resumo - {cart?.length} Produtos
      </Text>

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
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsModalVisibli(true)}
          >
            <Text className="text-orange-500  font-medium">Alterar</Text>
          </TouchableOpacity>
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisibli(false)}
            animationType="slide"
          >
            <View>
              <TouchableOpacity
                className="bg-white rounded-full absolute ml-5 p-2  drop-shadow-xl"
                onPress={() => setIsModalVisibli(false)}
              >
                <AntDesign name="down" size={25} className=""></AntDesign>
              </TouchableOpacity>
              <View className="flex justify-center items-center mt-1">
                <Text className="font-semibold text-lg mb-10">
                  Formas de Pagamentos
                </Text>
                <MPG></MPG>
              </View>
            </View>
          </Modal>
        </View>
      </View>

      <View className=" absolute ios:bottom-28 android:bottom-14 w-full">
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={confirmarPedido}
          className=" bg-orange-500 mx-5 py-3 justify-center items-center rounded-lg"
        >
          <Text className="font-bold text-white text-xl">Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
