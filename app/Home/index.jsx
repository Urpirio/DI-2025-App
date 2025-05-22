import { Button, FlatList, Image, StatusBar, Text, TouchableOpacity, View,ScrollView } from "react-native";
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
        <View style={{height:60,justifyContent:'center',alignItems:'flex-end',paddingHorizontal:10}}>
                <TouchableOpacity style={{borderWidth:1,paddingHorizontal:40,paddingVertical:10,borderRadius:10,position:'absolute'}}>
                    <Text>Filtra Sala</Text>
                </TouchableOpacity>
                <View style={{opacity:0,height:"100%",width:'100%'}}>
                    <Text>FFFFF</Text>
                </View>
        </View>
        <ScrollView style={{padding:10}}>
            <View style={{paddingVertical:10}}>
                <Text style={{fontSize:20,color:'#023e8a',fontWeight:'600'}}>Eventos</Text>
            </View>
            <FlatList
            style={{paddingBottom:15}}
            data={AllEvents}
            renderItem={({item})=>{
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
            }}
            />
        </ScrollView>
        <StatusBar barStyle={'default'} />
    </SafeAreaProvider>
  )
}
