import { useState } from "react";
import { StyleSwicthHome } from "../../style/StyleSwicthHome";

export const useSwitchHome = () => {

    const [StyleBtnTodos, setBtnTodos] = useState({
        Btn:StyleSwicthHome.BtnTodosSelected,
        Text:StyleSwicthHome.textBtnTodosSelected
    });
    const [StyleBtnHoy, setStyleBtnHoy] = useState({
        Btn:StyleSwicthHome.BtnHoy,
        Text:StyleSwicthHome.textBtnHoy
    });
    const [StatusStyle,setStatusStyle] = useState(true);

    const SwitchStyle = ({StatusStyle}) =>{
        if(StatusStyle){
            setBtnTodos({
                Btn: StyleSwicthHome.BtnTodos,
                Text: StyleSwicthHome.textBtnTodos
            });
            setStyleBtnHoy({
                Btn: StyleSwicthHome.BtnHoySelected,
                Text: StyleSwicthHome.textBtnHoySelected
            });
            setStatusStyle(false);
        }else{
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
    }


    return({
        SwitchStyle: SwitchStyle,
        StyleBtnHoy:StyleBtnHoy,
        StyleBtnTodos:StyleBtnTodos,
        StatusStyle: StatusStyle,
    })
}