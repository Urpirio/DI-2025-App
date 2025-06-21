import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams,router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleInEvent } from "../../style/StylesInEvent";
import { useInEvent } from "../../func/InEvent/UseInEvent";
import {  Skeleton,LinearGradient } from "@rneui/themed";
import { useEffect } from "react";

export default function InEvent() {

  const LocalData = useLocalSearchParams();

  const {GetPartInEvent,Loading,CantidadPart} = useInEvent();

  useEffect(()=>{
    GetPartInEvent({TokenAccess: LocalData.TokenAccess,IdEvent: LocalData.IDEvents});
  },[LocalData.TokenAccess,LocalData.IDEvents]);

  const Cantidad_Registrados = CantidadPart.InEvent > 1 ? ' registrados de ' : ' registrado de ';
  const Cantidad_De_Personas_Dentro = CantidadPart.InEvent ? CantidadPart.InEvent : '?';
  const Cantidad_Total_De_Personas_Fuera = CantidadPart.PartInEvent ? CantidadPart.PartInEvent : '?';

  return (
    <SafeAreaProvider style={StyleInEvent.Body}>
        <View style={StyleInEvent.MainContainer}>
            <View style={StyleInEvent.Section1}>
              <Text style={StyleInEvent.TextNombreEvent}>
                {LocalData.NombreEvento}
              </Text>
              {Loading ? <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row',gap:5}}>
                  <Text style={{fontSize:18,fontWeight:'500',color:'#adb5bd'}}>
                  {Cantidad_De_Personas_Dentro} 
                  </Text>
                  <Text style={{fontSize:18,fontWeight:'500',color:'#adb5bd'}}>
                    {Cantidad_Registrados}
                  </Text>
                  <Text style={{fontSize:18,fontWeight:'500',color:'#adb5bd'}}>
                    {Cantidad_Total_De_Personas_Fuera}
                  </Text>
                </View>
              </View> : 
              <Skeleton 
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
              />}
            </View>
            <View style={StyleInEvent.Section2}>
              <TouchableOpacity style={StyleInEvent.BtnRegistrarEntrada} 
              onPress={()=>{
                router.navigate({
                  pathname:'/Check-In/CheckIn',
                  params:{
                    TokenAccess: LocalData.TokenAccess,
                    IDEvents: LocalData.IDEvents,
                    StaffId:LocalData.StaffId
                  }
                })
              }}>
              <Text style={StyleInEvent.TextBtnResgistrarEntrada}>
                Registrar Entrada
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={StyleInEvent.BtnNuevoParticipante} onPress={()=>{
              router.navigate({pathname:'/Participantes/ListGeneral',params:{
                NameLista:'Lista General',
                TokenAccess: LocalData.TokenAccess,
                IDEvents: LocalData.IDEvents,
                StaffId:LocalData.StaffId
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
