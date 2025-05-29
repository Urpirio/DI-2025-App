import { Image,Text, TouchableOpacity, View,ScrollView,VirtualizedList, 
TextInput,ActivityIndicator} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState} from "react";
import { BackHandler } from "react-native";
import { StyleHome } from "../../style/StyleHome";
import CardHomeEvents from "../../Components/CardHomeEvents";
import { CheckMenuPerfil, funcionChangeStateMenuPerfil, StatusModalCerrarS} from "../_layout";
import { StatusBar } from "expo-status-bar";
import ModalCerrarSesion from "../../Components/ModalCerrarSesion";
import { RefreshControl } from "react-native";
import useRefresh from "../../hooks/useRefresh";
import { useHome } from "../../func/Home/useFilterHome";
import { useGetEvents } from "../../func/Home/useGetEvents";
import { CerrarSesion } from "../_layout";

export default function index() {

    const [StatusBack,setStatusBack] = useState(true);

    const {GetEvents,Loading,AllEvents} = useGetEvents();

    //Hook de Estilos del filtro y el buscador 
    const {
        DeployFilter,
        TransitionBuscador,
        CloseBuscador,
        IsFilter,
        IconBtnFilter,
        StyleContainerFilter,
        StyleFiltros,
        ContadorTransition,
        DisplayTexInput,
        IconSearch,
        RotateIconFilter,
        
    } = useHome();

    //Hook global para refrescar la lista
    const { StateRefresh, ScreenRefresHome} = useRefresh();


    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
        return(CerrarSesion)
        });
    },[CerrarSesion])

    useEffect(()=>{
        GetEvents()
    });



  if(!Loading){
    return(
        <SafeAreaProvider style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'white',
        }}>
            <View>
                <ActivityIndicator size="large" />
            </View>
        </SafeAreaProvider>
    )
  };

    
    

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>

        

        <ScrollView style={{padding:10}}  
            refreshControl={
            <RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome}/>
            }>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
             <View style={StyleContainerFilter}>
                <TouchableOpacity style={StyleHome.BtnFilterDeploy} 
                    onPress={DeployFilter}>
                    <Text style={{color:'gray'}}>Filtra por Sala</Text>
                    <Image style={StyleHome.IconBtnFilter} source={IconBtnFilter.Icon}/>
                </TouchableOpacity>
                <View style={StyleFiltros}>
                    <TouchableOpacity style={StyleHome.BtnSelectFilter}>
                        <Text style={StyleHome.TextBtnSelectFilter}>Sala A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleHome.BtnSelectFilter}>
                        <Text style={StyleHome.TextBtnSelectFilter}>Sala A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleHome.BtnSelectFilter}>
                        <Text style={StyleHome.TextBtnSelectFilter}>Sala A</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={{padding:5,justifyContent:'center',alignItems:'center'}} onPress={TransitionBuscador}>
                        <Image style={{height:'90%',width:40,objectFit:'contain'}} source={IconSearch}/>
                    </TouchableOpacity>
                    <TextInput style={{
                        fontSize:16,
                        width:`85%`,
                        borderTopRightRadius:10,
                        borderBottomRightRadius:10,
                        display: `${DisplayTexInput}`

                    }} placeholder="Buscador" placeholderTextColor={'#adb5bd'}/>
                </View>
           </View>
            
            <VirtualizedList
            onTouchMove={()=>{
                if(!RotateIconFilter){
                    DeployFilter();
                };
                if(!CheckMenuPerfil){
                    funcionChangeStateMenuPerfil();
                };

                CloseBuscador();
            }}
            style={{paddingBottom:15}}
            data={AllEvents.DataEvent}
            renderItem={({item})=>{
                if(!IsFilter){
                    return(
                    <CardHomeEvents
                    NombreEvento={item.title}
                    Localizacion={item.room.location}
                    FechaEvento={item.start_time.slice(0,10)}
                    HoraInicio={item.start_time.slice(12,16)}
                    HoraFinal={item.end_time.slice(12,16)}
                    IconBtn={require('../../assets/IconHome/caret-left.png')}
                    IDEvents={item.id}
                    />
                )
                }
            }}
            key={item => item.title}
            getItem={(data,index)=>data[index]}
            getItemCount={(data)=>data.length}

            />
        </ScrollView>

        
        <ModalCerrarSesion
        StatusModal={StatusModalCerrarS}
        FuncionGoBack={()=>{
            setStatusBack(!StatusBack)
        }}
        />

        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
