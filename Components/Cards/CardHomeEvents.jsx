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
        <View style={{width:'90%',gap:5}}>
            <Text style={{fontSize:16,fontWeight:'600'}}>{NombreEvento}</Text>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                    <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                    }} source={{uri:'https://static.vecteezy.com/system/resources/previews/022/187/625/non_2x/map-location-pin-icon-free-png.png'}}/>
                    <Text style={{color:'gray'}}>{Localizacion}</Text>
                </View>
                
                <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                    <Image style={{
                        height:20,
                        width:20,
                        objectFit:'contain'
                    }} source={require('../../assets/IconHome/calendar-week.png')}/>
                    <Text style={{color:'gray'}}>{FechaEvento}</Text>
                </View>
                
                <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                    <Image style={{
                        height:20,
                        width:20,
                        objectFit:'contain'
                    }} source={require('../../assets/IconHome/clock-4.png')}/>
                    <Text style={{color:'gray'}}>{HoraInicio} - {HoraFinal}</Text>
                </View>
            </View>
        </View>
        <View style={StyleHome.CardEventBtns}>
            <TouchableOpacity style={StyleHome.BtnInCardEvent} onPress={()=>{
                Router.navigate({pathname: 'InEvent/[InEvente]',params:{
                    NombreEvento: NombreEvento,TokenAccess: LocalData.TokenAccess,
                    profile_picture: LocalData.profile_picture, FirstName: LocalData.FirstName,
                    LastName: LocalData.LastName,IDEvents: IDEvents,
                }})
                // console.log(IDEvents)
            }}>
                {/* <Image style={StyleHome.IconBtnInCardEvent} 
                    source={IconBtn}/> */}
                    <Text style={{color:'white'}}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )}