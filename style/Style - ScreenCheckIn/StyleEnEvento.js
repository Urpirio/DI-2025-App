import { StyleSheet } from "react-native";

export const StyleEnEvento = StyleSheet.create({
  Blur: {
    height: "100%",
    // filter:'blur(5px)',
    width: "100%",
    backgroundColor: "white",
    opacity: 0.1,
  },
  ImgCheck: {
    height: 100,
    width: 100,
    objectFit: "contain",
  },
  BodyContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: 10,
  },
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 20,
    width: "100%",
  },
  BtnContainer: {
    gap: 5,
    width: "100%",
  },
  BtnVolver: {
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#6c757d",
    width: "100%",
  },
  TextBtnVolver: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
});
