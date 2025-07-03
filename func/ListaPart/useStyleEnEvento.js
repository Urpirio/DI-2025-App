import { useState } from "react";
import { StyleScreenEventos } from "../../style/StyleScreen - Evento";

export const useStyleEnEvento = () => {


    const [IconDropDownEstado,setIconDropDownEstado] = useState(require('../../assets/IconParticipantes/ArrowDerecha.png'))
    const [StyleDropDownEstado,setStyleDropDownEstado]  = useState({
        Style:StyleScreenEventos.ContenedorOpcionesDropDownEstados_None,
        stado: false,
    });

    const [IconDropDownBuscado,setIconDropDownBuscado] = useState(require('../../assets/IconParticipantes/ArrowDerecha.png'))
    const [StyleDropDownBuscador,setStyleDropDownBuscador]  = useState({
        Style:StyleScreenEventos.ContenedorOpcionesDropDownBuscador_None,
        stado: false,
    });



    const DeployDropDownEstado = () => {
        if(StyleDropDownEstado.stado){
            setIconDropDownEstado(require('../../assets/IconParticipantes/ArrowDerecha.png'))
            setStyleDropDownEstado({
                Style:StyleScreenEventos.ContenedorOpcionesDropDownEstados_None,
                stado:false
            })
        }else{
            setIconDropDownEstado(require('../../assets/IconParticipantes/ArrowAbajo.png'))
            setStyleDropDownEstado({
                Style:StyleScreenEventos.ContenedorOpcionesDropDownEstados,
                stado:true
            })
        }
    };
    const DeployDropDownBuscador = () => {
        if(StyleDropDownBuscador.stado){
            setIconDropDownBuscado(require('../../assets/IconParticipantes/ArrowDerecha.png'))
            setStyleDropDownBuscador({
                Style:StyleScreenEventos.ContenedorOpcionesDropDownBuscador_None,
                stado:false
            })
        }else{
            setIconDropDownBuscado(require('../../assets/IconParticipantes/ArrowAbajo.png'))
            setStyleDropDownBuscador({
                Style:StyleScreenEventos.ContenedorOpcionesDropDownBuscador,
                stado:true
            })
        }
    };


    return({
        DeployDropDownBuscador,
        DeployDropDownEstado,
        StyleDropDownBuscador,
        StyleDropDownEstado,
        setStyleDropDownBuscador,
        setStyleDropDownEstado,
        IconDropDownBuscado,
        IconDropDownEstado
    })
};