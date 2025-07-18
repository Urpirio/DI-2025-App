import { Text, View, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { BackHandler } from "react-native";
import CardHomeEvents from "../../../Components/Components - ScreenHome/Cards/CardHomeEvents";
import {
  CheckMenuPerfil,
  funcionChangeStateMenuPerfil,
  StatusModalCerrarS,
} from "../../_layout";
import { StatusBar } from "expo-status-bar";
import { RefreshControl } from "react-native";
import useRefresh from "../../../hooks/hooks - Globales/useRefresh";
import { useGetEvents } from "../../../hooks/hooks - ScreenHome/useGetEvents";
import { CerrarSesion } from "../../_layout";
import { useNetInfo } from "@react-native-community/netinfo";
import SearchHome from "../../../Components/Components - ScreenHome/Searchs/Search - Home";
import NoInternet from "../../../Components/Components - Globales/NoInternet";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export let funcionRefresh;

export default function index() {
  const HaveInternet = useNetInfo();


  const {
    GetEvents,
    Loading,
    AllEvents,
    GetSalaEvent,
    DataSala,
    SelectName,
    ChangeSelected,
    ChangetoSearch,
    SearchText,
    setSearchText,
    EventosHoy,
    setEventosHoy,
  } = useGetEvents();

  //Hook de Estilos del filtro y el buscador

  const { StateRefresh, ScreenRefresHome } = useRefresh();
  StatusRefreshHome = StateRefresh;
  funcionRefresh = ScreenRefresHome;

  BackHandler.addEventListener("hardwareBackPress", () => {
    return true;
  });

  // Detecta cuando la persona no esta conectado a una red de internet.

  useFocusEffect(
    useCallback(() => {
      if (HaveInternet.isConnected) {
        GetEvents();
      } else if (HaveInternet.isWifiEnabled) {
        GetEvents();
      }
    }, [
      SearchText,
      SelectName,
      CerrarSesion,
      StateRefresh,
      StatusModalCerrarS,
      EventosHoy,
      Loading,
      HaveInternet.isWifiEnabled,
      HaveInternet.isConnected,
    ])
  );

  // Nota: Mover a hook, es lo que se encarga de ocultar los drops y modales
  const IsScrolling = () => {
    if (!CheckMenuPerfil) {
      funcionChangeStateMenuPerfil();
    }
    if (SearchText == undefined) {
      CloseBuscador();
      ChangetoSearch();
    }
  };

  if (!HaveInternet.isConnected) {
    return <NoInternet />;
  }

  if (!Loading) {
    return <View />;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#f8f9fa" }}>
      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={StateRefresh}
              onRefresh={ScreenRefresHome}
            />
          }
          ListEmptyComponent={
            <View style={{ marginVertical: 100, alignItems: "center" }}>
              <Text style={{ color: "gray" }}>No hay eventos</Text>
            </View>
          }
          ListHeaderComponentStyle={{ zIndex: 50 }}
          ListHeaderComponent={
            <SearchHome
              SearchText={SearchText}
              setSearchText={setSearchText}
              setEventosHoy={setEventosHoy}
              DataSala={DataSala}
              GetSalaEvent={GetSalaEvent}
              SelectName={SelectName}
              ChangeSelected={ChangeSelected}
            />
          }
          onTouchMove={IsScrolling}
          style={{ paddingBottom: 15, width: "100%" }}
          data={AllEvents}
          renderItem={({ item }) => {
            return (
              <CardHomeEvents
                NombreEvento={item.title}
                Localizacion={item.room === null ? "??" : item.room.location}
                FechaEvento={item.start_time.slice(0, 10)}
                HoraInicio={item.start_time.slice(12, 16)}
                HoraFinal={item.end_time.slice(12, 16)}
                IDEvents={item.id}
                DeployAboutEvent={() => {
                  setDeploAboutEvent(true);
                  console.log(item?.id);
                  setIdEvent(item?.id);
                }}
              />
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
