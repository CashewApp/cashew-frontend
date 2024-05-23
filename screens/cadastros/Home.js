import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const Login = () => {
    navigation.reset({
      routes: [{ name: "Login" }],
    });
  };

  const Cadastro = () => {
    navigation.reset({
      routes: [{ name: "Cadastro" }],
    });
  };

  return (
    <ImageBackground
      className="flex h-full "
      source={require("../../assets/wppcaju.jpg")}
    >
      <View className="flex flex-col justify-center items-start  mt-52 ml-8 ">
        <Text className="text-white text-lg font-bold  ">
          Compre <Text className="text-orange-500"> rapido e sem filas</Text>
        </Text>
        <Text className="text-white text-4xl font-extrabold mt-2 ">
          Retire seus pedidos{" "}
        </Text>
        <Text className="text-orange-500 text-4xl font-extrabold mt-2 ">
          sem dor de cabeca
        </Text>
      </View>
      <TouchableOpacity
        onPress={Login}
        className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-52 ml-5 mr-5  bg-black text-center rounded-full"
      >
        <Text className="text-white text-lg font-bold">
          Entrar na sua conta{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={Cadastro}
        className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-7 ml-5 mr-5  bg-orange-500 text-center rounded-full"
      >
        <Text className="text-white text-lg font-bold">Criar uma conta</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
