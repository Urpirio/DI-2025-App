import { Text, View,TouchableOpacity,Image,TextInput, ScrollView, FlatList, RefreshControl} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleParticipantes } from "../../style/StyleParticipantes";
import { useEffect, useState } from "react";
import CardParticipante from "../../Components/Cards/CardParticipante";
import { useLocalSearchParams } from "expo-router";
import useRefresh from "../../hooks/useRefresh";
import { useRenderPart } from "../../func/ListaPart/useRenderPart";
import { useStyleListPart } from "../../func/ListaPart/useStyleListPart";
import CardSkeletonPart from "../../Components/Cards/CardSkeletonPart";

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
        <View style={StyleParticipantes.MainContainer}>

            {DataParticipant
            ? <CardParticipante
            DataParticipantes={DataParticipant}
            funcionRefresh={()=>{
              setAutoRefresh(!AutoRefresh)
            }}
            TextSearch={TextSearch}
            IconBtnFilter={IconBtnFilter}
            IconBtnFilterR={IconBtnFilterR}
            setFiltroBusqueda={setFiltroBusqueda}
            setFiltroEstado={setFiltroEstado}
            FiltroBusqueda={FiltroBusqueda}
            FiltroEstado={FiltroEstado}
            DeployFilterRegistro={DeployFilterRegistro}
            DeployFilterS={DeployFilterS}
            DeploySelectR={DeploySelectR}
            DeploySelectS={DeploySelectS}
            StateRefresh={StateRefresh}
            ScreenRefresHome={ScreenRefresHome}
            setTextSearch={setTextSearch}
            /> 
            : 
            <ScrollView>
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
