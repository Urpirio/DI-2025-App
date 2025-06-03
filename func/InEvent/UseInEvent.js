import { useState } from "react";

export const useInEvent = () => {

    const ApiInEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
    const [CantidadPart,setCantidadPart] = useState({
        InEvent: Number,
        NotInEvent: Number,
        PartInEvent: Number,
    });
    const [Loading,setLoading] = useState(false);

    const GetPartInEvent= ({TokenAccess,IdEvent}) => {
        fetch(ApiInEvent + IdEvent,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAccess}`
            }
        })
        .then(respuesta => respuesta.json())
        .then((Data)=>{

            const ArrayInEvent = [];
            
            Data.data.forEach(Dt =>{
                if(Dt.checkin != null){
                    ArrayInEvent.push(Dt);
                    setCantidadPart({
                        PartInEvent: Dt.length,
                        InEvent: ArrayInEvent.length,
                    })
                }
            });

            if(ArrayInEvent != []){
                setCantidadPart({
                    PartInEvent: Data.data.length,
                    InEvent: ArrayInEvent.length,
                })
            };
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(true);
        });

    };





    return({
        GetPartInEvent:GetPartInEvent,
        Loading:Loading,
        CantidadPart: CantidadPart,
    })
}