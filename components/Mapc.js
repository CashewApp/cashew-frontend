import { Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import React from 'react'
import { Categorias, produto, } from '../constants'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from "react-native-gesture-handler";
import Itemtwo from './Itemtwo';

export default function Mapc({ }) {

    const [categoria, setCategoria] = useState('SALGADOS')

    const [produtoList, setProdutoList] = useState(produto)
    const setCategoriaFilter = status=> {
        if (status !== 'salgados') {
            setProdutoList([...produto.filter(e => e.status === status)])
        } else {
            setProdutoList (produto)
        }
        setCategoria (status)
    }
    
    const navigation = useNavigation()

    const renderItem = ({item, index, }) => {
        return( 

            
            <TouchableOpacity  activeOpacity={1.0} className="flex-row flex ml-3 mt-3 mb-3 " onPress={() => navigation.navigate('Itemtwo', {id: item.id, image: item.image, name: item.name, descricao: item.descricao, price: item.price,})}>
                <View className="basis-1/2 " key={item.id}>
                    <Text className="font-semibold">{item.name}</Text>
                    <Text className="text-xs">{item.descricao}</Text>
                    <Text className="font-semibold mt-4">{item.price}</Text>
                </View>
                <View className="basis-1/2  justify-items-center flex ">
                    <Image className="flex h-16 w-24 ml-20 rounded-lg" source={item.image}></Image>
                </View>
            </TouchableOpacity>
            
            
        )
    }


  return (
    
    <View >
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >    
        <View className="flex-row justify-start self-start gap-x-3 mx-1">
        {
            Categorias.map(e => (
        
                <TouchableOpacity activeOpacity={0.8} onPress={() => setCategoriaFilter(e.status)} className="px-10 py-3 bg-white my-3 shadow shadow-black/50 rounded-lg" 
                style={[style.Boff, categoria === e.status && style.Bon]} >

                    <Text className=" font-medium " style={[style.Toff, categoria === e.status && style.Ton]}>{e.status}</Text>
                </TouchableOpacity>
            
            ))
        }
        </View>
        </ScrollView>
        </View>
        
        <SafeAreaView  >
        <FlatList  
            style={{height: Platform.OS === 'ios' ? 305:345,}}
            showsHorizontalScrollIndicator={false}
            data={produtoList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem} 
            />

        </SafeAreaView>
        
        
    </View>
    
  )
}

const style = StyleSheet.create({
    ListTab:{
        
    },

    Boff: {
        backgroundColor:'white',
        
    },
    Bon:{
        backgroundColor:'#f97316',
        
    },
    Toff: {
        color:'#f97316',
    },
    Ton: {
        color:'white',
    },
    Container:{
        height: 350,
    },
})