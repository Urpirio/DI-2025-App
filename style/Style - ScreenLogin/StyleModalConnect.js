import { StyleSheet } from "react-native";

export const StyleModalConnect = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  MainConteiner: {
    paddingHorizontal: 30,
    position: "absolute",
  },
  InMainConteiner: {
    borderWidth: 1,
    borderColor: "#ced4da",
    padding: 10,
    borderRadius: 10,
    gap: 20,
    backgroundColor: "white",
  },
  TextWnn: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  TextTitleWnn: {
    fontSize: 22,
    color: "#ff9900ff",
    fontWeight: "400",
  },
  TextDescription: {
    textAlign: "center",
    color: "gray",
    fontWeight: "300",
  },
  containerBtn: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  BtnReintentar: {
    borderRadius: 10,
    height: 30,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
  },
  BtnCancelar: {
    borderRadius: 10,
    height: 30,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d00000c4",
  },
});
