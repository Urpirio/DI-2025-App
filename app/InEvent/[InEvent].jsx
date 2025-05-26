import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleInEvent } from "../../style/StylesInEvent";

export default function InEvent() {
  const local = useLocalSearchParams();

  return (
    <SafeAreaProvider style={StyleInEvent.Body}>
        <View style={StyleInEvent.MainContainer}>
            <View style={StyleInEvent.Section1}>
              <Text style={StyleInEvent.TextNombreEvent}>
                {local.NombreEvento}
              </Text>
              <Text style={StyleInEvent.TextParticipantesEvent}>
                80/100
              </Text>
            </View>
            <View style={StyleInEvent.Section2}>
              <TouchableOpacity style={StyleInEvent.BtnRegistrarEntrada} 
              onPress={()=>{
                router.navigate('/Check-In/CheckIn')
              }}>
              <Text style={StyleInEvent.TextBtnResgistrarEntrada}>
                Registrar Entrada
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleInEvent.BtnNuevoParticipante} onPress={()=>{
              router.navigate({pathname:'/Participantes/ListaPart',params:{
                NameLista:'Lista General',WhatList: false,
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
