import { router } from "expo-router";
import { Pressable, Text, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { BlurView } from "expo-blur";
import { useModalAboutEvents } from "../../../hooks/hooks - ScreenParticipantes/useModalAboutEven0t";
import { StyleModalAboutEvents } from "../../../style/Style - ScreenParticipantes/StyleModalAboutEvents";

// Crear un documento con los estilos en otro lado
export default function ModalsAboutEvents() {
  const LocalData = useLocalSearchParams();

  const { GetInformationAbout, InformacionEvento, Inscritos, Registrados } =
    useModalAboutEvents();

  useEffect(() => {
    GetInformationAbout({
      IDEvents: LocalData.IDEvents,
      TokenAccess: LocalData.TokenAccess,
    });
  }, []);

  return (
    <SafeAreaProvider style={{ flex: 1, justifyContent: "flex-end" }}>
      <Pressable
        onPress={() => router.back()}
        style={StyleModalAboutEvents.PressableForCloseModal}
      ></Pressable>
      <View style={StyleModalAboutEvents.BodyModal}>
        {/* ESTE ES EL CONTENEDOR QUE TIENE LA IMAGEN, TITULO Y CONTADOR DEL EVENTO */}
        <View style={{ justifyContent: "space-between" }}>
          <Image
            style={StyleModalAboutEvents.ImageEvento}
            source={{
              uri: "https://i.pinimg.com/1200x/58/b6/d8/58b6d806c99691c9f26f86ee623a9b19.jpg",
            }}
          />
          <View style={StyleModalAboutEvents.ContainerContador_Title}>
            <View style={StyleModalAboutEvents.ContainerContador}>
              <BlurView
                intensity={1}
                style={StyleModalAboutEvents.SubContainerContador}
              >
                <Image
                  style={StyleModalAboutEvents.IconContador}
                  source={require("../../../assets/IconParticipantes/user-group.png")}
                />
                <Text style={StyleModalAboutEvents.TextContador}>
                  {Registrados?.length}/{Inscritos?.length}
                </Text>
              </BlurView>
            </View>
            <View style={StyleModalAboutEvents.ContainerTitle}>
              <Text style={StyleModalAboutEvents.TextTitle}>
                {InformacionEvento?.title}
              </Text>
            </View>
          </View>
        </View>

        {/*  ESTE ES EL CONTENEDOR QUE POSE LA HORA, FECHA Y SALON EN EL CUAL ESTARA EL EVENTO*/}
        <View style={StyleModalAboutEvents.ContainerFecha_Salon}>
          <View style={StyleModalAboutEvents.ContainerLocation}>
            <Image
              style={StyleModalAboutEvents.IconLocation}
              source={require("../../../assets/IconParticipantes/Location.png")}
            />
            <Text style={{ color: "#b3b3b3" }}>
              {InformacionEvento?.room
                ? InformacionEvento.room.location
                : "No disponible"}
            </Text>
          </View>
          <View style={StyleModalAboutEvents.ContainerFecha}>
            <Image
              style={StyleModalAboutEvents.IconCalendar}
              source={require("../../../assets/IconParticipantes/calendar-week.png")}
            />
            <Text style={{ color: "#b3b3b3" }}>
              {InformacionEvento?.start_time?.slice(0, 10)}
            </Text>
          </View>
          <View style={StyleModalAboutEvents.ContainerHora}>
            <Image
              style={StyleModalAboutEvents.IconHora}
              source={require("../../../assets/IconParticipantes/clock-4.png")}
            />
            <Text style={{ color: "#b3b3b3" }}>
              {InformacionEvento?.start_time?.slice(11, 16)} -{" "}
              {InformacionEvento?.end_time?.slice(11, 16)}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: "gray" }}>
            {InformacionEvento?.description}
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
