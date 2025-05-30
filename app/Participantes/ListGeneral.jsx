import { Text, View,TouchableOpacity,Image,TextInput, ScrollView, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleParticipantesGeneral } from "../../style/StyleParticipantesGeneral";
import { useEffect, useState } from "react";
import CardPartGeneral from "../../Components/CardPartGeneral";
import { useLocalSearchParams } from "expo-router";
import useRefresh from "../../hooks/useRefresh";
import { useRenderPartG } from "../../func/ListaPart/useRenderPartG";

export default function ListGeneral() {

    const [DeploySelect,setDeploySelect] = useState(StyleParticipantesGeneral.SelectContainerFilterHidden);
    const [RotateIconFilter,setRotateIconFilter] = useState(true);
    const [IconBtnFilter,setIconBtnFilter] = useState({
        Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    const LocalData = useLocalSearchParams();
    const { ScreenRefresHome,StateRefresh} = useRefresh(false);

    const {GetGeneralParticipant ,Loading,DataParticipant} = useRenderPartG();

    useEffect(()=>{
        GetGeneralParticipant({TokenAcces: LocalData.TokenAccess,EventId: LocalData.IDEvents})
    },[StateRefresh])


    const DeployFilter = () => {
            if(RotateIconFilter){
                setIconBtnFilter({
                    Icon:require('../../assets/IconHome/ArrowAbajo.png')
                });
                setDeploySelect(StyleParticipantesGeneral.SelectContainerFilter)
                setRotateIconFilter(!RotateIconFilter);
            }else{
                setIconBtnFilter({
                    Icon:require('../../assets/IconHome/ArrowDerecha.png')
                });
                setDeploySelect(StyleParticipantesGeneral.SelectContainerFilterHidden)
                setRotateIconFilter(!RotateIconFilter);
            }
  };


  


  return (
    <SafeAreaProvider style={StyleParticipantesGeneral.Body}>
        <ScrollView style={StyleParticipantesGeneral.MainContainer} 
            refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome} />}>
            <View style={StyleParticipantesGeneral.SearchContainer}>
                  <TouchableOpacity style={StyleParticipantesGeneral.BtnSearch}>
                      <Image style={StyleParticipantesGeneral.IconBtnSearch}
                        source={require('../../assets/IconParticipantes/search-big.png')}/>
                  </TouchableOpacity>
                  <TextInput style={StyleParticipantesGeneral.TextInputSearch} 
                    placeholder="Buscador" placeholderTextColor={'#adb5bd'}/>
            </View>
            <View style={StyleParticipantesGeneral.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantesGeneral.BtnDeployFilter} 
                onPress={DeployFilter}>
                <Text style={{color:'gray'}}>Filtrar busqueda por</Text>
                <Image style={StyleParticipantesGeneral.IconArrow} 
                  source={IconBtnFilter.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelect}>
                <TouchableOpacity style={StyleParticipantesGeneral.SelectBtnForFilter} onPress={()=>{console.log(LocalData)}}>
                  <Text>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleParticipantesGeneral.SelectBtnForFilter}>
                  <Text>Nombre</Text>
                </TouchableOpacity>
              </View>
            </View>

            {Loading ? <FlatList 
            data={DataParticipant} 
            renderItem={({item})=>{
            return(   
            <CardPartGeneral 
            first_name={item.first_name}
            last_name={item.last_name}
            IdPersona={item.id.slice(30,36)}
            Email={item.email}
            ImgPerfil={item.profile_picture}
            CheckIn={item.checkin}
            />
            )
          }}/> : <ActivityIndicator size={'large'} />}

        </ScrollView>
    </SafeAreaProvider>
  )
}
