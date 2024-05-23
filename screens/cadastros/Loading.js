import { View, Text, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export default function Loading({ navigation }) {
  const api_url = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        routes: [{ name: "Home" }],
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const rotation = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotation.setValue(0); // Resetar a animação

    Animated.timing(rotation, {
      toValue: 1,
      duration: 1500, // Duração da rotação (em milissegundos)
      useNativeDriver: true, // Utilizar o driver nativo para melhorar o desempenho
    }).start(() => startRotation()); // Repetir a animação indefinidamente
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  useEffect(() => {
    startRotation();
  }, []);

  return (
    <View className="h-full bg-orange-500 flex justify-center items-center">
      <Animated.Image
        source={require("../../assets/cashew.png")}
        className=" object-center h-[300px] w-[300px]"
        style={[animatedStyle]}
      />
    </View>
  );
}
