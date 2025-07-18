import { StyleSheet } from "react-native";

export const StyleModalCerrarSesion = StyleSheet.create({
  PressableCloseModal: {
    width: "100%",
    height: "100%",
  },
  BodyContainer: {
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
  },
  ContaienerPerfil: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  ImagePerfil: {
    height: 200,
    width: 200,
    objectFit: "cover",
    borderRadius: 100,
  },
  TextName: {
    fontWeight: "300",
    fontSize: 20,
    color: "#033E8A",
  },
  BtnCerrarSesion: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "#dee2e6",
  },
  IconCerrarSesion: {
    height: 20,
    width: 20,
    objectFit: "contain",
    tintColor: "red",
  },
  TextCerrarSesion: {
    fontSize: 18,
    color: "red",
    fontWeight: "300",
  },
});
