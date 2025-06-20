import { Text, View,ScrollView,FlatList} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState} from "react";
import { BackHandler } from "react-native";
import CardHomeEvents from "../../Components/Cards/CardHomeEvents";
import { CheckMenuPerfil, funcionChangeStateMenuPerfil, StatusModalCerrarS} from "../_layout";
import { StatusBar } from "expo-status-bar";
import ModalCerrarSesion from "../../Components/Modales/ModalCerrarSesion";
import { RefreshControl } from "react-native";
import useRefresh from "../../hooks/useRefresh";
import { useHome } from "../../func/Home/useFilterHome";
import { useGetEvents } from "../../func/Home/useGetEvents";
import { CerrarSesion } from "../_layout";
import { useSwitchHome } from "../../func/Home/useSwitchHome";
import { useNetInfo } from "@react-native-community/netinfo";
import SKhome from "../../Components/SK/SKhome";
import SearchHome from "../../Components/Searchs/Search - Home";
import NoInternet from "../../Components/AvisosInternet/NoInternet";

// export let StatusRefreshHome;
export let funcionRefresh;

export default function index() {

    const HaveInternet = useNetInfo();
    const [StatusBack,setStatusBack] = useState(true);

    const {SwitchStyle,StyleBtnHoy,StyleBtnTodos} = useSwitchHome();
    

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

    useEffect(()=>{
        if(HaveInternet.isConnected){
            GetEvents();
        }else if(HaveInternet.isWifiEnabled){
            GetEvents();
        }
        
    },[SearchText,SelectName,CerrarSesion,StateRefresh,
    StatusModalCerrarS,EventosHoy,Loading,HaveInternet.isWifiEnabled,
    HaveInternet.isConnected]);

    const IsScrolling = ()=>{
        if(!RotateIconFilter){
            DeployFilter();
        };
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
    return(
        <SKhome
        setEventosHoy={setEventosHoy}
        setSearchText={setSearchText}
        SearchText={SearchText}
        SelectName={SelectName}
        ChangeSelected={ChangeSelected}
        StyleBtnHoy={StyleBtnHoy}
        StyleBtnTodos={StyleBtnTodos}
        StyleFiltros={StyleFiltros}
        SwitchStyle={SwitchStyle}
        GetSalaEvent={GetSalaEvent}
        DataSala={DataSala}
        DeployFilter={DeployFilter}
        RotateIconFilter={RotateIconFilter}
        IconBtnFilter={IconBtnFilter}
        LoadingF={LoadingF}
        IconSearch={IconSearch}/>
    )
  };

    
    

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>

        <View style={{padding:10}}>
           
            
           <FlatList
            refreshControl={
            <RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome}/>
            }
           ListEmptyComponent={<View style={{marginVertical:100,alignItems:'center'}}>
            <Text style={{color:'gray'}}>No hay eventos</Text>
           </View>}
           ListHeaderComponentStyle={{zIndex:20}}
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
                LoadingF={LoadingF}/>}
            
            onTouchMove={IsScrolling}
            style={{paddingBottom:15}}
            data={AllEvents}
            renderItem={({item})=>{
                    return(
                    <CardHomeEvents
                    NombreEvento={item.title}
                    Localizacion={item.room === null ? '??' : item.room.location}
                    FechaEvento={item.start_time.slice(0,10)}
                    HoraInicio={item.start_time.slice(12,16)}
                    HoraFinal={item.end_time.slice(12,16)}
                    IconBtn={require('../../assets/IconHome/caret-left.png')}
                    IDEvents={item.id}
                    />)
                
            }}/>
        </View>

        
        <ModalCerrarSesion
        StatusModal={StatusModalCerrarS}
        FuncionGoBack={()=>{
            setStatusBack(!StatusBack);
        }}/>

        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
