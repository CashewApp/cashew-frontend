import { Text, View, ImageBackground, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard , KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';


export default function Cadastro({navigation}) {

  const api_url=process.env.EXPO_PUBLIC_API_URL

  const [email, setEmail]=useState('')
  const [errorEmail, setErrorEmail]=useState('')
  const [name, setName]=useState('')
  const [password, setPassword]=useState('')
  const [errorPassword, setErrorPassword]=useState('')
  const [errorName, setErrorName]=useState('')
  
  const [hidePass, setHidePass]=useState(true);

  console.log(api_url)
  const register = async () =>{
    
    try {
      const response = await axios.post(`${api_url}/auth/user/registration`,{
        email,
        name,
        password
      });

      if (response.status === 201) {
        navigation.reset({
          routes: [{ name: "Principal"}]
        })
      }
      else if (response.status === 200) {
        setErrorEmail('Email ja cadastrado')
      } 
    }
    catch (error){
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;

        if (errorData.errors) {
          const {email, name, password } = errorData.errors;

          if(email) {
            setErrorEmail('Email invalidos')
          }

          if(name) {
            setErrorName('Nome invalido')
          }

          if(password) {
            setErrorPassword('Senha invalida, deve possuir pelo menos 8 digitos')
          }else{
            setErrorPassword(null)
          }
        }
      }
    }
  }

  const Login = () => {
      navigation.reset({
          routes: [{ name: "Login" }]
      })
  }


    return (
      
      
      <ImageBackground source={require('../../assets/wppcaju2.jpg')} className="flex  h-full ">

      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100} className=" flex h-screen">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View className="flex justify-center">
                <View className=" h-[620px] flex justify-center mt-36">

                    <View className="flex justify-center items-center ">
                    <Text className="text-white text-4xl font-extrabold">Crie sua conta</Text>
                    </View>

        
                    <Text className="text-white font-semibold text-lg ml-11 mt-12">E-mail</Text>
                    <TextInput value={email} onChangeText={(text) => { setEmail(text) }} 
                    className={`text-white ${ errorEmail !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
                    {errorEmail ? <Text className="text-red-500 text-md ml-10" >{errorEmail}</Text> : null}

                    <Text className="text-white font-semibold text-lg ml-11 mt-5">Nome de usuario</Text>
                    <TextInput value={name} onChangeText={(text) => { setName(text) }} 
                    className={`text-white ${ errorName !== ""?"border-red-500" : "border-orange-500"} border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
                    {errorName ? <Text className="text-red-500 text-md ml-10" >{errorName}</Text> : null}

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
                    {errorPassword ? <Text className="text-red-500 text-md ml-10 mt-1" >{errorPassword}</Text> : null}
        


                    <TouchableOpacity activeOpacity={0.8} onPress={register} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-24 ml-5 mr-5  bg-orange-500 text-center rounded-full">
                        <Text className="text-white text-lg font-bold">Criar conta </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={Login} className="flex items-center">
                        <Text className="flex text-white text-center font-medium text-sm mt-3 ">Ja possuo uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
        
      </ImageBackground>
      
      
    );
  }