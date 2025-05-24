import { Button, FlatList, Image, 
Text, TouchableOpacity, View,ScrollView,VirtualizedList, 
TextInput} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { DataApis } from "../../Data/DataApi";
import { StyleHome } from "../../style/StyleHome";
import CardHomeEvents from "../../Components/CardHomeEvents";
import { CheckMenuPerfil,funcionChangeStateMenuPerfil } from "../_layout";
import { StatusBar } from "expo-status-bar";
import ModalCerrarSesion from "../../Components/ModalCerrarSesion";

export default function index() {

    const Router = useRouter();
    const [StatusBack,setStatusBack] = useState(true);
    const [AllEvents,setAllEvents] = useState([]);
    const [StatusAllEvents,setStatusAllEvents] = useState(false);





    // Filter
    const [IsFilter,setIsFilter] = useState(false);
    const [RotateIconFilter,setRotateIconFilter] = useState(true);
    const [IconBtnFilter,setIconBtnFilter] = useState({
        Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    const [StyleContainerFilter,setStyleContainerFilter] = useState(StyleHome.ContainerFilter)
    const [StyleFiltros,setStyleFiltros] = useState(StyleHome.ContainerBtnFiltrosNotShow);

    // Search
    const [ContadorTransition, setContadorTransition] = useState(15);
    const [DisplayTexInput,setDisplayTexInput] = useState('none');
    const [StatusSearch,setStatusSearch] = useState(true);
    const [IconSearch,setIconSearch] = useState(
        require('../../assets/IconHome/search-big.png')
    );

    //Status ModalCerrarSesion
    useEffect(()=>{

    })

   
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
        return(StatusBack)
        });
    },[StatusBack]);

    useEffect(()=>{
        const GetEvents = () =>{
            fetch(DataApis[0].ApiEvent)
            .then(respuesta => respuesta.json())
            .then((Data)=>{
                setAllEvents(Data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setStatusAllEvents(true);
            })
        };
        GetEvents();
    });

    const DeployFilter = () => {
        if(RotateIconFilter){
            setIconBtnFilter({
                Icon:require('../../assets/IconHome/ArrowAbajo.png')
            });
            setRotateIconFilter(!RotateIconFilter);
            setStyleFiltros(StyleHome.ContainerBtnFiltrosShow);
        }else{
            setIconBtnFilter({
                Icon:require('../../assets/IconHome/ArrowDerecha.png')
            });
            setRotateIconFilter(!RotateIconFilter);
            setStyleFiltros(StyleHome.ContainerBtnFiltrosNotShow);
        }
    };

    const TransitionBuscador = () =>{
            setStatusSearch(!StatusSearch);
            if(StatusSearch){
                setContadorTransition(100)
                setDisplayTexInput('flex');
                setStyleContainerFilter(StyleHome.ContainerNotFilter);
                setIconSearch(require('../../assets/IconHome/x.png'))
            }else{
                setContadorTransition(15)
                setDisplayTexInput('none');
                setStyleContainerFilter(StyleHome.ContainerFilter)
                setIconSearch(require('../../assets/IconHome/search-big.png'))
            };
    };

  if(!StatusAllEvents){
    return(
        <SafeAreaProvider style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'white',
        }}>
            <View>
                <Text>
                    cargando...
                </Text>
            </View>
        </SafeAreaProvider>
    )
  }

    
    

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        
        <ScrollView style={{padding:10}} >
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

                    }} placeholder="Search"/>
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
            }}
            style={{paddingBottom:15}}
            data={AllEvents}
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
                    
                    />
                )
                }
            }}
            key={item => item.title}
            getItem={(data,index)=>data[index]}
            getItemCount={(data)=>data.length}

            />
        </ScrollView>

        <ModalCerrarSesion/>


        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
