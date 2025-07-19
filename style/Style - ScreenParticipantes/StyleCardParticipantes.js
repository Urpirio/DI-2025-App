import { StyleSheet } from "react-native";

export const StyleCardParticipantes = StyleSheet.create({
  ImagePerfil: {
    height: 140,
    width: "100%",
    objectFit: "corver",
    borderRadius: 5,
  },
  MainContainer: {
    width: "59%",
    gap: 5,
    justifyContent: "space-between",
  },
  TextFirstName: {
    fontWeight: "300",
    fontSize: 20,
    color: "#023e7d",
  },
  ContainerId: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  IconProfile: {
    height: 15,
    width: 15,
    objectFit: "contain",
    tintColor: "#6B6B6B",
  },
  TextId: {
    fontWeight: "300",
    fontSize: 16,
    color: "#09090999",
  },
  ContainerEmail: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  IconEmail: {
    height: 15,
    width: 15,
    objectFit: "contain",
    tintColor: "#6B6B6B",
  },
  SubContainerTextEmail: {
    borderLeftWidth: 1,
    height: "100%",
  },
  TextEmail: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
  },
});
