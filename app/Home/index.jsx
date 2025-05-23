import { Button, FlatList, Image, StatusBar, 
Text, TouchableOpacity, View,ScrollView,VirtualizedList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { DataApis } from "../../Data/DataApi";
import { StyleHome } from "../../style/StyleHome";
import CardHomeEvents from "../../Components/CardHomeEvents";

export default function index() {

    const Router = useRouter();
    const [StatusBack,setStatusBack] = useState(true);
    const [AllEvents,setAllEvents] = useState([]);
    const [StatusAllEvents,setStatusAllEvents] = useState(false);
    const [IsFilter,setIsFilter] = useState(false);
    const [RotateIconFilter,setRotateIconFilter] = useState(true);
    const [IconBtnFilter,setIconBtnFilter] = useState({
        Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    const [StyleFiltros,setStyleFiltros] = useState(StyleHome.ContainerBtnFiltrosNotShow)
   
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
    }

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
            <View style={StyleHome.ContainerFilter}>
                <TouchableOpacity style={StyleHome.BtnFilterDeploy} 
                    onPress={DeployFilter}>
                    <Text style={{color:'gray'}}>Filtra por Sala</Text>
                    <Image style={StyleHome.IconBtnFilter} source={IconBtnFilter.Icon}/>
                </TouchableOpacity>
                <View style={StyleFiltros}>
                    <TouchableOpacity style={{
                        backgroundColor:'white',
                        borderBottomWidth:1,
                        borderColor: '#ced4da',
                        padding:5,
                        borderRadius: 5,
                    }}>
                        <Text style={{color:'#023e8a',fontWeight:'600'}}>Sala A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'white',
                        borderBottomWidth:1,
                        borderColor: '#ced4da',
                        padding:5,
                        borderRadius: 5,
                    }}>
                        <Text style={{color:'#023e8a',fontWeight:'600'}}>Sala A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor:'white',
                        borderBottomWidth:1,
                        borderColor: '#ced4da',
                        padding:5,
                        borderRadius: 5,
                    }}>
                        <Text style={{color:'#023e8a',fontWeight:'600'}}>Sala A</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <VirtualizedList
            onTouchMove={()=>{
                if(!RotateIconFilter){
                    DeployFilter();}
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
        <StatusBar barStyle={'default'} />
    </SafeAreaProvider>
  )
}
