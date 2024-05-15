import { Text, View, ImageBackground, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


export default function Login({navigation}) {

  const api_url=process.env.EXPO_PUBLIC_API_URL

    const [email, setEmail]=useState('')
    const [errorEmail, setErrorEmail]=useState('')
    const [password, setPassword]=useState('')
    const [errorPassword, setErrorPassword]=useState('')

    const [hidePass, setHidePass]=useState(true);

    console.log(api_url)
    const Login = async () =>{
      try {
        const response = await axios.post(`${api_url}/auth/user/login`,{
          email,
          password,
        });

        if (response.status === 200){
            navigation.reset({
              routes: [{ name: "Principal"}]
            })
            await AsyncStorage.setItem("token", response.data.access_token)

            const token = await AsyncStorage.getItem("token")
        }
      }
      catch (error){
        if (error.response) {
          
          if (error.response.status === 400) {
            setErrorEmail('Email invalido')
          }

          else if (error.response.status === 401) {
            setErrorPassword('Senha incorreta, tente novamente')
          }
        }
      }
    }

    const Cadastro = () =>{
      navigation.reset({
        routes: [{name: "Principal"}]
      })
    }


    const Senha = ()=>{
      navigation.reset({
        routes: [{name: "Senha"}]
      })
    }
    
    
    return (
      
      <ImageBackground source={require('../../assets/shadow.jpg')} className="flex h-full">
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}  className=" flex h-screen">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex justify-center">
          <View className=" h-[620px] flex justify-center mt-36">

            <View className="flex justify-center items-center ">
              <Text className="text-white text-4xl font-extrabold">
              Entre na sua conta
              </Text>
            </View>

            <Text className="text-white font-semibold text-lg ml-11 mt-12">E-mail</Text>
            <TextInput value={email} onChangeText={(text) => { setEmail(text) }} 
            className={`text-white ${ errorEmail !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
            {errorEmail ? <Text className="text-red-500 text-md ml-10" >{errorEmail}</Text> : null}

            <Text className="text-white font-semibold text-lg ml-11 mt-5">Senha</Text>
            <View className={`text-white ${errorPassword !== ""?"border-red-500" : "border-orange-500"} border-2 ml-5 mr-5 rounded-full p-4 bg-black/50 flex-row items-center`}>
              <TextInput value={password} onChangeText={(text) => { setPassword(text) }} secureTextEntry={hidePass} 
              className="text-white mr-4 w-[85%]" style={{fontSize: 18}}>
              </TextInput>
              <TouchableOpacity onPress={ () => setHidePass(!hidePass)}>
                { hidePass ?
                <Ionicons name='eye' color="#A9A9A9" size={19} ></Ionicons>:
                <Ionicons name='eye-off' color="#A9A9A9" size={19} className="w-[15%]" ></Ionicons>
                }
              </TouchableOpacity>
            </View>
            {errorPassword ? <Text className="text-red-500 text-md ml-10" >{errorPassword}</Text> : null}
            <TouchableOpacity activeOpacity={0.8} onPress={Senha} className="flex items-end">
              <Text className="text-white font-medium text-xs mr-10 mt-1">Esqueceu sua senha?</Text>
            </TouchableOpacity>

        
            <TouchableOpacity activeOpacity={0.8} onPress={Login} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-44 ml-5 mr-5  bg-orange-500 text-center rounded-full">
              <Text className="text-white text-lg font-bold">Entrar na sua conta </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={Cadastro} className="flex items-center">
              <Text className="flex text-white text-center font-medium text-sm mt-3 ">Ainda não possuo uma conta</Text>
            </TouchableOpacity>

          </View>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ImageBackground>
      
      
    );
  }