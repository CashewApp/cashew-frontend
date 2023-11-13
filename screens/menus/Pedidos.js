import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react'
import HistoricoCard from '../../components/HistoricoCard';
import LastWish from '../../components/LastWish';

export default function Pedidos() {
    return (
        <View className="flex bg-white h-full">
            <Text className=" font-bold text-3xl w-full pl-5 mt-20 mb-2">Meus Pedidos</Text>
            <ScrollView>
            <View>
                <LastWish></LastWish>
            </View>
            <View>
                <Text className="font-semibold text-xl ml-5 mt-5">Histórico</Text>
                <View>
                    <Text className="text-zinc-400 ml-5 mt-5">Qui. 12 de outubro 2023</Text>
                    <HistoricoCard></HistoricoCard>
                </View>
                <View>
                    <Text className="text-zinc-400 ml-5 mt-5">Qua. 11 de outubro 2023</Text>
                    <HistoricoCard></HistoricoCard>
                </View>
                <View>
                    <Text className="text-zinc-400 ml-5 mt-5">Seg. 9 de outubro 2023</Text>
                    <HistoricoCard></HistoricoCard>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}