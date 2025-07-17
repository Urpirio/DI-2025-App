import { Text, View,ScrollView,FlatList} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState} from "react";
import { BackHandler } from "react-native";
import CardHomeEvents from "../../../Components/Components - ScreenHome/Cards/CardHomeEvents";
import { CheckMenuPerfil, funcionChangeStateMenuPerfil, StatusModalCerrarS} from "../../_layout";
import { StatusBar } from "expo-status-bar";
import ModalCerrarSesion from "../../../Components/Components - Globales/Modales/ModalCerrarSesion";
import { RefreshControl } from "react-native";
import useRefresh from "../../../hooks/hooks - Globales/useRefresh";
import { useHome } from "../../../hooks/hooks - ScreenHome/useFilterHome";
import { useGetEvents } from "../../../hooks/hooks - ScreenHome/useGetEvents";
import { CerrarSesion } from "../../_layout";
import { useSwitchHome } from "../../../hooks/hooks - ScreenHome/useSwitchHome";
import { useNetInfo } from "@react-native-community/netinfo";
import SearchHome from "../../../Components/Components - ScreenHome/Searchs/Search - Home";
import NoInternet from "../../../Components/Components - Globales/AvisosInternet/NoInternet";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import ModalSobreEvento from "../../../Components/components - ScreenParticipantes/ModalSobreEvento";

export let funcionRefresh;

export default function index() {

    const HaveInternet = useNetInfo();
    const [StatusBack,setStatusBack] = useState(true);

    const {SwitchStyle,StyleBtnHoy,StyleBtnTodos} = useSwitchHome();
    const [DeploAboutEvent,setDeploAboutEvent] = useState(false);
    const [IdEvent,setIdEvent] = useState();
    

    const {
        GetEvents,
        Loading,
        setLoading,
        AllEvents,
        GetSalaEvent,
        DataSala,
        SelectName,
        ChangeSelected,
        LoadingF,
        ChangetoSearch,
        SearchText,
        setSearchText,
        EventosHoy,
        setEventosHoy,
        NoEventos,
        } = useGetEvents();


    //Hook de Estilos del filtro y el buscador 
    const {
        DeployFilter,
        CloseBuscador,
        IconBtnFilter,
        StyleFiltros,
        IconSearch,
        RotateIconFilter,
    } = useHome();

    const { StateRefresh, ScreenRefresHome} = useRefresh();
    StatusRefreshHome = StateRefresh;
    funcionRefresh = ScreenRefresHome;

    BackHandler.addEventListener('hardwareBackPress',()=>{
     return(true)
    });

    useFocusEffect(useCallback(()=>{
        if(HaveInternet.isConnected){
            GetEvents();
        }else if(HaveInternet.isWifiEnabled){
            GetEvents();
        }
        
    },[SearchText,SelectName,CerrarSesion,StateRefresh,
    StatusModalCerrarS,EventosHoy,Loading,HaveInternet.isWifiEnabled,
    HaveInternet.isConnected]));

    const IsScrolling = ()=>{
        if(!CheckMenuPerfil){
            funcionChangeStateMenuPerfil();
        };
        if(SearchText ==  undefined){
            CloseBuscador();
            ChangetoSearch();
        }
    }

  if(!HaveInternet.isConnected){
    return(
        <NoInternet/>
    )
  }


  if(!Loading){
    return <View/>
  };

  return (
    <SafeAreaProvider style={{backgroundColor:'#f8f9fa'}}>

        <View style={{paddingHorizontal:10}}>
           
            
           <FlatList
           showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome}/>}
            ListEmptyComponent={<View style={{marginVertical:100,alignItems:'center'}}>
                <Text style={{color:'gray'}}>No hay eventos</Text>
            </View>}
            ListHeaderComponentStyle={{zIndex:50}}
            ListHeaderComponent={
                <SearchHome
                    SearchText={SearchText}
                    setSearchText={setSearchText}
                    setEventosHoy={setEventosHoy}
                    RotateIconFilter={RotateIconFilter}
                    DeployFilter={DeployFilter}
                    DataSala={DataSala}
                    GetSalaEvent={GetSalaEvent}
                    SelectName={SelectName}
                    StyleBtnHoy={StyleBtnHoy}
                    StyleBtnTodos={StyleBtnTodos}
                    StyleFiltros={StyleFiltros}
                    SwitchStyle={SwitchStyle}
                    ChangeSelected={ChangeSelected}
                    IconBtnFilter={IconBtnFilter}
                    IconSearch={IconSearch}
                    LoadingF={LoadingF}
            />}
            
            onTouchMove={IsScrolling}
            style={{paddingBottom:15,width:'100%'}}
            data={AllEvents}
            renderItem={({item})=>{
                return(
                    <CardHomeEvents
                    NombreEvento={item.title}
                    Localizacion={item.room === null ? '??' : item.room.location}
                    FechaEvento={item.start_time.slice(0,10)}
                    HoraInicio={item.start_time.slice(12,16)}
                    HoraFinal={item.end_time.slice(12,16)}
                    IDEvents={item.id}
                    DeployAboutEvent={()=>{
                        setDeploAboutEvent(true);
                        console.log(item?.id)
                        setIdEvent(item?.id)

                    }}
                />)
                
            }}/>
        </View>

        
        <ModalCerrarSesion
            StatusModal={StatusModalCerrarS}
            FuncionGoBack={()=>{
            setStatusBack(!StatusBack);
            }}
        />
       <ModalSobreEvento StatusModal={DeploAboutEvent} IDEvents={IdEvent} Status={false} FDeployModal={()=>{
        setDeploAboutEvent(false);
        
       }} />

        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
