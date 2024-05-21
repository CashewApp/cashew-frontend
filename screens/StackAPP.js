import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Botao from "./Botao";
import Item from "../components/Item";
import Accept from "../components/Accept";
import Cartao from "./perfil/Cartao";

const Stack = createStackNavigator();

export default function StackAPP() {
  const [cart, setCart] = useState([]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "vertical",
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen name="TelaPrincipal">
        {(props) => <Botao {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
      <Stack.Screen name="Item">
        {(props) => <Item {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
      <Stack.Screen name="Accept">
        {(props) => <Accept {...props} cart={cart} setCart={setCart} />}
      </Stack.Screen>
      <Stack.Screen name="Cartao" component={Cartao} />
    </Stack.Navigator>
  );
}
