import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { StyleHome } from "../../../style/Style - ScreenHome/StyleHome";
import { router, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { BlurView } from "expo-blur";
import { StyleCardhome } from "../../../style/Style - ScreenHome/StyleCardHome";

// Esta es la carta que se renderiza en el Home por eso su respectivo nombre.
export default function CardHomeEvents({
  Localizacion,
  HoraInicio,
  HoraFinal,
  NombreEvento,
  FechaEvento,
  IDEvents,
}) {
  const Router = useRouter();
  const LocalData = useLocalSearchParams();
  const Nombre_Evento = () => {
    return (
      <Text style={{ fontSize: 18, fontWeight: "600", color: "#003876" }}>
        {NombreEvento ? NombreEvento : "No disponible"}
      </Text>
    );
  };

  return (
    <View style={StyleCardhome.CardEvent}>
      <TouchableOpacity
        style={StyleCardhome.conatainerBackImage}
        onPress={() =>
          router.navigate({
            pathname: "Screens/ScreenParticipantes",
            params: {
              NombreEvento: NombreEvento,
              TokenAccess: LocalData.TokenAccess,
              profile_picture: LocalData.profile_picture,
              FirstName: LocalData.FirstName,
              LastName: LocalData.LastName,
              IDEvents: IDEvents,
              StaffId: LocalData.StaffId,
            },
          })
        }
        onLongPress={() =>
          router.navigate({
            pathname: "Screens/Modals/ModalsAboutEvents",
            params: {
              TokenAccess: LocalData.TokenAccess,
              IDEvents: IDEvents,
            },
          })
        }
      >
        <Image
          style={StyleCardhome.BackImage}
          source={{
            uri: "https://i.pinimg.com/1200x/58/b6/d8/58b6d806c99691c9f26f86ee623a9b19.jpg",
          }}
        />
      </TouchableOpacity>

      <View style={StyleCardhome.CardEventbody}>
        <View style={{ gap: 5 }}>
          <View style={StyleCardhome.ContainerLocation}>
            <Image
              style={StyleCardhome.IconLocation}
              source={require("../../../assets/IconHome/Location.png")}
            />
            <Text style={StyleCardhome.TextLocation}>
              {Localizacion ? Localizacion : "No disponible"}
            </Text>
          </View>

          <Nombre_Evento />

          <View style={StyleCardhome.ContainerDia_Hora}>
            <View style={StyleCardhome.ContainerDia}>
              <View style={StyleCardhome.SubContainerDia}>
                <Image
                  style={StyleCardhome.IconDia}
                  source={require("../../../assets/IconHome/calendar-week.png")}
                />
                <Text style={StyleCardhome.TextDia}>
                  {FechaEvento ? FechaEvento : "No disponible"}
                </Text>
              </View>
              <Text style={StyleCardhome.GuionDia_Hora}>-</Text>
              <View style={StyleCardhome.ContainerHora}>
                <Image
                  style={StyleCardhome.IconHora}
                  source={require("../../../assets/IconHome/clock-4.png")}
                />
                <Text style={StyleCardhome.TextHora}>
                  {HoraInicio ? HoraInicio : "No disponible"}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={StyleCardhome.BtnInCardEvent}
              onPress={() => {
                Router.navigate({
                  pathname: "Screens/ScreenParticipantes",
                  params: {
                    NombreEvento: NombreEvento,
                    TokenAccess: LocalData.TokenAccess,
                    profile_picture: LocalData.profile_picture,
                    FirstName: LocalData.FirstName,
                    LastName: LocalData.LastName,
                    IDEvents: IDEvents,
                    StaffId: LocalData.StaffId,
                  },
                });
              }}
            >
              <Text style={{ color: "white" }}>Ver evento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
