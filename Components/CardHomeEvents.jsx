import { View,Text,TouchableOpacity,Image } from 'react-native'
import { StyleHome } from '../style/StyleHome';

export default function CardHomeEvents({
    Localizacion,
    HoraInicio,
    HoraFinal,
    NombreEvento,
    FechaEvento,
    IconBtn,
}) {
  return (
    <View style={StyleHome.CardEvent}>
        <View style={{width:'70%',gap:5}}>
            <Text style={{fontSize:16,fontWeight:'600'}}>{NombreEvento}</Text>
            <Text>{Localizacion}</Text>
            <Text>{FechaEvento}</Text>
            <Text>{HoraInicio} - {HoraFinal}</Text>
        </View>
        <View style={StyleHome.CardEventBtns}>
            <TouchableOpacity style={StyleHome.BtnInCardEvent}>
                <Image style={StyleHome.IconBtnInCardEvent} 
                    source={IconBtn}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}
