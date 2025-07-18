import { StyleSheet } from "react-native";

// Esto pertenece al modalAboutEvent
export const StyleModalAboutEvents = StyleSheet.create({
  PressableForCloseModal: {
    height: "100%",
    width: "100%",
  },
  BodyModal: {
    height: "80%",
    width: "100%",
    padding: 5,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#ced4daa0",
    borderWidth: 1,
  },
  ImageEvento: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  ContainerContador_Title: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  ContainerContador: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    borderRadius: 20,
  },
  SubContainerContador: {
    borderWidth: 1,
    borderColor: "#e9ecef48",
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#e9ecef48",
  },
  IconContador: {
    height: 20,
    width: 20,
    objectFit: "contain",
    tintColor: "white",
  },
  TextContador: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  ContainerTitle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  TextTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  ContainerFecha_Salon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  ContainerLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  IconLocation: {
    height: 15,
    width: 15,
    objectFit: "contain",
    tintColor: "#b3b3b3",
  },
  ContainerFecha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  IconCalendar: {
    height: 15,
    width: 15,
    objectFit: "contain",
    tintColor: "#b3b3b3",
  },
  ContainerHora: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  IconHora: {
    height: 15,
    width: 15,
    objectFit: "contain",
    tintColor: "#b3b3b3",
  },
});
