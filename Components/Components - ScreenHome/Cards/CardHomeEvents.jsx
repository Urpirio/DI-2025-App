import { View,Text,TouchableOpacity,Image, Pressable } from 'react-native'
import { StyleHome } from '../../../style/Style - ScreenHome/StyleHome';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function CardHomeEvents({
    Localizacion,
    HoraInicio,
    HoraFinal,
    NombreEvento,
    FechaEvento,
    IconBtn,
    IDEvents,
    DeployAboutEvent,
}) {

    const Router = useRouter();
    const LocalData = useLocalSearchParams();
    // console.log(LocalData);

    const Nombre_Evento = () =>{
        switch(NombreEvento?.split('').length > 32){
            case true:
             return <View style={{width:'76%'}}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'white'}}>
                        {NombreEvento ? NombreEvento : 'No disponible'}
                    </Text>
             </View>
            case false:
                return <Text style={{fontSize:16,fontWeight:'600',color:'white'}}>
                        {NombreEvento ? NombreEvento : 'No disponible'}
                    </Text>
        }
    };



    return (
    <BlurView intensity={180} style={StyleHome.CardEvent} >
       
        <Image style={{height:180,width:'100%',borderRadius:10}} source={{uri:'https://i.pinimg.com/1200x/58/b6/d8/58b6d806c99691c9f26f86ee623a9b19.jpg'}}/>

            <TouchableOpacity  onLongPress={()=>DeployAboutEvent()} style={{width:'100%',gap:5,height:'100%',justifyContent:'space-between',position:'absolute',zIndex:30}}>
                 {/* <TouchableOpacity 
                    onLongPress={()=>DeployAboutEvent}
                    style={{zIndex:20,height:'100%',width:'100%',position:'absolute',backgroundColor:'gray'}}>

                </TouchableOpacity> */}
                <View style={{alignItems:'flex-end',padding:10,}}>
                    <View style={{gap:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                        <Image style={{
                            height:20,
                            width:20,
                            objectFit:'contain',
                            tintColor:'white'
                        }} source={require('../../../assets/IconHome/calendar-week.png')}/>
                        <Text style={{color:'white',fontWeight:'600'}}>{FechaEvento ? FechaEvento : 'No disponible'}</Text>
                    </View>
                    
                    <View style={{gap:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                        <Image style={{
                            height:20,
                            width:20,
                            objectFit:'contain',
                            tintColor:'white'
                         }} source={require('../../../assets/IconHome/clock-4.png')}/>
                        <Text style={{color:'white',fontWeight:'600'}}>{HoraInicio ? HoraInicio : 'No disponible'} - {HoraFinal ? HoraFinal : 'No disponible'}</Text>
                    </View>
                </View>
            <BlurView intensity={30} style={StyleHome.CardEventBtns}>
                <View>
                    <Nombre_Evento/>
                    <View style={{gap:5,flexDirection:'row',borderRadius:10,alignItems:'center'}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'white',
                        }} source={{uri:'https://static.vecteezy.com/system/resources/previews/022/187/625/non_2x/map-location-pin-icon-free-png.png'}}/>
                        <Text style={{color:'white',fontWeight:'300'}}>{Localizacion ? Localizacion : 'No disponible'}</Text>
                    </View>
                </View>
                <TouchableOpacity style={StyleHome.BtnInCardEvent} onPress={()=>{
                    Router.navigate({pathname: 'Screens/ScreenParticipantes',params:{
                        NombreEvento: NombreEvento,TokenAccess: LocalData.TokenAccess,
                        profile_picture: LocalData.profile_picture, FirstName: LocalData.FirstName,
                        LastName: LocalData.LastName,IDEvents: IDEvents,StaffId: LocalData.StaffId
                    }})}}>
               
                    <Text style={{color:'white'}}>Entrar</Text>
                </TouchableOpacity>
             </BlurView>
        </TouchableOpacity >
        
    </BlurView>
    )}


    // 
            
           
    //  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    //             
                
   