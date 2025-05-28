import { useState } from "react";


const ApiEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/events/?sort=start_time&fields=title,description,tags,room.*,speakers_event.*.*,start_time,end_time,id,show_at_home,category';

export const useGetEvents = () => {

    const [Loading,setLoading] = useState(false);
    const [AllEvents,setAllEvents] = useState([]);

        const GetEvents = () =>{

            fetch(ApiEvent)
            .then(respuesta => respuesta.json())
            .then((Data)=>{
                setAllEvents(Data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(true)
            })
        };

    return({
        GetEvents:GetEvents,
        Loading: Loading,
        AllEvents: AllEvents,
    })
}