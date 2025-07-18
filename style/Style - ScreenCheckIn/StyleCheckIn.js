import { StyleSheet } from "react-native";

export const StyleCheckIn = StyleSheet.create({
  containerBtns: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
    gap: 10,
  },
  BtnIngresarCodigo: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    backgroundColor: "#007AFF",
  },
  TextBtnIngresarCodigo: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  BtnVerparticipantes: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#343a40",
  },
  TextBtnVerparticipantes: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  BtnLinternaON: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#343a40",
    opacity: 0.4,
  },
  BtnLinternaOFF: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#343a40",
  },
  IconLinterna: {
    height: 20,
    width: 20,
    objectFit: "cover",
    tintColor: "#ffc300",
  },
  ContainerPermissionCamara: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 50,
    paddingTop: 50,
  },
  ContainerTextPermission: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  MainTextPermission: {
    textAlign: "center",
    fontSize: 20,
    color: "#023e8a",
    fontWeight: "600",
  },
  SubTextPermission: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
  },
  ContainerBtnPermission: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  BtnNotPermission: {
    width: "50%",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d00000",
  },
  BtnPermission: {
    width: "50%",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#023e8a",
  },
});
