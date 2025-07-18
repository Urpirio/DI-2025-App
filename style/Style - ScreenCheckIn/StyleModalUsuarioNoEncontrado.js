import { StyleSheet } from "react-native";

export const StyleModalUsuarioNoEncontrado = StyleSheet.create({
  BodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  PressableCloseModal: {
    flex: 1,
    filter: "blur(50px)",
    backgroundColor: "black",
    width: "100%",
    opacity: 0.2,
  },
  MainContainer: {
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 20,
    width: "100%",
    position: "absolute",
  },
  IconNoEncontrado: {
    height: 100,
    width: 100,
    objectFit: "contain",
    tintColor: "red",
  },
  BtnIngresarCodigo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#007AFF",
  },
  BtnVolver: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#6c757d",
  },
});
