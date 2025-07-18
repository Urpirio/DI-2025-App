import { useState } from "react";
import { StyleHome } from "../../style/Style - ScreenHome/StyleHome";
import { StyleSwicthHome } from "../../style/Style - ScreenHome/StyleSwicthHome";

export const useHome = () => {
  const [RotateIconFilter, setRotateIconFilter] = useState(true);
  const [IconBtnFilter, setIconBtnFilter] = useState({
    Icon: require("../../assets/IconHome/ArrowDerecha.png"),
  });
  const [StyleFiltros, setStyleFiltros] = useState(
    StyleHome.ContainerBtnFiltrosNotShow
  );
  const [DisplayTexInput, setDisplayTexInput] = useState("none");
  const [IconSearch, setIconSearch] = useState(
    require("../../assets/IconHome/search-big.png")
  );

  const DeployFilter = () => {
    if (RotateIconFilter === true) {
      setIconBtnFilter({
        Icon: require("../../assets/IconHome/ArrowAbajo.png"),
      });
      setRotateIconFilter(false);
      setStyleFiltros(StyleHome.ContainerBtnFiltrosShow);
    } else if (RotateIconFilter === false) {
      setIconBtnFilter({
        Icon: require("../../assets/IconHome/ArrowDerecha.png"),
      });
      setRotateIconFilter(true);
      setStyleFiltros(StyleHome.ContainerBtnFiltrosNotShow);
    }
  };

  // Funciones del estilo de Swicth
  const [StyleBtnTodos, setBtnTodos] = useState({
    Btn: StyleSwicthHome.BtnTodosSelected,
    Text: StyleSwicthHome.textBtnTodosSelected,
  });
  const [StyleBtnHoy, setStyleBtnHoy] = useState({
    Btn: StyleSwicthHome.BtnHoy,
    Text: StyleSwicthHome.textBtnHoy,
  });
  const [StatusStyle, setStatusStyle] = useState(true);

  const SwitchStyle = ({ StatusStyle }) => {
    if (StatusStyle) {
      setBtnTodos({
        Btn: StyleSwicthHome.BtnTodos,
        Text: StyleSwicthHome.textBtnTodos,
      });
      setStyleBtnHoy({
        Btn: StyleSwicthHome.BtnHoySelected,
        Text: StyleSwicthHome.textBtnHoySelected,
      });
      setStatusStyle(false);
    } else {
      setBtnTodos({
        Btn: StyleSwicthHome.BtnTodosSelected,
        Text: StyleSwicthHome.textBtnHoySelected,
      });
      setStyleBtnHoy({
        Btn: StyleSwicthHome.BtnHoy,
        Text: StyleSwicthHome.textBtnHoy,
      });
      setStatusStyle(true);
    }
  };

  return {
    DeployFilter,
    IconBtnFilter,
    DisplayTexInput,
    IconSearch,
    StyleFiltros,
    RotateIconFilter,
    SwitchStyle,
    StyleBtnHoy,
    StyleBtnTodos,
    StatusStyle
  };
};
