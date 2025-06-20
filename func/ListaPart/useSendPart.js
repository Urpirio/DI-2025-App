import { useState } from "react";


export  function useSendPart() {
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    
    const ConfirmarAsistencia = ({userEventId,TokenAccess}) => {

        const date = new Date().toISOString();

        fetch(ApiSpecificEvent + userEventId,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({checkin: date})
        })
        .then(respuesta => respuesta.json())
        .catch((err)=>{
            console.error(err)
        }) 
        .finally(()=>{
            funcionRefresh();
        })    
    };
    return({
        ConfirmarAsistencia,
    })
}
