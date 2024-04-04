import { Text, View, ImageBackground, TouchableOpacity, TextInput,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import PerfilCard from '../../components/PerfilCard';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';


export default function Perfil(navigate) {

    const navigation = useNavigation();

    return (
        <View className="flex bg-white h-full static">
            <Text className=" font-bold text-3xl w-full mt-20 pl-5 ">Meu Perfil</Text>
            <PerfilCard></PerfilCard>
            
            <View className="gap-y-">
            <View className="border-b border-zinc-100">
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Notificacoes')}} className=" flex items-center justify-between flex-row p-10 pb-5">
                    <View className=" flex-row items-center justify-center">
                        <Ionicons name="notifications-outline" size={20} color="black" />
                        <Text className="font-normal text-md text-center ml-4">Notificações</Text>
                    </View>
                    <View className="mt-1">
                        <Entypo name="chevron-right" size={15} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View className="border-b border-zinc-100">
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Pagamento')}} className=" flex items-center justify-between flex-row p-10 pb-5 pt-5">
                    <View className=" flex-row items-center justify-center">
                        <Ionicons name="card-outline" size={20} color="black" />
                        <Text className="font-normal text-md text-center ml-4">Pagamentos</Text>
                    </View>
                    <View className="mt-1">
                        <Entypo name="chevron-right" size={15} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            <View className="border-b border-zinc-100">
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Dados')}} className=" flex items-center justify-between flex-row p-10 pb-5 pt-5">
                    <View className=" flex-row items-center justify-center">
                        <Ionicons name="reader-outline" size={20} color="black" />
                        <Text className="font-normal text-md text-center ml-4">Meus Dados</Text>
                    </View>
                    <View className="mt-1">
                        <Entypo name="chevron-right" size={15} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            </View>

            <View className="absolute bottom-0 w-full">

                <View className="border-b border-zinc-100">
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Ajuda')}} className=" flex items-center justify-between flex-row p-10 pb-3 pt-3" >
                        <View className="flex-row items-center justify-center">
                            <Ionicons name="help-circle-outline" size={18} color="gray"/>
                            <Text className="font-normal text-xs text-center ml-4 text-zinc-500">Ajuda</Text>
                        </View>
                        <View className="mt-1">
                            <Entypo name="chevron-right" size={13} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="border-b border-zinc-100">
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Config')}} className=" flex items-center justify-between flex-row p-10 pb-3 pt-3" >
                        <View className="flex-row items-center justify-center">
                            <Ionicons name="settings-outline" size={18} color="gray"/>
                            <Text className="font-normal text-xs text-center ml-4 text-zinc-500">Configuracoes</Text>
                        </View>
                        <View className="mt-1">
                            <Entypo name="chevron-right" size={13} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate('Seguranca')}} className=" flex items-center justify-between flex-row p-10 pb-3 pt-3" >
                        <View className="flex-row items-center justify-center">
                            <Ionicons name="shield-checkmark-outline" size={18} color="gray"/>
                            <Text className="font-normal text-xs text-center ml-4 text-zinc-500">Seguranca</Text>
                        </View>
                        <View className="mt-1">
                            <Entypo name="chevron-right" size={13} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}