import { Text, View, ImageBackground, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import React from 'react'
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function Senha() {


  const [email, setEmail]=useState('')
  const [errorEmail, setErrorEmail]=useState('')

  return (
    <ImageBackground source={require('../../assets/wppcaju2.jpg')} className="flex h-full">
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100} className=" flex h-screen">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


          <View className="flex justify-center">
            <View className="h-[620px] flex justify-center mt-36">

              <View className="flex justfy-center items-center">
                <Text className="text-white text-4xl font-extrabold" >Esqueci minha senha</Text>
              </View>

              <Text className="text-white font-semibold text-lg ml-11 mt-12">E-mail</Text>
              <TextInput value={email} onChangeText={(text) => { setEmail(text) }} 
              className={`text-white ${ errorEmail !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
              {errorEmail ? <Text className="text-red-500 text-md ml-10" >{errorEmail}</Text> : null}

              
              <Text className="text-white font-medium mx-11 my-2">Informe seu endereco de email para a solicitacao da alteracao de senha</Text>
              

              <TouchableOpacity activeOpacity={0.8} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-64 ml-5 mr-5  bg-orange-500 text-center rounded-full">
                <Text className="text-white text-lg font-bold">Recuperar senha</Text>
              </TouchableOpacity>

            </View>
          </View>


        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}