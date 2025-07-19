import { router } from "expo-router";
import { StyleCardButton } from "../../style/Style - ScreenParticipantes/StyleCardButton";
import { useSendPart } from "./useSendPart";
import { useSendPartG } from "./useSendPartG";
import { View, TouchableOpacity, Text } from "react-native";
import { ActivityIndicator } from "react-native";

export const useCardButton = () => {
  const { ConfirmarAsistencia,loading } = useSendPart();
  const { AsistenciaStaff,LoadignG } = useSendPartG();

  const Button = ({ Registrado, item, setRefreshbtnCard, RefreshbtnCard }) => {
    if (Registrado === true) {
      return (
        <View style={StyleCardButton.ContainerBtns}>
          <TouchableOpacity disabled style={StyleCardButton.BtnRegistrado}>
            <Text style={{color:'#008000',fontWeight:'300'}}>Registrado</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (Registrado === false) {
      return (
        <View style={StyleCardButton.ContainerBtns}>
          <TouchableOpacity
            onLongPress={() => {
              setRefreshbtnCard(!RefreshbtnCard);
              ConfirmarAsistencia({ userEventId: item.userEventId });
            }}
            style={StyleCardButton.BtnRegistrar}
          >
            {loading ? <ActivityIndicator size={'small'} color={'white'}/> : <Text style={{ color: "white" }}>Registrar</Text>}
          </TouchableOpacity>
        </View>
      );
    } else if (Registrado === null) {
      return (
        <View style={StyleCardButton.ContainerBtns}>
          <TouchableOpacity
            onLongPress={() => {
              setRefreshbtnCard(!RefreshbtnCard);
              AsistenciaStaff({ userID: item?.id });
            }}
            style={StyleCardButton.BtnRegistrarGreen}>
            {LoadignG ? <ActivityIndicator size={'small'} color={'white'}/> : <Text style={{ color: "white" }}>Registrar</Text>}
          </TouchableOpacity>
        </View>
      );
    }
  };

  return {
    Button,
  };
};
