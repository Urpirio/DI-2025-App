import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { StyleModalIngresarCodigo } from "../../../style/Style - ScreenCheckIn/StyleModalIngresarCodigo";

export default function Modal_IngresarCodigo({
  StatusModal,
  FunctionCloseModal,
  ValidarQR,
}) {
    
  const [TextCd, setTextCd] = useState("");

  return (
    <Modal visible={StatusModal} transparent={true}>
      <View>
        <Pressable
          style={StyleModalIngresarCodigo.PressableForClose}
          onPress={FunctionCloseModal}
        ></Pressable>
        <View style={StyleModalIngresarCodigo.BodyContainer}>
          <View style={StyleModalIngresarCodigo.MainContainer}>
            <View style={StyleModalIngresarCodigo.ContainerIcon}>
              <View style={StyleModalIngresarCodigo.IconIngresar}>
                <Text style={{ fontSize: 50 }}>🔍</Text>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                Ingresa tu código de verificación
              </Text>
            </View>

            <TextInput
              style={StyleModalIngresarCodigo.InputIngresar}
              placeholder="Codigo"
              placeholderTextColor={"#ced4da"}
              value={TextCd}
              onChangeText={setTextCd}
              maxLength={6}
            />
            <TouchableOpacity
              style={StyleModalIngresarCodigo.BtnValidar}
              onPress={() => ValidarQR({ TextCode: TextCd })}
            >
              <Text style={StyleModalIngresarCodigo.TextBtnValidar}>
                Validar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
