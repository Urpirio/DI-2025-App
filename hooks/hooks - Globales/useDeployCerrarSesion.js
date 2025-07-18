import { useState } from "react";

const useDeployCerrarSesion = () => {
  const [CSesion, setCSesion] = useState(false);
  const [cerrarSesion, setcerrarSesion] = useState(true);

  const Deploy = () => {
    setCSesion(!CSesion);
  };

  const CS = () => {
    setcerrarSesion(false);
  };

  return {
    DeployModalCerrarS: Deploy,
    StateCerrarS: CSesion,
    cerrarSesion: cerrarSesion,
    CS: CS,
  };
};
export default useDeployCerrarSesion;
