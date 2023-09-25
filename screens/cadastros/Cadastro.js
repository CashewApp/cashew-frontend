import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


export default function Cadastro({navigation}) {

    const api_url=process.env.EXPO_PUBLIC_API_URL

    const [email, setEmail]=useState('')
    const [errorEmail, setErrorEmail]=useState('')
    const [name, setName]=useState('')
    const [errorName, setErrorName]=useState('')
    const [password, setPassword]=useState('')
    const [errorPassword, setErrorPassword]=useState('')
    
    console.log(api_url)
    const register = () =>{
      if (email !== '' && name !== '' && password !=='') {
        axios.post(`${api_url}/auth/registration`, {
          email: email,
          password: password,
          name: name
        })
        .then(()=>{
          navigation.reset({
            routes: [{ name: "Principal"}]
          })
        })
        .catch((err) =>{ console.log(err)
          alert("erro de conexao")
        })
      } 
      else{
        setErrorPassword("preencha a sua senha")
        setErrorEmail("Preencha o seu e-mail")
        setErrorName("Preencha o seu nome")
      }
    }

    const Login = () =>{
        navigation.reset({
            routes: [{ name: "Login"}]
        })
    }

    return (
      
      <ImageBackground source={require('../../assets/wppcaju.jpg')} className="flex h-screen">

        <View className="flex justify-center items-center mt-44">
          <Text className="text-white text-4xl font-extrabold">
            Crie sua conta
          </Text>
        </View>

        
        <Text className="text-white font-semibold text-lg ml-11 mt-12">E-mail</Text>
        <TextInput value={email} onChangeText={(text) => { setEmail(text) }} 
        className={`text-white ${errorEmail !== ""?"border-red-500" : "border-orange-500"} border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        <Text className="text-red-500 text-md ml-10">{errorEmail}</Text>

        <Text className="text-white font-semibold text-lg ml-11 mt-5">Nome de usuario</Text>
        <TextInput value={name} onChangeText={(text) => { setName(text) }} 
        className={`text-white ${errorName !== ""?"border-red-500" : "border-orange-500"} border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        <Text className="text-red-500 text-md ml-10">{errorName}</Text>

        <Text className="text-white font-semibold text-lg ml-11 mt-5">Senha</Text>
        <TextInput value={password} onChangeText={(text) => { setPassword(text) }} secureTextEntry={true} 
        className={`text-white ${errorPassword !== ""?"border-red-500" : "border-orange-500"} border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        <Text className="text-red-500 text-md ml-10">{errorPassword}</Text>
        


        <TouchableOpacity onPress={register} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-24 ml-5 mr-5  bg-orange-500 text-center rounded-full">
          <Text className="text-white text-lg font-bold">Criar conta </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Login} className="flex items-center">
            <Text className="flex text-white text-center font-medium text-sm mt-3 ">Ja possuo uma conta</Text>
          </TouchableOpacity>
        
      </ImageBackground>
  
      
    );
  }