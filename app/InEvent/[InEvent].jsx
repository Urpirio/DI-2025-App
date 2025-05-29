import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleInEvent } from "../../style/StylesInEvent";

export default function InEvent() {

  const LocalData = useLocalSearchParams();


  return (
    <SafeAreaProvider style={StyleInEvent.Body}>
        <View style={StyleInEvent.MainContainer}>
            <View style={StyleInEvent.Section1}>
              <Text style={StyleInEvent.TextNombreEvent}>
                {LocalData.NombreEvento}
              </Text>
              <Text style={StyleInEvent.TextParticipantesEvent}>
                80/100
              </Text>
            </View>
            <View style={StyleInEvent.Section2}>
              <TouchableOpacity style={StyleInEvent.BtnRegistrarEntrada} 
              onPress={()=>{
                router.navigate({
                  pathname:'/Check-In/CheckIn',
                  params:{
                    TokenAccess: LocalData.TokenAccess,IDEvents: LocalData.IDEvents
                  }
                })
              }}>
              <Text style={StyleInEvent.TextBtnResgistrarEntrada}>
                Registrar Entrada
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleInEvent.BtnNuevoParticipante} onPress={()=>{
              router.navigate({pathname:'/Participantes/ListGeneral',params:{
                NameLista:'Lista General',WhatList: false,TokenAccess: LocalData.TokenAccess,IDEvents: LocalData.IDEvents
              }})
            }}>
              <Text style={StyleInEvent.TextBtnNuevoParticipante}>
                Nuevo Participante
              </Text>
            </TouchableOpacity>
            </View>

        </View>
        <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
}
