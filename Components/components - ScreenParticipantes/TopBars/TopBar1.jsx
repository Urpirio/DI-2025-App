import { View, TouchableOpacity, Image, Text } from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { StyleTopBar } from "../../../style/Style - ScreenParticipantes/StyleTopBar";

export default function TopBar1() {

  const LocalData = useLocalSearchParams();

  return (
    <View style={StyleTopBar.BodyContainer}>
      <View style={StyleTopBar.containerBtns}>
        <TouchableOpacity  onPress={() => router.back()}>
          <Image
            style={StyleTopBar.IconBack}
            source={require("../../../assets/IconNavegation/arrow-left-stroke.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "Screens/Modals/ModalsAboutEvents",
              params: {
                TokenAccess: LocalData.TokenAccess,
                IDEvents: LocalData.IDEvents,
              },
            })
          }
          style={StyleTopBar.btnInformacion}
        >
          <Image
            style={StyleTopBar.Iconinformation}
            source={require("../../../assets/IconParticipantes/information-2-line.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={StyleTopBar.TextNombreCompleto}>
          {LocalData.NombreEvento}
        </Text>
      </View>
    </View>
  );
}
