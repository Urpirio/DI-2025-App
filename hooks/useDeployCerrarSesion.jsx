import { useState } from "react";

const useDeployCerrarSesion = () =>{

    const [CerrarSesion,setCerrarSesion] = useState(false);

    const Deploy = () =>{
        setCerrarSesion(!CerrarSesion);
    };


    return({
        DeployModalCerrarS: Deploy,
        StateCerrarS: CerrarSesion,
    })
};
export default useDeployCerrarSesion;