import { useState } from "react";
import { StyleHome } from "../../style/Style - ScreenHome/StyleHome";

export const useHome = () => {


        const [RotateIconFilter,setRotateIconFilter] = useState(true);
        const [IconBtnFilter,setIconBtnFilter] = useState({
            Icon:require('../../assets/IconHome/ArrowDerecha.png')
        });
        const [StyleFiltros,setStyleFiltros] = useState(StyleHome.ContainerBtnFiltrosNotShow);  
        const [DisplayTexInput,setDisplayTexInput] = useState('none');
        const [IconSearch,setIconSearch] = useState(
            require('../../assets/IconHome/search-big.png')
        );

        const DeployFilter = () => {
                if(RotateIconFilter === true){
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowAbajo.png')
                    });
                    setRotateIconFilter(false);
                    setStyleFiltros(StyleHome.ContainerBtnFiltrosShow);
                }else if(RotateIconFilter === false){
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowDerecha.png')
                    });
                    setRotateIconFilter(true);
                    setStyleFiltros(StyleHome.ContainerBtnFiltrosNotShow);
                }
        };



        return({
            DeployFilter: DeployFilter,
            IconBtnFilter: IconBtnFilter,
            DisplayTexInput: DisplayTexInput,
            IconSearch: IconSearch,
            StyleFiltros:StyleFiltros,
            RotateIconFilter: RotateIconFilter,
        })


    
};