import { Modal, TouchableOpacity, View, Text } from "react-native";
import { StyleModalConnect } from "../../../style/Style - ScreenLogin/StyleModalConnect";
import { BlurView } from "expo-blur";

export default function ModalConnectRed({ StatusModal, OnPress, OnCancel }) {
  return (
    <Modal visible={StatusModal} transparent={true}>
      <View style={StyleModalConnect.bodyContainer}>
        <BlurView
          intensity={5}
          style={{
            flex: 1,
            backgroundColor: "gray",
            width: "100%",
            // opacity: 0.3,
          }}
        ></BlurView>
        <View style={StyleModalConnect.MainConteiner}>
          <View style={StyleModalConnect.MainConteiner}>
            <View style={StyleModalConnect.TextWnn}>
              <Text style={StyleModalConnect.TextTitleWnn}>
                Conexión requerida
              </Text>
              <Text style={StyleModalConnect.TextDescription}>
                Para continuar, necesitas estar conectado a una red. Por favor,
                verifica tu conexión y vuelve a intentarlo.
              </Text>
            </View>
            <View style={StyleModalConnect.containerBtn}>
              <TouchableOpacity
                style={StyleModalConnect.BtnReintentar}
                onPress={OnPress}
              >
                <Text style={{ color: "white" }}>Reintentar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={StyleModalConnect.BtnCancelar}
                onPress={OnCancel}
              >
                <Text style={{ color: "white" }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
