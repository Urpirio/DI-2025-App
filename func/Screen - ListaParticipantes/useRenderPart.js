import { useState } from "react";
// import { useRenderPartG } from "./useRenderPartG";

export const useRenderPart = () => {


    const ApiGeneralEvent = 'https://directus-prueba.dominicanainnova.gob.do/users/';
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
    const [DataParticipant,setDataParticipant] = useState([]);
    const [ArrayUserId,setArrayUserId] = useState([])
    const [Loading,setLoading] = useState(false);
    const [FiltroBusqueda,setFiltroBusqueda] = useState('Nombre');
    const [FiltroEstado,setFiltroEstado] = useState('Todos los usuarios');
    const [TextSearch,setTextSearch] = useState();


    // const {GetGeneralParticipant,DataParticipant1} = useRenderPartG();
    



    const GetParticipant = ({Event,TokenAcces}) =>{
        fetch(ApiSpecificEvent + Event,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => {
            if(respuestas.ok){
                return respuestas.json();
            }
        })
        .then((Data)=>{
            const  ArrayUser = [];
            Data.data.forEach((data) =>{

            if(Event == data.event_id){
                if(FiltroEstado == 'Todos los usuarios'){
                    ArrayUserId.push(data);
                }else if(data.checkin != null && FiltroEstado == 'Participantes en el evento'){
                    ArrayUserId.push(data);
                }else if(data.checkin == null && FiltroEstado == 'Inscritos'){
                    ArrayUserId.push(data);
                }
            };
            
            
            });

            if(ArrayUser != []){
                setArrayUserId(ArrayUser)
                Users({TokenAccess:TokenAcces})
            }

            
        })
    };

   

    const Users = ({TokenAccess}) =>{
        fetch(ApiGeneralEvent,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${TokenAccess}`
            }
        })
        .then(respuestas => {
            if(respuestas.ok){
               return respuestas.json()
            }
        })
        .then((Data)=>{
            const ArrayUser = [];

            ArrayUserId.forEach((Dt) => {
                Data.data.forEach((DataUser)=>{
                
                if(DataUser.id == Dt.user_id){
                   if(ArrayUser.filter((e) => e.id === DataUser.id).length == 0){
                        DataUser.userEventId = Dt.id;
                        DataUser.checkin = Dt.checkin;
                        ArrayUser.push(DataUser)
                   }
                };
            });
            })

            if(ArrayUser != []){
                const ArraySearch = [];

                if(TextSearch == undefined){
                    setDataParticipant(ArrayUser);  
                }else if(FiltroBusqueda == 'Nombre'){
                    ArrayUser.forEach(D =>{
                        const NombreCompleto = D.first_name + ' ' + D.last_name;
                        if(NombreCompleto.toUpperCase().includes(TextSearch.toUpperCase())){
                            ArraySearch.push(D);
                        }
                    });

                    if(ArraySearch != []){
                        setDataParticipant(ArraySearch)
                    };
                }else if(FiltroBusqueda == 'Email'){
                    ArrayUser.forEach(D =>{
                        if(D.email.toUpperCase().includes(TextSearch.toUpperCase())){
                            ArraySearch.push(D);
                        }
                    });

                    if(ArraySearch != []){
                        setDataParticipant(ArraySearch)
                    };
                }
            };
        })
        .catch((err)=>{
            
        })
        .finally(()=>{
            setLoading(true)
        })
    };

    return({
        GetParticipant: GetParticipant,
        Loading: Loading,
        DataParticipant: DataParticipant,
        FiltroBusqueda: FiltroBusqueda,
        TextSearch: TextSearch,
        setTextSearch: setTextSearch,
        setFiltroBusqueda: setFiltroBusqueda,
        setFiltroEstado: setFiltroEstado,
        FiltroEstado: FiltroEstado,
    })
}