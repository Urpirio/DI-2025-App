import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { StyleModalUsuarioNoEncontrado } from "../../../style/Style - ScreenCheckIn/StyleModalUsuarioNoEncontrado";

export default function ModalUsuarioNoEncontrado({
  StatusModal,
  CloseModal,
  OpenIngresarCodigo,
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
      <View style={StyleModalUsuarioNoEncontrado.BodyContainer}>
        <TouchableOpacity
          onPress={() => CloseModal()}
          style={StyleModalUsuarioNoEncontrado.PressableCloseModal}
        ></TouchableOpacity>
        <View style={StyleModalUsuarioNoEncontrado.MainContainer}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={StyleModalUsuarioNoEncontrado.IconNoEncontrado}
              source={require("../../../assets/IconCheckIn/x-circle.png")}
            />

            <Text style={{ fontWeight: "400", fontSize: 18 }}>
              Usuario no encontrado
            </Text>
          </View>
          <View style={{ width: "100%", gap: 10 }}>
            <TouchableOpacity
              style={StyleModalUsuarioNoEncontrado.BtnIngresarCodigo}
              onPress={OpenIngresarCodigo}
            >
              <Text style={{ color: "white", fontWeight: "300" }}>
                Ingresar Codigo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={StyleModalUsuarioNoEncontrado.BtnVolver}
              onPress={() => {
                router.back();
              }}
            >
              <Text style={{ color: "white", fontWeight: "300" }}>
                Volver a evento
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
