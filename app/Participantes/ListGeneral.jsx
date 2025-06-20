import { Text, View,TouchableOpacity,Image,TextInput, ScrollView, FlatList, RefreshControl, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleParticipantesGeneral } from "../../style/StyleParticipantesGeneral";
import { useEffect, useState } from "react";
import CardPartGeneral from "../../Components/Cards/CardPartGeneral";
import { useLocalSearchParams } from "expo-router";
import useRefresh from "../../hooks/useRefresh";
import { useRenderPartG } from "../../func/ListaPart/useRenderPartG";
import CardSkeletonPart from "../../Components/Cards/CardSkeletonPart";
import TopHeaderListG from "../../Components/TopBarLists/TopHeaderListG";

export default function ListGeneral() {

    const [DeploySelect,setDeploySelect] = useState(StyleParticipantesGeneral.SelectContainerFilterHidden);
    const [RotateIconFilter,setRotateIconFilter] = useState(true);
    const [IconBtnFilter,setIconBtnFilter] = useState({
        Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    const LocalData = useLocalSearchParams();
    //hook personalizado
    const { ScreenRefresHome,StateRefresh} = useRefresh();
    const [AutoRefresh,setAutoRefresh] = useState(false)

    const {GetGeneralParticipant ,
          Loading,
          DataParticipant,
          TextSearch,
          setTextSearch,
          FiltroBusqueda,
          setFiltroBusqueda,
        } = useRenderPartG();

    useEffect(()=>{
        GetGeneralParticipant({TokenAcces: LocalData.TokenAccess,EventId: LocalData.IDEvents})
    },[StateRefresh,TextSearch,AutoRefresh])


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
        
          <View>
            {Loading 
            ? 
            <CardPartGeneral
            ListaParticipantes={DataParticipant}
            funcionRefresh={()=>{setAutoRefresh(!AutoRefresh);}}
            setTextSearch={setTextSearch}
            setFiltroBusqueda={setFiltroBusqueda}
            DeployFilter={DeployFilter}
            StateRefresh={StateRefresh}
            ScreenRefresHome={ScreenRefresHome}
            TextSearch={TextSearch}
            DeploySelect={DeploySelect}
            IconBtnFilter={IconBtnFilter}
            /> 
            : 
            <ScrollView>
              <TopHeaderListG
              setTextSearch={setTextSearch}
              DeployFilter={DeployFilter}
              setFiltroBusqueda={setDeploySelect}
              FiltroBusqueda={FiltroBusqueda}
              TextSearch={TextSearch}
              DeploySelect={DeploySelect}
              IconBtnFilter={IconBtnFilter}
              />
              <CardSkeletonPart/>
              <CardSkeletonPart/>
              <CardSkeletonPart/>
              <CardSkeletonPart/>
              <CardSkeletonPart/>
            </ScrollView>
            }
        </View>
        
    </SafeAreaProvider>
  )
}
