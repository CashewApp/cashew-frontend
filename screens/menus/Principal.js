import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Itemcard from '../../components/Itemcard';
import Toptabs from '../../components/Toptabs';
import Mapc from '../../components/Mapc';
import Cantina from '../../components/HistoricoCard';
import Salgados from '../cardapio/Salgados';
import { categorias, destaque } from '../../constants';

export default function Principal({navigation}) {

    return (
        <View className="flex h-full bg-white">
            <View className="flex justify-center items-start mt-20  ">
                <Text className="text-3xl font-extrabold pl-5">Mais vendidos</Text>
            </View>
            <View className="-mb-5">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row pr-3 ">

                    {
                    destaque.map ((destaque) => {
                        return (
                            <View key={destaque.id} className="font-bold ">
                                <TouchableOpacity activeOpacity={1.0} className="my-5 mx-2.5" onPress={() => {navigation.navigate('Item', {destaque})}}>
                                    <View className="rounded-xl bg-white shadow shadow-black/50 ">
                                    
                                        <Image className="flex h-36 w-48 rounded-t-xl" source={destaque.image}></Image>
                                        <Text className="p-2 text-xl font-bold">{destaque.name}</Text>

                                    </View>

                                    <Text className="flex text-lg font-semibold pl-2.5 pb-5 mt-1">{destaque.price}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    }

                </ScrollView>
            </View>

            <Mapc></Mapc>
            
            
        </View>
    )
}