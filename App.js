import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import Inicio from './screens/cadastros/Inicio';
import Login from './screens/cadastros/Login';
import Cadastro from './screens/cadastros/Cadastro';
import Mcadastro from './screens/cadastros/Mcadastro';
import Botao from './screens/Botao';
import Item from './components/Item';
import StackAPP from './screens/StackAPP';
import Senha from './screens/cadastros/Senha';
import Loading from './screens/cadastros/Loading';

const Stack = createStackNavigator();
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderTopColor: '#f97316', borderTopWidth: 5, borderLeftWidth:0 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: '500'
      }}
      text2Style={{
        fontSize: 16
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
} 


function StackCadastro() {
  return (
    <>
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Mcadastro" component={Mcadastro} />
      <Stack.Screen name="Principal" component={StackAPP} />
      <Stack.Screen name="Senha" component={Senha} />
    </Stack.Navigator>
    <Toast config={toastConfig} />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackCadastro />
    </NavigationContainer>
  );
}




