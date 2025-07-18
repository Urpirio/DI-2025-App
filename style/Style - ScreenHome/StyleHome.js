import { StyleSheet } from "react-native";

export const StyleHome = StyleSheet.create({
  Header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    flexDirection: "row",

    zIndex: 10,
  },
  IconBack: {
    height: 50,
    width: 50,
    tintColor: "#007AFF",
  },
  TitlesHeader: {
    fontSize: 26,
    fontWeight: "600",
    color: "#007AFF",
  },
  ImgProfile: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  ContainerSearch: {
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    borderColor: "#ced4da",
    width: `100%`,
    marginBottom: 10,
    backgroundColor: "#E4E5E7",
    justifyContent: "center",
    alignItems: "center",
  },
  IconSearch: {
    height: 25,
    width: 25,
    objectFit: "contain",
    tintColor: "#919192",
  },
  InputSearch: {
    fontSize: 16,
    width: `90%`,
  },
  ConatinerFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  SubContainerFilter: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ContainerNotFilter: {
    display: "none",
  },
  ContainerBtnFiltrosShow: {
    position: "absolute",
    marginTop: 240,
    borderColor: "#ced4da",
    width: 150,
    height: 200,
    backgroundColor: "#ffffff",
    padding: 5,
    gap: 5,
    borderRadius: 5,
    borderWidth: 1,
    zIndex: 30,
  },
  ContainerBtnFiltrosNotShow: {
    display: "none",
  },
  BtnSelectFilter: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#ced4da",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextBtnSelectFilter: {
    color: "#007AFF",
    fontWeight: "600",
  },
  BtnFilterDeploy: {
    borderColor: "#ced4da",
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 0px 1px 0px gray",
    backgroundColor: "white",
  },
  IconBtnFilter: {
    height: 30,
    width: 30,
  },
});
