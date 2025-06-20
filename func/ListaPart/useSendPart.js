import { useState } from "react";


export  function useSendPart() {
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ConfirmarAsistencia = ({userEventId,TokenAccess}) => {
        console.log(TokenAccess);
        console.log(userEventId)
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
        .then((Data)=>{
            console.log(Data)
        })
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
