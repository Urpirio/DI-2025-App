import { router } from "expo-router";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { StyleModalCerrarSesion } from "../../../style/Style - ScreenParticipantes/StyleModalCerrarSesion";

// Esta es el modal que se despliega cuando se quiere cerrar sesion.
export default function ModalCerrarSesion() {
  const LocalData = useLocalSearchParams();
  const ImageP = LocalData?.profile_picture
    ? {
        uri: `https://directus-prueba.dominicanainnova.gob.do/assets/${LocalData?.profile_picture}`,
      }
    : {
        uri: "https://i.pinimg.com/736x/1a/a8/d7/1aa8d75f3498784bcd2617b3e3d1e0c4.jpg",
      };

  return (
    <SafeAreaProvider>
      <Pressable
        onPress={() => router.back()}
        style={StyleModalCerrarSesion.PressableCloseModal}
      ></Pressable>
      <View style={StyleModalCerrarSesion.BodyContainer}>
        <View style={StyleModalCerrarSesion.ContaienerPerfil}>
          <Image style={StyleModalCerrarSesion.ImagePerfil} source={ImageP} />
          <Text style={StyleModalCerrarSesion.TextName}>
            {LocalData?.FirstName} {LocalData?.LastName}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Staff</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.back();
            router.back();
          }}
          style={StyleModalCerrarSesion.BtnCerrarSesion}
        >
          <Image
            style={StyleModalCerrarSesion.IconCerrarSesion}
            source={require("../../../assets/IconHome/IconCerrarSesion.png")}
          />
          <Text style={StyleModalCerrarSesion.TextCerrarSesion}>
            Cerrar sesion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
