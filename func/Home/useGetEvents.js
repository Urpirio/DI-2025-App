import { useState } from "react";


const ApiEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/events/?sort=start_time&fields=title,description,tags,room.*,speakers_event.*.*,start_time,end_time,id,show_at_home,category';

export const useGetEvents = () => {

    const [Loading,setLoading] = useState(false);
    const [AllEvents,setAllEvents] = useState([]);
    const [DataSala, setDataSala] = useState([]);
    const [SelectName,setSelectName] = useState('Filtra por Sala');
    const [LoadingF,setLoadingF] = useState(false);
    const [IsFilter,setIsFilter] = useState(false);
     const [SearchText,setSearchText] = useState('');
    
    
        const [IsSearch,setIsSearch] = useState(false)
    
        const ChangetoSearch = () => {
            setIsSearch(!IsSearch)
        }
    
        const ChangeSelected = ({Selected}) =>{
            setSelectName(Selected);
            if(Selected != 'No filtrar'){
                setIsFilter(true);
            }else{
                setIsFilter(false);
            };
        }
    
        const GetSalaEvent = () => {
            fetch(ApiEvent)
            .then(respuestas => respuestas.json())
            .then((Data)=>{
                const ArrayP = [];
    
                Data.data.forEach(D =>{
                    if(!ArrayP.includes(D.room.location)){
                        if(SelectName != D.room.location){
                            ArrayP.push(D.room.location)
                        }
                    }
                });
    
                if(ArrayP != []){
                    if(SelectName != 'Filtra por Sala' && SelectName != 'No filtrar'){
                        ArrayP.push('No filtrar')
                    };
                    setDataSala(ArrayP);
                };
    
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                setLoadingF(true)
            })
        };

        const GetEvents = () =>{

             fetch(ApiEvent)
            .then(respuesta => respuesta.json())
            .then((Data)=>{
                const ArrayP = [];
                Data.data.forEach(Dt =>{
                    if(Dt.room.location == SelectName){
                        ArrayP.push(Dt);
                    }else if(SelectName == 'Filtra por Sala' && SelectName != Dt.room.location){
                        ArrayP.push(Dt);
                    }else if(SelectName == 'No filtrar' && !IsSearch){
                        ArrayP.push(Dt);
                    }else if(IsSearch){
                        const Stext = SearchText.toUpperCase().split(' ');
                        
                        const NameEvent = Dt.title.toUpperCase();
                        Stext.forEach( T =>{
                            if(NameEvent.includes(T)){
                                ArrayP.push(Dt)
                            }
                        })
                    }
                });

                if(ArrayP != []){
                    setAllEvents({
                            DataEvent: ArrayP,
                    });
                }
              
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                // setTimeout(()=>{
                    setLoading(true)
                // },5000)
            })
        };

    return({
        GetEvents:GetEvents,
        Loading: Loading,
        AllEvents: AllEvents,
        GetSalaEvent: GetSalaEvent,
        DataSala: DataSala,
        SelectName: SelectName,
        ChangeSelected: ChangeSelected,
        LoadingF:LoadingF,
        IsFilter: IsFilter,
        ChangetoSearch: ChangetoSearch,
        SearchText:SearchText,
        setSearchText:setSearchText,
    })
}