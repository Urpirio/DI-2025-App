import { View,Text,TouchableOpacity,Image } from 'react-native'
import { StyleHome } from '../../style/StyleHome';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function CardHomeEvents({
    Localizacion,
    HoraInicio,
    HoraFinal,
    NombreEvento,
    FechaEvento,
    IconBtn,
    IDEvents,
}) {

    const Router = useRouter();
    const LocalData = useLocalSearchParams();



    return (
    <View style={StyleHome.CardEvent}>
        <View style={{width:'70%',gap:5}}>
            <Text style={{fontSize:16,fontWeight:'600'}}>{NombreEvento}</Text>
            <Text>{Localizacion}</Text>
            <View style={{flexDirection:'row',gap:10}}>
                <Text>{FechaEvento}</Text>
                <Text>{HoraInicio} - {HoraFinal}</Text>
            </View>
        </View>
        <View style={StyleHome.CardEventBtns}>
            <TouchableOpacity style={StyleHome.BtnInCardEvent} onPress={()=>{
                Router.navigate({pathname: 'InEvent/[InEvente]',params:{
                    NombreEvento: NombreEvento,TokenAccess: LocalData.TokenAccess,
                    profile_picture: LocalData.profile_picture, FirstName: LocalData.FirstName,
                    LastName: LocalData.LastName,IDEvents: IDEvents,
                }})
                console.log(IDEvents)
            }}>
                <Image style={StyleHome.IconBtnInCardEvent} 
                    source={IconBtn}/>
            </TouchableOpacity>
        </View>
    </View>
    )}