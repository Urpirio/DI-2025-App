import { useState } from "react";
import { StyleHome } from "../../style/StyleHome";

export const useHome = () => {

        // Filter
       
        const [RotateIconFilter,setRotateIconFilter] = useState(true);
        const [IconBtnFilter,setIconBtnFilter] = useState({
            Icon:require('../../assets/IconHome/ArrowDerecha.png')
        });
        const [StyleContainerFilter,setStyleContainerFilter] = useState(StyleHome.ContainerFilter)
        const [StyleFiltros,setStyleFiltros] = useState(StyleHome.ContainerBtnFiltrosNotShow);
    
        // Search
        const [ContadorTransition, setContadorTransition] = useState(15);
        const [DisplayTexInput,setDisplayTexInput] = useState('none');
        const [StatusSearch,setStatusSearch] = useState(true);
        const [IconSearch,setIconSearch] = useState(
            require('../../assets/IconHome/search-big.png')
        );

        const DeployFilter = () => {
                if(RotateIconFilter){
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowAbajo.png')
                    });
                    setRotateIconFilter(!RotateIconFilter);
                    setStyleFiltros(StyleHome.ContainerBtnFiltrosShow);
                }else{
                    setIconBtnFilter({
                        Icon:require('../../assets/IconHome/ArrowDerecha.png')
                    });
                    setRotateIconFilter(!RotateIconFilter);
                    setStyleFiltros(StyleHome.ContainerBtnFiltrosNotShow);
                }
        };

        const TransitionBuscador = () =>{
                    setStatusSearch(!StatusSearch);
                    if(StatusSearch){
                        setContadorTransition(100)
                        setDisplayTexInput('flex');
                        setStyleContainerFilter(StyleHome.ContainerNotFilter);
                        setIconSearch(require('../../assets/IconHome/x.png'))
                    }else{
                        setContadorTransition(15)
                        setDisplayTexInput('none');
                        setStyleContainerFilter(StyleHome.ContainerFilter)
                        setIconSearch(require('../../assets/IconHome/search-big.png'))
                    };
        };

        const CloseBuscador = () =>{
        if(!StatusSearch){
            setContadorTransition(15)
            setDisplayTexInput('none');
            setStyleContainerFilter(StyleHome.ContainerFilter)
            setIconSearch(require('../../assets/IconHome/search-big.png'))
            setStatusSearch(!StatusSearch);
        }
        };

        return({
            DeployFilter: DeployFilter,
            TransitionBuscador: TransitionBuscador,
            CloseBuscador: CloseBuscador,
            // IsFilter: IsFilter,
            IconBtnFilter: IconBtnFilter,
            StyleContainerFilter: StyleContainerFilter,
            StyleFiltros: StyleFiltros,
            ContadorTransition: ContadorTransition,
            DisplayTexInput: DisplayTexInput,
            IconSearch: IconSearch,
            RotateIconFilter: RotateIconFilter,
        })


    
};