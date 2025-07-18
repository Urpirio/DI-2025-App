import { useState } from "react";
import { StyleSheet } from "react-native";

const useDeployPerfil = () => {
  const [StyleMenuProfile, SetStyleMenuProfile] = useState(
    StylesLayoutHome.MenuProfileNotShow
  );
  const [StatusMenuProfile, setStatusMenuProfile] = useState(true);

  const Deploy = () => {
    if (StatusMenuProfile) {
      SetStyleMenuProfile(StylesLayoutHome.MenuProfileShow);
      setStatusMenuProfile(!StatusMenuProfile);
    } else {
      SetStyleMenuProfile(StylesLayoutHome.MenuProfileNotShow);
      setStatusMenuProfile(!StatusMenuProfile);
    }
  };

  return {
    StyleMenuProfile: StyleMenuProfile,
    StatusMenuProfile: StatusMenuProfile,
    DeployMenuPerfil: Deploy,
  };
};
export default useDeployPerfil;

const StylesLayoutHome = StyleSheet.create({
  MenuProfileShow: {
    position: "absolute",
    width: "100%",
    zIndex: 20,
  },
  MenuProfileNotShow: {
    display: "none",
  },
});
