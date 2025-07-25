import { StyleSheet } from "react-native";

export const StyleModalNotInEvent = StyleSheet.create({
  BodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Blur: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    opacity: 0.1,
  },
  MainContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    position: "absolute",
  },
  PictureImg: {
    height: 250,
    width: 250,
    objectFit: "cover",
    borderRadius: 10,
  },
  ContainerText: {
    padding: 10,
  },
  TextNameUser: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "#033E8A",
  },
  TextId: {
    textAlign: "center",
    color: "gray",
  },
  btnConfirmarAsistencia: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#008000",
  },
  TextbtnConfirmarAsistencia: {
    color: "white",
    fontWeight: "300",
  },
  BtnCancelar: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#d00000c1",
  },
  TextBtnCancelar: {
    color: "white",
    fontWeight: "300",
  },
});
