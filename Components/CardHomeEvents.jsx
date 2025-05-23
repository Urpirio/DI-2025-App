import { View,Text,TouchableOpacity,Image } from 'react-native'
import { StyleHome } from '../style/StyleHome';
import { useRouter } from 'expo-router';
import { setParams } from 'expo-router/build/global-state/routing';
// import { getNavOptions } from 'expo-router/build/views/Sitemap';

export default function CardHomeEvents({
    Localizacion,
    HoraInicio,
    HoraFinal,
    NombreEvento,
    FechaEvento,
    IconBtn,
}) {
    
    const Router = useRouter();


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
                    NombreEvento: NombreEvento
                }})
                
            }}>
                <Image style={StyleHome.IconBtnInCardEvent} 
                    source={IconBtn}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}
