import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';




export default function Mcadastro({navigation}) {

    const Login = () =>{
        navigation.reset({
            routes: [{ name: "Login"}]
        })
    }

    const Principal = () =>{
      navigation.reset({
        routes: [{name: "Principal"}]
      })
    }


    return (
      
      <ImageBackground source={require('../../assets/wppcaju.jpg')} className="flex h-screen">

        <View className="flex justify-center items-center mt-28">
          <Text className="text-white text-center text-4xl font-extrabold ml-4 mr-4">
            Informações adicionais
          </Text>
        </View>
        <View className="flex  ">
          <Text className="text-white font-semibold text-lg ml-11 mt-8">CPF</Text>
          <TextInput  className="border-orange-500 border-2 text-white rounded-full text-lg p-2 pb-5 pl-4 ml-5 mr-5 flex bg-black/50 "></TextInput>
        </View>
        <View className="flex  ">
          <Text className="text-white font-semibold text-lg ml-11 mt-5">Telefone</Text>
          <TextInput className="border-orange-500 border-2 text-white rounded-full text-lg p-2 pb-5 pl-4 ml-5 mr-5 flex bg-black/50 "></TextInput>
        </View>
        <View className="flex  ">
          <Text className="text-white font-semibold text-lg ml-11 mt-5">Faculdade</Text>
          <TextInput secureTextEntry={true} className="border-orange-500 border-2 text-white rounded-full text-lg p-2 pb-5 pl-4 ml-5 mr-5 flex bg-black/50 "></TextInput>
        </View>
        <View className="flex  ">
          <Text className="text-white font-semibold text-lg ml-11 mt-5">Campus</Text>
          <TextInput className="border-orange-500 border-2 text-white rounded-full text-lg p-2 pb-5 pl-4 ml-5 mr-5 flex bg-black/50 "></TextInput>
        </View>
        <TouchableOpacity onPress={Principal} className="flex justify-center items-center border-1 pt-4 pb-4 pl-16 pr-16 mt-16 ml-5 mr-5  bg-orange-500 text-center rounded-full">
          <Text className="text-white text-lg font-bold">Comecar </Text>
        </TouchableOpacity>
        
      </ImageBackground>
  
      
    );
  }