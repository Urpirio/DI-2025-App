import { Text, View,FlatList, TouchableOpacity, Image,TextInput,ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalApis } from "../../../Apis/GlobalApis";
import { useCallback, useEffect, useState } from "react";
import { StyleScreenEventos } from "../../../style/Style - ScreenParticipantes/StyleScreen - Evento";
import { useRenderTodos } from "../../../hooks/hooks - ScreenParticipantes/useRenderTodos";
import { useSendPart } from "../../../hooks/hooks - ScreenParticipantes/useSendPart";
import { useSendPartG } from "../../../hooks/hooks - ScreenParticipantes/useSendPartG";
import { useStyleEnEvento } from "../../../hooks/hooks - ScreenParticipantes/useStyleEnEvento";
import { router,useLocalSearchParams } from "expo-router";
import ModalSobreEvento from "../../../Components/components - ScreenParticipantes/ModalSobreEvento";
import useRefresh from "../../../hooks/hooks - Globales/useRefresh";
import { RefreshControl } from "react-native";
import { useFocusEffect } from "expo-router";
import { BlurView } from "expo-blur";


export default function index() {

  const { GetTodosUsuarios,DatosParticipantes,setTextSearch,TextSearch,FiltroBuscador ,setFiltroBuscador,FiltroEstado,setFiltroEstado} = useRenderTodos();
  const {ConfirmarAsistencia} = useSendPart();
  const {AsistenciaStaff} = useSendPartG();
  const {DeployDropDownBuscador,DeployDropDownEstado,StyleDropDownBuscador} = useStyleEnEvento();
  const LocalData = useLocalSearchParams();
  const [DeployInformacion,setDeployInformacion] = useState(false);
  const [RefreshbtnCard,setRefreshbtnCard] = useState(false);
  const { ScreenRefresHome,StateRefresh }= useRefresh();



  useFocusEffect(useCallback(()=>{
    GetTodosUsuarios();
  },[TextSearch,StyleDropDownBuscador,FiltroEstado,RefreshbtnCard,StateRefresh]));

  const ChangeFiltroBusqueda = ()=>{
        if(FiltroBuscador === 'Nombre'){
            setFiltroBuscador('Email')
        }else{
            setFiltroBuscador('Nombre')
        }
    }

  const Button = ({Registrado,item}) =>{
    if(Registrado === true){
        return <View style={{width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                    <TouchableOpacity disabled 
                    style={{borderWidth:1,borderColor: '#34C7594D',padding:5,borderRadius: 5,justifyContent:'center',alignItems:'center',backgroundColor:'#34C7594D'}}>
                        <Text style={{color: '#34C759'}}>Registrado</Text>
                </TouchableOpacity>                  
        </View> 
    }else if(Registrado === false){
        return <View style={{width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
             <TouchableOpacity onLongPress={()=>{
                setRefreshbtnCard(!RefreshbtnCard)
                ConfirmarAsistencia({userEventId:item.userEventId})
                }} 
                style={{
                    borderWidth:1,
                    borderColor: '#007AFF',
                    paddingVertical:5,
                    paddingHorizontal:10,
                    borderRadius: 5,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#007AFF',
                    display: `${item?.Registrado ? 'none' : 'flex'}`}}>
                <Text style={{color: 'white'}}>Registrar</Text>
            </TouchableOpacity>
        </View>
        
       
    }else if(Registrado === null){
        return <View style={{width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                    <TouchableOpacity onLongPress={()=>{
                        setRefreshbtnCard(!RefreshbtnCard)
                        AsistenciaStaff({userID: item?.id})
                    }} style={{
                        borderWidth:1,
                        borderColor: '#006400',
                        paddingVertical:5,
                        paddingHorizontal:10,
                        borderRadius: 5,
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'#006400'
                    }}>
                        <Text style={{color: 'white'}}>Registrar</Text>
                </TouchableOpacity>                  
            </View> 
    }

  };

 
    
  return (
    <SafeAreaProvider style={StyleScreenEventos.BodyScreen}>

       <FlatList data={DatosParticipantes}
       
        refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome}/>}

        style={{paddingHorizontal:5}}

        ListHeaderComponentStyle={{zIndex:50}}

        ListEmptyComponent={
        <View style={StyleScreenEventos.NoElementoslista}>
            <Text style={StyleScreenEventos.TextNoElementos}>No hay coincidencia</Text>
        </View>}

        ListHeaderComponent={ 
        <View style={StyleScreenEventos.ContenedorFiltros}>

        <View style={{width:'100%'}}>
            <BlurView intensity={80} style={StyleScreenEventos.ContenedorBuscador} >
                <Image style={StyleScreenEventos.IconoBuscar} 
                source={require('../../../assets/IconParticipantes/search-big.png')}/>
                <TextInput 
                placeholderTextColor={'#adb5bd'} 
                value={TextSearch} 
                onChangeText={setTextSearch} 
                placeholder={`Buscador por ${FiltroBuscador}`} 
                style={StyleScreenEventos.InputBuscador}/>
                <TouchableOpacity onPress={ChangeFiltroBusqueda}>
                    <Image 
                    style={{height:25,width:25,objectFit:'contain',tintColor:'#007AFF'}} 
                    source={require('../../../assets/IconParticipantes/menu-filter.png')}/>
                </TouchableOpacity>
            </BlurView>
        </View>

        <View horizontal 
            style={StyleScreenEventos.ContainerFiltros}>
            <TouchableOpacity 
                onPress={()=>{setFiltroEstado('Todos los usuarios')}}
                style={FiltroEstado === 'Todos los usuarios' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                <Text style={FiltroEstado === 'Todos los usuarios' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros }>
                Todos</Text>
            </TouchableOpacity>
             {/* <TouchableOpacity 
                onPress={()=>{setFiltroEstado('Participantes en el evento')}}
                style={FiltroEstado === 'Participantes en el evento' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                <Text style={FiltroEstado === 'Participantes en el evento' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros }>Participantes en el evento</Text>
            </TouchableOpacity> */}
             <TouchableOpacity 
                onPress={()=>{setFiltroEstado('Usuarios no inscritos')}}
                style={FiltroEstado === 'Usuarios no inscritos' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                <Text style={FiltroEstado === 'Usuarios no inscritos' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros }>No inscritos</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{setFiltroEstado('Usuarios Inscritos')}}
                style={FiltroEstado === 'Usuarios Inscritos' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                <Text style={FiltroEstado === 'Usuarios Inscritos' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros }>Inscritos</Text>
            </TouchableOpacity>
        </View>
        </View>}

        renderItem={({item})=>{
            // console.log(item)
            return(
            <View intensity={210} style={StyleScreenEventos.CardListado}>
                <View style={{width:'38%',}}>
                    <Image style={{height: 140, width:'100%',objectFit:'corver',borderRadius:5}} 
                    source={ item?.profile_picture ? {uri: GlobalApis.ApiImg + item?.profile_picture } : {uri:'https://i.pinimg.com/736x/1a/a8/d7/1aa8d75f3498784bcd2617b3e3d1e0c4.jpg'}}/>
                </View>
                <View style={{width:'59%',gap:5,justifyContent:'space-between'}}>

                    <View style={{gap:5}}>
                        <Text style={{fontWeight:'300',fontSize:20,color:'#023e7d'}}>
                            {item?.first_name?.split(' ')[0]} {item?.last_name?.split(' ')[0]}
                        </Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                            <Image 
                            style={{height:15,width:15,objectFit:'contain',tintColor:'#6B6B6B'}}
                            source={require('../../../assets/IconParticipantes/IconProfile.png')}/>
                            <View style={{borderLeftWidth:1,height:'100%'}}/>
                            <Text style={{fontWeight:'300',fontSize:16,color:'#09090999'}}>
                            {item?.id.slice(30,36)}
                            </Text>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                            <Image 
                            style={{height:15,width:15,objectFit:'contain',tintColor:'#6B6B6B'}} 
                            source={require('../../../assets/IconParticipantes/IconEmail.png')}/>
                            <View style={{borderLeftWidth:1,height:'100%'}}/>
                            <Text style={{fontSize:12,fontWeight:'300',color:'gray'}}>
                            {item?.email}
                            </Text>
                        </View>
                        
                   </View>

                    <Button Registrado={item?.Registrado} item={item}/> 
                    
                </View>
            </View>
            )
        }}/> 



        <TouchableOpacity onPress={()=>{setDeployInformacion(true)}} 
        style={{
            borderWidth:1,
            borderRadius:'100%',
            width:65,height:65,
            position:'absolute',
            backgroundColor: '#008000',
            marginBottom:90,
            marginRight:20,
            borderColor:'#008000',
            padding:15
        }}>
            <Image 
            style={{height:'100%',width:'100%',tintColor:'white',objectFit:'contain'}} 
            source={require('../../../assets/IconParticipantes/IconQuestion.png')}/>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                router.navigate({
                  pathname:'Screens/ScreenCheckIn/CheckIn',
                  params:{
                    TokenAccess: LocalData.TokenAccess,
                    IDEvents: LocalData.IDEvents,
                    StaffId:LocalData.StaffId
                  }
                })
        }} style={{
            borderWidth:1,
            borderRadius:'100%',
            width:65,height:65,
            position:'absolute',
            backgroundColor:'#007AFF',
            marginBottom:20,
            marginRight:20,
            borderColor:'#007AFF',
            padding:20}}>
            <Image 
            style={{height:'100%',width:'100%',tintColor: 'white',objectFit:'contain'}} 
            source={require('../../../assets/IconParticipantes/IconQR.png')}/>
        </TouchableOpacity>


        <ModalSobreEvento 
        Status={true}
        StatusModal={DeployInformacion}
        FDeployModal={()=>{

            setDeployInformacion(false)
        }}/>


    </SafeAreaProvider>
  )
}
