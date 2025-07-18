import { Image, Modal, TouchableOpacity, View, Text } from "react-native";
import { StyleEnEvento } from "../../../style/Style - ScreenCheckIn/StyleEnEvento";

export default function ModalUsuarioEnEvento({ StatusModal, FuncionCerrar }) {
  return (
    <Modal transparent={true} visible={StatusModal}>
      <View>
        <View style={StyleEnEvento.Blur}></View>
        <View style={StyleEnEvento.BodyContainer}>
          <View style={StyleEnEvento.MainContainer}>
            <Image
              style={StyleEnEvento.ImgCheck}
              source={require("../../../assets/IconCheckIn/Location.png")}
            />
            <View>
              <Text
                style={{ fontSize: 20, textAlign: "center", fontWeight: "300" }}
              >
                Este usuario ya se encuentra registrado en el evento.
              </Text>
            </View>
            <View style={StyleEnEvento.BtnContainer}>
              <TouchableOpacity
                style={StyleEnEvento.BtnVolver}
                onPress={FuncionCerrar}
              >
                <Text style={StyleEnEvento.TextBtnVolver}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
