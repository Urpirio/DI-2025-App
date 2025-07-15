import { Modal, View,Text, Image, TouchableOpacity,Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { GlobalApis } from "../../Apis/GlobalApis";
import { useEffect } from "react";
import { useState } from "react";
import { BlurView } from "expo-blur";

export default function ModalSobreEvento({FDeployModal,StatusModal,IDEvents,Status}) {

    const  LocalData = useLocalSearchParams();
    const [Registrados,setRegistrados] = useState(Array())
    const [Inscritos,setInscritos] = useState(Array());
    const [InformacionEvento,setInformacionEvento] = useState(Object());


    useEffect(()=>{

        const idEvent = Status ? LocalData.IDEvents : IDEvents;

        fetch(GlobalApis.ApiUserInEvent +''+ idEvent,{
            method: 'GET',
            headers: {'Authorization': `Bearer ${LocalData.TokenAccess}`}
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.json()
            }
        })
        .then((Data)=>{
            const Registrados = Data.data?.filter(D => D.checkin != null);
            setRegistrados(Registrados);
            setInscritos(Data?.data)
        })
        .catch((error)=>{
            console.error(error)
        });

        fetch(GlobalApis.ApiTodosEventos)
        .then(respuesta => {
            if(respuesta.ok){
                   return respuesta.json()
            }
        })
        .then((Data)=>{
            const ElEvento = Data.data?.filter(D => D.id == idEvent);
            setInformacionEvento(ElEvento[0])
        })
        .catch(()=>{

        })


    },[StatusModal,IDEvents])


  return (
    <Modal  visible={StatusModal} transparent={true}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Pressable onPress={FDeployModal} style={{backgroundColor:'gray',opacity:0.2,width:'100%',height:'100%'}}>

            </Pressable>
            <View style={{width:'95%',borderWidth:1,borderRadius:10,borderColor:'#ced4da',padding:5,backgroundColor:'white',position:'absolute',gap:10}}>
                <View style={{position:'relative',justifyContent:'flex-end'}}>
                    <Image style={{height:180,width:'100%',borderRadius:10}}  source={{uri:'https://i.pinimg.com/1200x/58/b6/d8/58b6d806c99691c9f26f86ee623a9b19.jpg'}}/>
                    <BlurView intensity={40} style={{position:'absolute',padding:10,width:'100%'}}>
                        <Text style={{color:'white',fontWeight:'600',fontSize:18}}>{InformacionEvento?.title}</Text>
                    </BlurView>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/Location.png')}/>
                        <Text style={{color:'#b3b3b3'}} >{InformacionEvento?.room ? InformacionEvento.room.location : 'No disponible'}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/calendar-week.png')}/>
                        <Text style={{color:'#b3b3b3'}} >{InformacionEvento?.start_time?.slice(0,10)}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/clock-4.png')}/>
                        <Text style={{color:'#b3b3b3'}} >{InformacionEvento?.start_time?.slice(11,16)} - {InformacionEvento?.end_time?.slice(11,16)}</Text>
                    </View>
                    
                </View>
                 <View style={{paddingHorizontal:10}}>
                    <Text style={{fontSize:16,color:'gray'}}>
                        {InformacionEvento?.description}
                    </Text>
                </View>
                <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                    <View style={{borderWidth:1,borderColor:'#e9ecef',padding:5,alignItems:'center',borderRadius:10,backgroundColor:'#e9ecef'}}>
                        <Image style={{height:25,width:25,objectFit:'contain'}} source={require('../../assets/IconParticipantes/user-group.png')}/>
                         <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'back'}}> 
                            {Registrados.length}/{Inscritos.length}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        FDeployModal()
                    }} style={{alignItems:'center',paddingVertical:10,paddingHorizontal:40,borderRadius:10,backgroundColor:'#033E8A'}}>
                        <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}


{/* <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'600',textAlign:'center'}}>{InformacionEvento.title}</Text>
                </View> */}
//                 <View>
//                    
//                 </View>
                
               
