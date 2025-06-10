import { Text, View,TouchableOpacity,Image,TextInput, ScrollView, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleParticipantes } from "../../style/StyleParticipantes";
import { useEffect, useState } from "react";
import CardParticipante from "../../Components/Cards/CardParticipante";
import { useLocalSearchParams } from "expo-router";
import useRefresh from "../../hooks/useRefresh";
import { useRenderPart } from "../../func/ListaPart/useRenderPart";
import { useStyleListPart } from "../../func/ListaPart/useStyleListPart";

export default function ListaPart() {


   const {
    DeployFilterRegistro,
    DeployFilterS,
    DeploySelectR,
    IconBtnFilter,
    IconBtnFilterR,
    DeploySelectS, 
   } = useStyleListPart();
    
    const LocalData = useLocalSearchParams();
    const { ScreenRefresHome,StateRefresh} = useRefresh(false);
    const [AutoRefresh,setAutoRefresh] = useState(false)

    const {
      Loading,
      DataParticipant,
      GetParticipant,
      FiltroBusqueda,
      TextSearch,
      setTextSearch,
      setFiltroBusqueda,
      setFiltroEstado,
      FiltroEstado,
    } = useRenderPart();

    useEffect(()=>{
      
        GetParticipant({Event:LocalData.IDEvents,
        TokenAcces: LocalData.TokenAccess})

    },[StateRefresh,TextSearch,FiltroEstado,AutoRefresh]);


  return (
    <SafeAreaProvider style={StyleParticipantes.Body}>
        <ScrollView style={StyleParticipantes.MainContainer} 
            refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome} />}>
            <View style={StyleParticipantes.SearchContainer}>
                  <TouchableOpacity style={StyleParticipantes.BtnSearch}>
                      <Image style={StyleParticipantes.IconBtnSearch}
                        source={require('../../assets/IconParticipantes/search-big.png')}/>
                  </TouchableOpacity>
                  <TextInput style={StyleParticipantes.TextInputSearch} 
                    placeholder={`Buscador con ${FiltroBusqueda}`} placeholderTextColor={'#adb5bd'} 
                      value={TextSearch} onChangeText={setTextSearch}/>
            </View>
            <View style={{flexDirection:'row',gap:5}}>
            <View style={StyleParticipantes.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantes.BtnDeployFilter} 
                onPress={DeployFilterS}>
                <Text style={{color:'gray'}}>Filtrar busqueda por</Text>
                <Image style={StyleParticipantes.IconArrow} 
                  source={IconBtnFilter.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelectS}>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{
                  setFiltroBusqueda('Email');
                  DeployFilterS();
                }}>
                  <Text style={{color:'gray'}}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{
                  setFiltroBusqueda('Nombre');
                  DeployFilterS();
                }}>
                  <Text style={{color:'gray'}}>Nombre</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={StyleParticipantes.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantes.BtnDeployFilter} 
                onPress={DeployFilterRegistro}>
                <Text style={{color:'gray'}}>{FiltroEstado}</Text>
                <Image style={StyleParticipantes.IconArrow} 
                  source={IconBtnFilterR.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelectR}>

                {FiltroEstado == 'Registrados' ? 
                <View/> 
                : 
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{
                  setFiltroEstado('Registrados');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>Registrado</Text>
                </TouchableOpacity>}

                {FiltroEstado == 'No registrados' ? 
                <View/> 
                :
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{
                  setFiltroEstado('No registrados');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>No registrado</Text>
                </TouchableOpacity>
                }

                {FiltroEstado == 'Todos' ?
                 <View/> 
                : 
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{
                  setFiltroEstado('Todos');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>Todos</Text>
                </TouchableOpacity>}
              </View>
            </View>
            </View>

            {Loading ? <FlatList 
            data={DataParticipant} 
            renderItem={({item})=>{
            return(   
            <CardParticipante 
            first_name={item.first_name}
            last_name={item.last_name}
            IdPersona={item.id.slice(30,36)}
            Email={item.email}
            ImgPerfil={item.profile_picture}
            CheckIn={item.checkin}
            funcionRefresh={()=>{
              setAutoRefresh(!AutoRefresh)
            }}
            TokenAccess={LocalData.TokenAccess}
            user_id={item.userEventId}
            />
            )
            }}/> 
            : <ActivityIndicator size={'large'} />}

        </ScrollView>
    </SafeAreaProvider>
  )
}
