import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Itemcard from '../../components/Itemcard';
import Toptabs from '../../components/Toptabs';


export default function Principal({navigation}) {

    return (
        <View className="flex h-full bg-white">
            <View className="flex justify-center items-start mt-20  ">
                <Text className="text-3xl font-extrabold pl-5">Mais vendidos</Text>
            </View>
            <View className="-mb-5">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row  ">
                    <Itemcard name="Coxinha de frango" price="R$5,50"></Itemcard>
                    <Itemcard name="Coca Cola" price="R$4,99"></Itemcard>
                    <Itemcard name="Bala 7Belo" price="R$0,50"></Itemcard>
                    <Itemcard name="Guarana Antarctica" price="R$4,99"></Itemcard>    
                </ScrollView>
            </View>
            <Toptabs></Toptabs>
        </View>
    )
}