import { useState } from "react";

export const useRenderPart = () => {


    const ApiGeneralEvent = 'https://directus-prueba.dominicanainnova.gob.do/users/';
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
    const [DataParticipant,setDataParticipant] = useState([]);
    const [ArrayUserId,setArrayUserId] = useState([])
    const [Loading,setLoading] = useState(false);
    



    const GetParticipant = ({Event,TokenAcces}) =>{
        fetch(ApiSpecificEvent + Event,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
            const  ArrayUser = [];
            Data.data.forEach((data) =>{

            if(Event == data.event_id){
                ArrayUserId.push(data)
            }
            
            
            });
            if(ArrayUser != []){
                setArrayUserId(ArrayUser)
                Users({TokenAccess:TokenAcces})
            }

            
        })
        .catch((error)=>{
            console.error(error)
        })
    };

   

    const Users = ({TokenAccess}) =>{
        fetch(ApiGeneralEvent,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${TokenAccess}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
            const ArrayUser = [];
            ArrayUserId.forEach((Dt) => {
                Data.data.forEach((DataUser)=>{
                
                if(DataUser.id == Dt.user_id){
                   if(ArrayUser.filter((e) => e.id === DataUser.id).length == 0){
                        DataUser.checkin = Dt.checkin;
                        ArrayUser.push(DataUser)
                   }
                };
            });
            })

            if(ArrayUser != []){
                setDataParticipant(ArrayUser);  
            };
        })
        .catch(()=>{

        })
        .finally(()=>{
            setLoading(true)
        })
    }

    // const GetGeneralParticipant = ({TokenAcces}) => {
    //     fetch(ApiGeneralEvent,{
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${TokenAcces}`
    //         }
    //     })
    //     .then(respuestas => respuestas.json())
    //     .then((Data)=>{
    //         const ArrayUser = [];
    //         Data.data.forEach(Data =>{
    //             ArrayUser.push(Data);
    //         });

    //         if(ArrayUser != []){
    //             setDataParticipant(ArrayUser)
    //         };
    //         console.log(Data)
    //     })
    //     .catch((error)=>{
    //         console.error(error)
    //     })
    //     .finally(()=>{
    //         setLoading(true)
    //     });
    // };

    return({
        // GetGeneralParticipant: GetGeneralParticipant,
        GetParticipant: GetParticipant,
        Loading: Loading,
        DataParticipant: DataParticipant,
    })
}