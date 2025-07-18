import { StyleSheet } from "react-native";

export const StyleSwicthHome = StyleSheet.create({
  constainerBtn: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "#adb5bd",
    justifyContent: "space-between",
    gap: 5,
  },
  BtnHoy: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  BtnHoySelected: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#007AFF",
  },
  textBtnHoy: {
    color: "#adb5bd",
    fontWeight: "300",
  },
  textBtnHoySelected: {
    color: "white",
    fontWeight: "300",
  },
  BtnTodos: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
  },
  BtnTodosSelected: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#007AFF",
  },
  textBtnTodos: {
    color: "#adb5bd",
    fontWeight: "300",
  },
  textBtnTodosSelected: {
    color: "white",
    fontWeight: "300",
  },
});
