import { Image,Text, TouchableOpacity, View,ScrollView,VirtualizedList, 
TextInput,ActivityIndicator,
FlatList} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState} from "react";
import { BackHandler } from "react-native";
import { StyleHome } from "../../style/StyleHome";
import CardHomeEvents from "../../Components/Cards/CardHomeEvents";
import { CheckMenuPerfil, funcionChangeStateMenuPerfil, StatusModalCerrarS,funcionCancelarCerrarSesion} from "../_layout";
import { StatusBar } from "expo-status-bar";
import ModalCerrarSesion from "../../Components/Modales/ModalCerrarSesion";
import { RefreshControl } from "react-native";
import useRefresh from "../../hooks/useRefresh";
import { useHome } from "../../func/Home/useFilterHome";
import { useGetEvents } from "../../func/Home/useGetEvents";
import { CerrarSesion } from "../_layout";
import CardSkeleton from "../../Components/Cards/CardSkeleton";


// export let StatusRefreshHome;
export let funcionRefresh;

export default function index() {

    const [StatusBack,setStatusBack] = useState(true);

    const {
        GetEvents,
        Loading,
        AllEvents,
        GetSalaEvent,
        DataSala,
        SelectName,
        ChangeSelected,
        LoadingF,
        ChangetoSearch,
        SearchText,
        setSearchText,
        } = useGetEvents();




   

    //Hook de Estilos del filtro y el buscador 
    const {
        DeployFilter,
        TransitionBuscador,
        CloseBuscador,
        IconBtnFilter,
        StyleContainerFilter,
        StyleFiltros,
        ContadorTransition,
        DisplayTexInput,
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
        GetEvents();
    },[SearchText,SelectName,CerrarSesion,StateRefresh,StatusModalCerrarS]);

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




  if(!Loading){
    return(
        <SafeAreaProvider style={{backgroundColor:'white'}}>
            <ScrollView style={{padding:10}}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
             <View style={StyleContainerFilter}>
                <TouchableOpacity style={StyleHome.BtnFilterDeploy} 
                    onPress={()=>{DeployFilter(); GetSalaEvent();}}>
                    <Text style={{color:'gray'}}>{SelectName}</Text>
                    <Image style={StyleHome.IconBtnFilter} source={IconBtnFilter.Icon}/>
                </TouchableOpacity>
                <View style={StyleFiltros}>

                    {LoadingF ? <FlatList 
                    data={DataSala}
                    renderItem={({item})=>{
                        return(
                        <TouchableOpacity style={StyleHome.BtnSelectFilter} onPress={()=>{
                            ChangeSelected({Selected: item});
                            if(!RotateIconFilter){
                                DeployFilter();
                            };
                        }}>
                            <Text style={StyleHome.TextBtnSelectFilter}>{item}</Text>
                        </TouchableOpacity>
                        )
                    }}
                    /> : <ActivityIndicator size={'small'}/>}

                </View>
            </View>
                <View style={{
                    borderWidth:1,
                    borderRadius:10,
                    height:50,
                    flexDirection:'row',
                    borderColor:'#ced4da',
                    width:`${ContadorTransition}%`
                }}>
                    <TouchableOpacity style={{padding:5,justifyContent:'center',alignItems:'center'}} 
                        onPress={()=>{
                            TransitionBuscador(); 
                            ChangeSelected({Selected: 'No filtrar'})
                            ChangetoSearch();
                            
                        }}>
                        <Image style={{height:'90%',width:40,objectFit:'contain'}} source={IconSearch}/>
                    </TouchableOpacity>
                    <TextInput style={{
                        fontSize:16,
                        width:`85%`,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        display: `${DisplayTexInput}`

                    }} placeholder="Buscador" value={SearchText} onChangeText={setSearchText} placeholderTextColor={'#adb5bd'}/>
                </View>
           </View>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
        </ScrollView>
        </SafeAreaProvider>
    )
  };

    
    

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>

        

        <ScrollView style={{padding:10}}  refreshControl={
            <RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome}/>
        }>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
             <View style={StyleContainerFilter}>
                <TouchableOpacity style={StyleHome.BtnFilterDeploy} 
                    onPress={()=>{DeployFilter(); GetSalaEvent();}}>
                    <Text style={{color:'gray'}}>{SelectName}</Text>
                    <Image style={StyleHome.IconBtnFilter} source={IconBtnFilter.Icon}/>
                </TouchableOpacity>
                <View style={StyleFiltros}>

                    {LoadingF ? <FlatList 
                    data={DataSala}
                    renderItem={({item})=>{
                        return(
                        <TouchableOpacity style={StyleHome.BtnSelectFilter} onPress={()=>{
                            ChangeSelected({Selected: item});
                            if(!RotateIconFilter){
                                DeployFilter();
                            };
                        }}>
                            <Text style={StyleHome.TextBtnSelectFilter}>{item}</Text>
                        </TouchableOpacity>
                        )
                    }}
                    /> : <ActivityIndicator size={'small'}/>}

                </View>
            </View>
                <View style={{
                    borderWidth:1,
                    borderRadius:10,
                    height:50,
                    flexDirection:'row',
                    borderColor:'#ced4da',
                    width:`${ContadorTransition}%`
                }}>
                    <TouchableOpacity style={{padding:5,justifyContent:'center',alignItems:'center'}} 
                        onPress={()=>{
                            TransitionBuscador(); 
                            ChangeSelected({Selected: 'No filtrar'})
                            ChangetoSearch();
                            
                        }}>
                        <Image style={{height:'90%',width:40,objectFit:'contain'}} source={IconSearch}/>
                    </TouchableOpacity>
                    <TextInput style={{
                        fontSize:16,
                        width:`85%`,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        display: `${DisplayTexInput}`

                    }} placeholder="Buscador" value={SearchText} onChangeText={setSearchText} placeholderTextColor={'#adb5bd'}/>
                </View>
           </View>
            
           <FlatList
            onTouchMove={IsScrolling}
            style={{paddingBottom:15}}
            data={AllEvents.DataEvent}
            renderItem={({item})=>{
                    return(
                    <CardHomeEvents
                    NombreEvento={item.title}
                    Localizacion={item.room.location}
                    FechaEvento={item.start_time.slice(0,10)}
                    HoraInicio={item.start_time.slice(12,16)}
                    HoraFinal={item.end_time.slice(12,16)}
                    IconBtn={require('../../assets/IconHome/caret-left.png')}
                    IDEvents={item.id}
                    />)
                
            }}/>
            {/* } */}
        </ScrollView>

        
        <ModalCerrarSesion
        StatusModal={StatusModalCerrarS}
        FuncionGoBack={()=>{
            setStatusBack(!StatusBack);
        }}
        />

        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
