import { StyleSheet } from "react-native";

export const StyleLayoutEvent = StyleSheet.create({
  Header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "white",
    boxShadow: "0px 0px 1px 0px gray",
    zIndex: 10,
  },
  IconBack: {
    height: 50,
    width: 50,
    tintColor: "#007AFF",
  },
  TitlesHeader: {
    color: "#007AFF",
    fontSize: 20,
    fontWeight: "500",
  },
  ImgProfile: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
