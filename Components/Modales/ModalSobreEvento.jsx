import { Modal, View,Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { GlobalApis } from "../../Apis/GlobalApis";
import { useEffect } from "react";
import { useState } from "react";

export default function ModalSobreEvento({FDeployModal,StatusModal}) {

    const  LocalData = useLocalSearchParams();
    const [Registrados,setRegistrados] = useState(Array())
    const [Inscritos,setInscritos] = useState(Array());
    const [InformacionEvento,setInformacionEvento] = useState(Object());


    useEffect(()=>{
        fetch(GlobalApis.ApiUserInEvent +''+ LocalData.IDEvents,{
            method: 'GET',
            headers: {'Authorization': `Bearer ${LocalData.TokenAccess}`}
        })
        .then(respuesta => respuesta.json())
        .then((Data)=>{
            const Registrados = Data.data.filter(D => D.checkin != null);
            setRegistrados(Registrados);
            setInscritos(Data.data)
        })
        .catch((error)=>{
            console.error(error)
        });

        fetch(GlobalApis.ApiTodosEventos)
        .then(respuesta => respuesta.json())
        .then((Data)=>{
            console.log(Data.data[0].id)
            const ElEvento = Data.data.filter(D => D.id == LocalData.IDEvents);
            Data.data.forEach((D)=>{
                if(D.id == LocalData.IDEvents){
                    setInformacionEvento(D)
                }
            })
        })
        .catch(()=>{

        })


    },[StatusModal])


  return (
    <Modal  visible={StatusModal} transparent={true}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'gray',opacity:0.2,width:'100%',height:'100%'}}>

            </View>
            <View style={{width:'90%',borderWidth:1,borderRadius:10,borderColor:'#ced4da',padding:15,backgroundColor:'white',position:'absolute',gap:10}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'600',textAlign:'center'}}>{InformacionEvento.title}</Text>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'gray'}}> {Registrados.length}  registrados de {Inscritos.length}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/Location.png')}/>
                        <Text >{InformacionEvento?.room ? InformacionEvento.room.location : 'No disponible'}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/calendar-week.png')}/>
                        <Text >{InformacionEvento?.start_time?.slice(0,10)}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{
                        height:15,
                        width:15,
                        objectFit:'contain',
                        tintColor:'#b3b3b3',
                        }} source={require('../../assets/IconParticipantes/clock-4.png')}/>
                        <Text >{InformacionEvento?.start_time?.slice(11,16)} - {InformacionEvento?.end_time?.slice(11,16)}</Text>
                    </View>
                    
                </View>
                <View>
                    <Text style={{fontSize:16,textAlign:'center',color:'gray'}}>
                        {InformacionEvento?.description}
                    </Text>
                </View>

                <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{
                        FDeployModal()
                    }} style={{borderWidth:1,width:'100%',alignItems:'center',padding:10,borderRadius:10,backgroundColor:'#023e8a'}}>
                        <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
