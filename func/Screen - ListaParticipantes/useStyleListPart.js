import { useState } from 'react';
import { StyleParticipantes } from '../../style/StyleParticipantes';

export const useStyleListPart = () => {

    const [DeploySelectS,setDeploySelectS] = useState(StyleParticipantes.SelectContainerFilterHiddenS);
    const [DeploySelectR,setDeploySelectR] = useState(StyleParticipantes.SelectContainerFilterHiddenR);
    
        
    const [RotateIconFilterS,setRotateIconFilterS] = useState(true);
    const [RotateIconFilterR,setRotateIconFilterR] = useState(true);
    const [IconBtnFilterR,setIconBtnFilterR] = useState({
            Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    
    const [IconBtnFilter,setIconBtnFilter] = useState({
            Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });


    const DeployFilterS = () => {
                if(RotateIconFilterS){
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowAbajo.png')
                    });
                    setDeploySelectS(StyleParticipantes.SelectContainerFilterS)
                    setRotateIconFilterS(!RotateIconFilterS);
                }else{
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowDerecha.png')
                    });
                    setDeploySelectS(StyleParticipantes.SelectContainerFilterHiddenS)
                    setRotateIconFilterS(!RotateIconFilterS);
                }
      };
    
      const DeployFilterRegistro = () => {
                if(RotateIconFilterR){
                    setIconBtnFilterR({
                        Icon:require('../../assets/IconHome/ArrowAbajo.png')
                    });
                    setDeploySelectR(StyleParticipantes.SelectContainerFilterR)
                    setRotateIconFilterR(!RotateIconFilterR);
                }else{
                    setIconBtnFilterR({
                        Icon:require('../../assets/IconHome/ArrowDerecha.png')
                    });
                    setDeploySelectR(StyleParticipantes.SelectContainerFilterHiddenR)
                    setRotateIconFilterR(!RotateIconFilterR);
                }
      };


      return({
        DeployFilterRegistro:DeployFilterRegistro,
        DeployFilterS: DeployFilterS,
        IconBtnFilter:IconBtnFilter,
        IconBtnFilterR:IconBtnFilterR,
        DeploySelectS: DeploySelectS,
        DeploySelectR: DeploySelectR,
      })
}