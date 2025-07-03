import { useState } from "react";
import { useLocalSearchParams } from "expo-router";


export  function useSendPart() {
    const LocalData = useLocalSearchParams();
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ConfirmarAsistencia = ({userEventId}) => {

        const date = new Date().toISOString();
        console.log(userEventId);

        fetch(ApiSpecificEvent + userEventId,{
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
