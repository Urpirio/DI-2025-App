import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { GlobalApis } from "../../Apis/GlobalApis";


export  function useSendPart() {
    const LocalData = useLocalSearchParams();

    const ConfirmarAsistencia = ({userEventId}) => {

        const date = new Date().toISOString();

        fetch(GlobalApis.ApiUser_Event + userEventId,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${LocalData.TokenAccess}`
            },
            body: JSON.stringify({checkin: date})
        })
        .then(respuesta => {
            if(respuesta.ok){
                return respuesta.json()
            }
        })
        .catch((err)=>{
            console.error(err)
        }) 
        .finally(()=>{
            // funcionRefresh();
        })    
    };
    return({
        ConfirmarAsistencia,
    })
}
