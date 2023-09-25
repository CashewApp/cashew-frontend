import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Principal from '../menus/Principal';


export default function Login({navigation}) {

    const Cadastro = () =>{
      navigation.reset({
        routes: [{name: "Cadastro"}]
      })
    }

    const Principal = ()=>{
      navigation.reset({
        routes: [{name: "Principal"}]
      })
    }
    
    return (
      
      <ImageBackground source={require('../../assets/wppcaju3.jpg')} className="flex h-screen">

        <View className="flex justify-center items-center mt-44">
          <Text className="text-white text-4xl font-extrabold">
            Entre na sua conta
          </Text>
        </View>

        <Text className="text-white font-semibold text-lg ml-11 mt-12">E-mail</Text>
        <TextInput className="text-white border-orange-500 border-2 ml-5 mr-5 rounded-full p-4 bg-black/50" style={{fontSize: 18}}></TextInput>

        <Text className="text-white font-semibold text-lg ml-11 mt-5">Senha</Text>
        <TextInput secureTextEntry={true} className="text-white border-orange-500 border-2 ml-5 mr-5 rounded-full p-4 bg-black/50" style={{fontSize: 18}}></TextInput>
        <TouchableOpacity className="flex items-end">
          <Text className="text-white font-medium text-xs mr-10 mt-1"> Esquecim minha senha</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={Principal} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-44 ml-5 mr-5  bg-orange-500 text-center rounded-full">
          <Text className="text-white text-lg font-bold">Entrar na sua conta </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Cadastro} className="flex items-center">
            <Text className="flex text-white text-center font-medium text-sm mt-3 ">Ainda não possuo uma conta</Text>
          </TouchableOpacity>
        
      </ImageBackground>
  
      
    );
  }