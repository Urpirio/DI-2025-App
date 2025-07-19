import { StyleSheet } from "react-native";

const ColorBorder = "#ced4da";
export const StyleScreenEventos = StyleSheet.create({
  BodyScreen: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "white",
    paddingBottom: 5,
  },
  NoElementoslista: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  TextNoElementos: {
    color: "gray",
  },
  ContenedorFiltros: {
    padding: 5,
    gap: 5,
    width: "100%",
  },
  ContenedorBuscador: {
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
  IconoBuscar: {
    height: 25,
    width: 25,
    objectFit: "contain",
    tintColor: "#919192",
  },
  InputBuscador: {
    height: 50,
    fontSize: 16,
    width: "80%",
  },

  IconDropDown: {
    height: 20,
    width: 20,
    objectFit: "contain",
  },

  buttonOpcionesDropDown: {
    width: "100%",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: ColorBorder,
  },
  buttonOpcionesDropDownUltimo: {
    width: "100%",
    padding: 5,
  },
  ContenedorOpcionesDropDownBuscador_None: {
    display: "none",
  },
  CardListado: {
    width: "100%",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ced4da",
    gap: 10,
  },
  BtnSeleccionadoFiltros: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: "#007AFF",
    width: "32.25%",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnNoSeleccionadoFiltros: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
    width: "32.25%",
    justifyContent: "center",
    alignItems: "center",
  },
  TextBtnSeleccionadoFiltros: {
    fontSize: 14,
    color: "white",
  },
  TextBtnNoSeleccionadoFiltros: {
    fontSize: 14,
    color: "gray",
  },
  ContainerFiltros: {
    borderWidth: 1,
    borderColor: "#dee2e6",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  BtnQr: {
    borderWidth: 1,
    borderRadius: "100%",
    width: 65,
    height: 65,
    position: "absolute",
    backgroundColor: "#007AFF",
    marginBottom: 20,
    marginRight: 20,
    borderColor: "#007AFF",
    padding: 20,
  },
  IconQr: {
    height: "100%",
    width: "100%",
    tintColor: "white",
    objectFit: "contain",
  },
});
