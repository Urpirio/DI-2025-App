import { StyleSheet } from "react-native";

export const StyleTopBar = StyleSheet.create({
  BodyContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 5,
  },
  containerBtns: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 10,
    paddingRight: 10,
  },
  IconBack: {
    tintColor: "#007AFF",
    height:50,
    width:50
  },
  btnInformacion: {
    borderRadius: 10,
    width: 40,
    height: 40,
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Iconinformation: {
    height: "60%",
    width: "60%",
    tintColor: "white",
    objectFit: "contain",
  },
  TextNombreCompleto: {
    fontSize: 20,
    fontWeight: "500",
    color: "#003876",
  },
});
