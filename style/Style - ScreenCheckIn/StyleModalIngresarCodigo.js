import { StyleSheet } from "react-native";

export const StyleModalIngresarCodigo = StyleSheet.create({
  PressableForClose: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    opacity: 0.1,
  },
  BodyContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  MainContainer: {
    borderWidth: 1,
    borderColor: "#ced4da",
    height: "50%",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0px 0px 1px 0px gray",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    minHeight: 300,
  },
  ContainerIcon: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  IconIngresar: {
    height: 130,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#007bff2e",
  },
  InputIngresar: {
    borderWidth: 1,
    width: "100%",
    fontSize: 18,
    borderRadius: 10,
    borderColor: "#007bff2e",
  },
  BtnValidar: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#007AFF",
  },
  TextBtnValidar: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
});
