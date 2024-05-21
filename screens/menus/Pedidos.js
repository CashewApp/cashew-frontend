import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import axios from "axios";
import USCS from "../../assets/uscs.png";

export default function Pedidos({}) {
  const [pedidos, setPedidos] = useState([]);
  const [pedidosAgrupados, setPedidosAgrupados] = useState([]);

  const atualizarPedidos = async () => {
    try {
      const response = await axios.get("http://192.168.0.48:5000/api/pedidos");
      setPedidos(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    const interval = setInterval(() => {
      atualizarPedidos();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.48:5000/api/pedidos"
        );
        const pedidosData = response.data;
        setPedidos(response.data);

        pedidosData.sort(
          (a, b) => new Date(b.dataCompra) - new Date(a.dataCompra)
        );
        setPedidos(pedidosData);

        const agrupados = pedidosData.reduce((acc, pedido) => {
          const dataCompra = pedido.dataCompra;
          if (!acc[dataCompra]) {
            acc[dataCompra] = [];
          }
          acc[dataCompra].push(pedido);
          return acc;
        }, {});

        setPedidosAgrupados(Object.values(agrupados));
      } catch (error) {}
    };
    fetchPedidos();

    const intervalId = setInterval(fetchPedidos, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View className="flex bg-white h-full">
      <Text className=" font-bold text-3xl w-full pl-5 mt-20 mb-2">
        Meus Pedidos
      </Text>
      <ScrollView>
        <View className="mt-2 ">
          {pedidosAgrupados.map((grupo, index) => (
            <View className="m-5 p-5 rounded-md bg-white shadow-md shadow-black/50">
              <View className="flex flex-row items-center justify-between">
                <View>
                  <Text className="font-semibold text-lg">
                    Cantina - 2 USCS
                  </Text>
                </View>
                <View>
                  <Image
                    source={USCS}
                    style={{ height: 50, width: 50 }}
                  ></Image>
                </View>
              </View>
              <View key={index} className="w-full  p-3">
                <View className="flex justify-around">
                  <View className="flex flex-col justify-center basis-1/5 my- p-3">
                    {grupo.map((pedido) => (
                      <View
                        key={pedido.id}
                        className="flex-row justify-between"
                      >
                        <Text>1 {pedido.tipo}</Text>
                        <View className="flex items-start justify-start ">
                          <Text>R$ {pedido.preco}</Text>
                        </View>
                      </View>
                    ))}
                  </View>

                  <View
                    key={index}
                    className="flex flex-col justify-center basis-1/5 my- p-3"
                  >
                    <Text className="font-medium ">
                      A retirar - N° {grupo[0].numeroAleatorio}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
