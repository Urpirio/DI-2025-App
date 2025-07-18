import { router } from "expo-router";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

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
        style={{
          //   backgroundColor: "gray",
          //   opacity: 0.1,
          width: "100%",
          height: "100%",
        }}
      ></Pressable>
      <View
        style={{
          width: "80%",
          height: "100%",
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          position: "absolute",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 20,
          boxShadow: "0px 0px 100px 1px #bcbcbca1",
          borderRightWidth: 1,
          borderRightColor: "#dfdfdfff",
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 20 }}
        >
          <Image
            style={{
              height: 200,
              width: 200,
              objectFit: "cover",
              borderRadius: 100,
            }}
            source={ImageP}
          />
          <Text
            style={{
              fontWeight: "300",
              fontSize: 20,
              color: "#033E8A",
              textTransform: "",
            }}
          >
            {LocalData?.FirstName} {LocalData?.LastName}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Staft</Text>
        </View>
        <TouchableOpacity
          onPress={()=>{router.back();router.back()}}
          style={{
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            borderColor: "#dee2e6",
          }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
              objectFit: "contain",
              tintColor: "red",
            }}
            source={require("../../../assets/IconHome/IconCerrarSesion.png")}
          />
          <Text style={{ fontSize: 18, color: "red", fontWeight: "300" }}>
            Cerrar sesion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
