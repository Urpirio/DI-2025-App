import { useState } from "react";

export const useRenderPartG = () => {
    
    const ApiGeneralEvent = 'https://directus-prueba.dominicanainnova.gob.do/users/';
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
    const [DataParticipant,setDataParticipant] = useState([]);
    const [ArrayUserId,setArrayUserId] = useState([])
    const [Loading,setLoading] = useState(false);
    const [TextSearch,setTextSearch] = useState();
    const [FiltroBusqueda,setFiltroBusqueda] = useState('Nombre')


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
                const ArraySearch = [];

                if(TextSearch == undefined){
                    setDataParticipant(Array)
                }else if(FiltroBusqueda == 'Nombre'){
                    Array.forEach(D =>{
                        if(D.first_name.toUpperCase().includes(TextSearch.toUpperCase())){
                            ArraySearch.push(D);
                        }
                    });

                    if(ArraySearch != []){
                        setDataParticipant(ArraySearch)
                    };
                }else if(FiltroBusqueda == 'Email'){
                    Array.forEach(D =>{
                        if(D.email.toUpperCase().includes(TextSearch.toUpperCase())){
                            ArraySearch.push(D);
                        }
                    });

                    if(ArraySearch != []){
                        setDataParticipant(ArraySearch)
                    };
                }
            }


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
        TextSearch: TextSearch,
        setTextSearch: setTextSearch,
        FiltroBusqueda: FiltroBusqueda,
        setFiltroBusqueda: setFiltroBusqueda,
    })
}