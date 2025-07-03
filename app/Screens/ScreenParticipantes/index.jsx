import { Text, View,FlatList, TouchableOpacity, Image,TextInput } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalApis } from "../../../Apis/GlobalApis";
import { useEffect, useState } from "react";
import { StyleScreenEventos } from "../../../style/StyleScreen - Evento";
import { useRenderTodos } from "../../../func/ListaPart/useRenderTodos";
import { useSendPart } from "../../../func/ListaPart/useSendPart";
import { useSendPartG } from "../../../func/ListaPart/useSendPartG";
import { useStyleEnEvento } from "../../../func/ListaPart/useStyleEnEvento";
import { router,useLocalSearchParams } from "expo-router";
import ModalSobreEvento from "../../../Components/Modales/ModalSobreEvento";
import useRefresh from "../../../hooks/useRefresh";
import { RefreshControl } from "react-native";


export default function index() {

  const { GetTodosUsuarios,DatosParticipantes,setTextSearch,TextSearch,FiltroBuscador ,setFiltroBuscador,FiltroEstado,setFiltroEstado,ContarParticipantes} = useRenderTodos();
  const {ConfirmarAsistencia} = useSendPart();
  const {AsistenciaStaff} = useSendPartG();
  const {DeployDropDownBuscador,DeployDropDownEstado,StyleDropDownBuscador,StyleDropDownEstado,IconDropDownBuscado,IconDropDownEstado,} = useStyleEnEvento();
  const LocalData = useLocalSearchParams();
  const [DeployInformacion,setDeployInformacion] = useState(false);
  const [RefreshbtnCard,setRefreshbtnCard] = useState(false);
  const { ScreenRefresHome,StateRefresh }= useRefresh();



  useEffect(()=>{
    GetTodosUsuarios();
  },[TextSearch,StyleDropDownBuscador,StyleDropDownEstado,FiltroEstado,RefreshbtnCard,StateRefresh]);

  const Button = ({Registrado,item}) =>{
    if(Registrado === true){
        return
    }else if(Registrado === false){
        return <TouchableOpacity onLongPress={()=>{
                        ScreenRefresHome();
                        ConfirmarAsistencia({userEventId:item.userEventId})
                    }} style={{borderWidth:1,borderColor: '#023e8a',padding:5,borderRadius: 5,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#023e8a',display: `${item.Registrado ? 'none' : 'flex'}`}}>
                        <Text style={{color: 'white'}}>Confirmar asistencia</Text>
                </TouchableOpacity>
    }else if(Registrado === null){
        return <TouchableOpacity onLongPress={()=>{
                        ScreenRefresHome()
                        AsistenciaStaff({userID: item?.id})
                    }} style={{borderWidth:1,borderColor: 'green',padding:5,borderRadius: 5,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#008000'}}>
                        <Text style={{color: 'white'}}>Agregar y confirmar asistencia</Text>
                </TouchableOpacity>
    }

  };

  const DesactivarDropDown = () =>{
    if(StyleDropDownBuscador.stado){
        DeployDropDownBuscador()
    }else if(StyleDropDownEstado.stado){
        DeployDropDownEstado()
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

        <View onTouchMove={DesactivarDropDown} style={{width:'100%'}}>
            <View style={StyleScreenEventos.ContenedorBuscador} >
                <Image style={StyleScreenEventos.IconoBuscar} source={require('../../../assets/IconParticipantes/search-big.png')}/>
                <TextInput value={TextSearch} onChangeText={setTextSearch} placeholder={`Buscador por ${FiltroBuscador}`} style={StyleScreenEventos.InputBuscador}/>
            </View>
        </View>

        <View style={StyleScreenEventos.ContenedorDropDown}>
            <View style={StyleScreenEventos.DropDownEstado}>
                <TouchableOpacity onPress={()=>DeployDropDownEstado()} style={StyleScreenEventos.ButtondeployDropDownEstado}>
                    <Text style={{fontSize:FiltroEstado == 'Participantes en el evento' ? 12 : 14}}>{FiltroEstado}</Text>
                    <Image style={StyleScreenEventos.IconDropDown} source={IconDropDownEstado}/>
                </TouchableOpacity>
                <View style={StyleDropDownEstado.Style}>
                    <TouchableOpacity onPress={()=>{
                        setFiltroEstado('Todos los usuarios');
                        DeployDropDownEstado();
                    }} style={StyleScreenEventos.buttonOpcionesDropDown}>
                        <Text style={{fontSize:14}}>{FiltroEstado === 'Todos los usuarios' ? 'Todos los usuarios ✔️' : 'Todos los usuarios'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        setFiltroEstado('Participantes en el evento');
                        DeployDropDownEstado();
                    }} style={StyleScreenEventos.buttonOpcionesDropDown}>
                        <Text style={{fontSize:14}}>{FiltroEstado === 'Participantes en el evento' ? 'Participantes en el evento ✔️' : 'Participantes en el evento'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        setFiltroEstado('Usuarios no inscritos');
                        DeployDropDownEstado();
                    }} style={StyleScreenEventos.buttonOpcionesDropDown}>
                        <Text style={{fontSize:14}}>{FiltroEstado === 'Usuarios no inscritos' ? 'Usuarios no inscritos ✔️' : 'Usuarios no inscritos'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        setFiltroEstado('Usuarios Inscritos');
                        DeployDropDownEstado();
                    }} style={StyleScreenEventos.buttonOpcionesDropDownUltimo}>
                        <Text style={{fontSize:14}}>{FiltroEstado === 'Usuarios Inscritos' ? 'Usuarios Inscritos ✔️' : 'Usuarios Inscritos'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={StyleScreenEventos.DropDownBuscador}>
                <TouchableOpacity onPress={()=>DeployDropDownBuscador()} style={StyleScreenEventos.ButtondeployDropDownBuscador}>
                    <Text style={{fontSize:14}}>Buscar por {FiltroBuscador}</Text>
                    <Image style={StyleScreenEventos.IconDropDown} source={IconDropDownBuscado}/>
                </TouchableOpacity>
                <View style={StyleDropDownBuscador.Style}>
                    <TouchableOpacity onPress={()=>{
                        setFiltroBuscador('Email');
                        DeployDropDownBuscador()
                    }} style={StyleScreenEventos.buttonOpcionesDropDown}>
                        <Text style={{fontSize:14}}>Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        setFiltroBuscador('Nombre');
                        DeployDropDownBuscador()
                    }} style={StyleScreenEventos.buttonOpcionesDropDownUltimo}>
                        <Text style={{fontSize:14}}>Nombre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>}
        renderItem={({item})=>{
            return(
            <View onTouchMove={DesactivarDropDown} style={StyleScreenEventos.CardListado}>
                <View style={{width:'30%',}}>
                    <Image style={{height: '100%', width:'100%',objectFit:'corver',borderRadius:5}} 
                    source={ item?.profile_picture ? {uri: GlobalApis.ApiImg + item?.profile_picture } : require('../../../assets/IconParticipantes/ImageDefaul.jpg')}/>
                </View>
                <View style={{paddingHorizontal:5,width:'70%',height:'100%',gap:5}}>

                    <Text style={{fontWeight:'600',fontSize:20,color:'gray'}}>{item?.first_name?.split(' ')[0]} {item?.last_name?.split(' ')[0]}</Text>
                    <Text>ID: {item?.id.slice(30,36)}</Text>
                    <Text>Email: {item?.email}</Text>
                    <Button Registrado={item?.Registrado} item={item}/>
                    
                </View>
            </View>
            )
        }}/> 



        <TouchableOpacity onPress={()=>{
            setDeployInformacion(true);
            ContarParticipantes();
            DesactivarDropDown()
        }} style={{borderWidth:1,borderRadius:10,height:55,width:55,position:'absolute',backgroundColor: '#008000',marginBottom:90,marginRight:20,borderColor:'#008000'}}>
            <Image style={{height:'100%',width:'100%',tintColor:'white'}} source={require('../../../assets/IconParticipantes/alert-circle.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
                DesactivarDropDown()
                router.navigate({
                  pathname:'Screens/ScreenCheckIn/CheckIn',
                  params:{
                    TokenAccess: LocalData.TokenAccess,
                    IDEvents: LocalData.IDEvents,
                    StaffId:LocalData.StaffId
                  }
                })
        }} style={{borderWidth:1,borderRadius: 10,width:55,height:55,position:'absolute',backgroundColor:'#023e8a',marginBottom:30,marginRight:20,borderColor:'#023e8a'}}>
            <Image style={{height:'100%',width:'100%',tintColor: 'white'}} source={require('../../../assets/IconParticipantes/scan (1).png')}/>
        </TouchableOpacity>
        <ModalSobreEvento 
        StatusModal={DeployInformacion}
        FDeployModal={()=>{

            setDeployInformacion(false)
        }}/>
    </SafeAreaProvider>
  )
}
