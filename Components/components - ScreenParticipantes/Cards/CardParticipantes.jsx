import { View, Image, Text } from "react-native";
import { GlobalApis } from "../../../Apis/GlobalApis";
import { StyleScreenEventos } from "../../../style/Style - ScreenParticipantes/StyleScreen - Evento";
import { useCardButton } from "../../../hooks/hooks - ScreenParticipantes/useCardButton";
import { StyleCardParticipantes } from "../../../style/Style - ScreenParticipantes/StyleCardParticipantes";

export default function CardParticipantes({ item,setRefreshbtnCard,RefreshbtnCard }) {

  const { Button } = useCardButton();

  const ImagePerfil = item?.profile_picture
    ? { uri: GlobalApis.ApiImg + item?.profile_picture }
    : {
        uri: "https://i.pinimg.com/736x/1a/a8/d7/1aa8d75f3498784bcd2617b3e3d1e0c4.jpg",
      };

  return (
    <View intensity={210} style={StyleScreenEventos.CardListado}>
      <View style={{ width: "38%" }}>
        <Image
          style={StyleCardParticipantes.ImagePerfil}
          source={ImagePerfil}
        />
      </View>
      <View style={StyleCardParticipantes.MainContainer}>
        <View style={{ gap: 5 }}>
          <Text style={StyleCardParticipantes.TextFirstName}>
            {item?.first_name?.split(" ")[0]} {item?.last_name?.split(" ")[0]}
          </Text>
          <View style={StyleCardParticipantes.ContainerId}>
            <Image
              style={StyleCardParticipantes.IconProfile}
              source={require("../../../assets/IconParticipantes/IconProfile.png")}
            />
            <View style={{ borderLeftWidth: 1, height: "100%" }} />
            <Text style={StyleCardParticipantes.TextId}>
              {item?.id.slice(30, 36)}
            </Text>
          </View>

          <View style={StyleCardParticipantes.ContainerEmail}>
            <Image
              style={StyleCardParticipantes.IconEmail}
              source={require("../../../assets/IconParticipantes/IconEmail.png")}
            />
            <View style={StyleCardParticipantes.ContainerEmail} />
            <Text style={StyleCardParticipantes.TextEmail}>{item?.email}</Text>
          </View>
        </View>

        <Button Registrado={item?.Registrado} item={item} RefreshbtnCard={RefreshbtnCard} setRefreshbtnCard={setRefreshbtnCard} />
      </View>
    </View>
  );
}
