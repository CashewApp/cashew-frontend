import React, { useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { Categorias, destaque, produto } from "../../constants";
import { useState } from "react";

export default function Principal({ navigation }) {
  const [produtoDestaque, setProdutoDestaque] = useState(produto);
  const [produtoList, setProdutoList] = useState(produto);
  const [categoria, setCategoria] = useState("todos");
  const setCategoriaFilter = (status) => {
    if (status !== "Salgados") {
      setProdutoList([...produto.filter((e) => e.status === status)]);
    } else {
      setProdutoList(produto);
    }
    setCategoria(status);
  };

  useEffect(() => {
    const destacados = produto.filter((produto) => produto.destaque);
    const todos = produto.filter((produtos) => !produto.destaque);

    setProdutoDestaque(destacados);
    setProdutoList(todos);

    //setCategoriaFilter("salgados");
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      const newProduct = {
        id: 8,
        name: "Guarana",
        price: "R$ 6,00",
        image: require("../../assets/guarana.jpg"),
        descricao: "guarana antartida 350ml",
        status: "bebidas",
        destaque: false,
      };
      setProdutoList([...produto, newProduct]);

      setRefreshing(false);
    }, 1000);
  }, [produto]);

  const renderItems = ({ item }) => {
    return (
      <View key={item.id} className="font-bold ">
        <TouchableOpacity
          activeOpacity={1.0}
          className="my-4 mx-2.5"
          onPress={() => {
            navigation.navigate("Item", {
              id: item.id,
              image: item.image,
              name: item.name,
              descricao: item.descricao,
              price: item.price,
            });
          }}
        >
          <View className="rounded-xl bg-white shadow shadow-black/50 ">
            <Image
              className="flex h-36 w-56 rounded-t-xl"
              source={item.image}
            ></Image>
            <Text className="p-2 text-xl font-bold">{item.name}</Text>
          </View>

          <Text className="flex text-lg font-semibold pl-2.5 pb-5 mt-1">
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        className="flex-row flex ml-5 mt-3 mb-3 "
        onPress={() =>
          navigation.navigate("Item", {
            id: item.id,
            image: item.image,
            name: item.name,
            descricao: item.descricao,
            price: item.price,
          })
        }
      >
        <View className="basis-1/2 " key={item.id}>
          <Text className="font-semibold">{item.name}</Text>
          <Text className="text-xs">{item.descricao}</Text>
          <Text className="font-semibold mt-4">{item.price}</Text>
        </View>
        <View className="basis-1/2  justify-items-center flex ">
          <Image
            className="flex h-16 w-24 ml-20 rounded-lg"
            source={item.image}
          ></Image>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex h-full bg-white">
      <View className="flex justify-center items-start mt-20 ">
        <Text className="text-3xl font-bold pl-5">Mais vendidos</Text>
      </View>

      <SafeAreaView className="-mb-5  ">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={produtoDestaque}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItems}
        />
      </SafeAreaView>

      <View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row justify-start self-start gap-x-3 mx-1">
              {Categorias.map((e) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setCategoriaFilter(e.status)}
                  className="px-10 py-3 bg-white my-3 shadow shadow-black/25 rounded-lg "
                  style={[style.Boff, categoria === e.status && style.Bon]}
                >
                  <Text
                    className=" font-medium uppercase"
                    style={[style.Toff, categoria === e.status && style.Ton]}
                  >
                    {e.status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <SafeAreaView>
          <FlatList
            style={{ height: Platform.OS === "ios" ? 305 : 345 }}
            showsHorizontalScrollIndicator={false}
            data={produtoList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  Boff: {
    backgroundColor: "white",
  },
  Bon: {
    backgroundColor: "#f97316",
  },
  Toff: {
    color: "#d4d4d8",
  },
  Ton: {
    color: "white",
  },
});
