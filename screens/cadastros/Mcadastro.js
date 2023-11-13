import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function Mcadastro({navigation}) {

  const api_url=process.env.EXPO_PUBLIC_API_URL

    const [Cpf, setCpf]=useState('')
    const [errorCpf, setErrorCpf]=useState('')
    const [telefone, setTelefone]=useState('')
    const [errorTelefone, setErrorTelefone]=useState('')
    const [faculdade, setFaculdade]=useState('')
    const [errorFaculdade, setErrorFaculdade]=useState('')


    const Principal = () =>{
      navigation.reset({
        routes: [{name: "Principal"}]
      })
    }


    return (
      
      <ImageBackground source={require('../../assets/wppcaju2.jpg')} className="flex h-full">

        <View className="flex justify-center items-center mt-28">
          <Text className="text-white text-center text-4xl font-extrabold ml-4 mr-4">
            Informações adicionais
          </Text>
        </View>
        
        <Text className="text-white font-semibold text-lg ml-11 mt-8">CPF</Text>
        <TextInput value={Cpf} onChangeText={(text) => { setCpf(text) }} 
        className={`text-white ${ errorCpf !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        {errorCpf ? <Text className="text-red-500 text-md ml-10" >{errorCpf}</Text> : null} 

        <Text className="text-white font-semibold text-lg ml-11 mt-5">Telefone</Text>
        <TextInput value={telefone} onChangeText={(text) => { setTelefone(text) }} 
        className={`text-white ${ errorTelefone !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        {errorTelefone ? <Text className="text-red-500 text-md ml-10" >{errorTelefone}</Text> : null}
        
        <Text className="text-white font-semibold text-lg ml-11 mt-5">Faculdade</Text>
        <TextInput value={faculdade} onChangeText={(text) => { setFaculdade(text) }} 
        className={`text-white ${ errorFaculdade !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>
        {errorFaculdade ? <Text className="text-red-500 text-md ml-10" >{errorFaculdade}</Text> : null}

        <Text className="text-white font-semibold text-lg ml-11 mt-5">Campus</Text>
        <TextInput value={Cpf} onChangeText={(text) => { setCpf(text) }} 
        className={`text-white ${ errorCpf !== ""?"border-red-500" : "border-orange-500"}  border-2 ml-5 mr-5 rounded-full p-4 bg-black/50`} style={{fontSize: 18}}></TextInput>


        <TouchableOpacity activeOpacity={0.8} onPress={Principal} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-16 ml-5 mr-5  bg-orange-500 text-center rounded-full">
          <Text className="text-white text-lg font-bold">Comecar</Text>
        </TouchableOpacity>
        
      </ImageBackground>
  
      
    );
  }