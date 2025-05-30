import { useState } from "react";

export const useRenderPartG = () => {
    
    const ApiGeneralEvent = 'https://directus-prueba.dominicanainnova.gob.do/users/';
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
    const [DataParticipant,setDataParticipant] = useState([]);
    const [ArrayUserId,setArrayUserId] = useState([])
    const [Loading,setLoading] = useState(false);


    const GetGeneralParticipant = ({TokenAcces,EventId}) => {
        fetch(ApiGeneralEvent,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{

                FilterUser({TokenAcces:TokenAcces,UserInGeneral:Data.data,EventId:EventId})
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(true)
        });
    };

    const FilterUser = ({TokenAcces,UserInGeneral,EventId}) =>{
        fetch(ApiSpecificEvent + EventId,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
             
            const Array = [];
            const ArrayIdEvent = [];

            Data.data.forEach(D => {
                ArrayIdEvent.push(D.user_id)
            });

            UserInGeneral.forEach(u => {
                if (!ArrayIdEvent.includes(u.id)) {
                    Array.push(u) 
                } 
            });

            if(Array != []){
                setDataParticipant(Array)
            }else{
                
            };


        })
        .catch(()=>{

        })
        .finally(()=>{

        })
    }
    
    
    return({
        GetGeneralParticipant: GetGeneralParticipant,
        Loading: Loading,
        DataParticipant: DataParticipant,
    })
}