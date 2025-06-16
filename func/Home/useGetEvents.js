import { useState } from "react";
import { useNetInfo,useNetInfoInstance,NetInfoConfiguration } from "@react-native-community/netinfo";

const ApiEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/events/?sort=start_time&fields=title,description,tags,room.*,speakers_event.*.*,start_time,end_time,id,show_at_home,category';

export const useGetEvents = () => {

    const HaveInternet = useNetInfo();
    const [Loading,setLoading] = useState(false);
    const [AllEvents,setAllEvents] = useState([]);

    const [DataSala, setDataSala] = useState([]);
    const [SelectName,setSelectName] = useState('No filtrar');
    const [LoadingF,setLoadingF] = useState(false);
    const [IsFilter,setIsFilter] = useState(false);
    const [SearchText,setSearchText] = useState('');
    const [EventosHoy,setEventosHoy] = useState(false);
    const [NoEventos,setNoEventos] = useState(false);
    
    
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
        // if(HaveInternet.details.frequency ){
            fetch(ApiEvent)
            .then(respuestas => {
            if(respuestas.ok){
               return respuestas.json()
            }
            })
            .then((Data)=>{
                const ArrayP = [];
    
                Data.data.forEach(D =>{

                    const Sala = D.room ? D.room.location : '';

                    if(!ArrayP.includes(Sala)){
                        if(Sala != ''){
                            ArrayP.push(Sala)
                        }
                    };

                });
    
                if(ArrayP != []){
                    ArrayP.push('No filtrar')
                    setDataSala(ArrayP);
                };
    
            })
            .catch((err)=>{
                console.log(err);
            })
            .finally(()=>{
                setLoadingF(true)
            });
        // }
        };

        const GetEvents = () =>{
            
            // if(HaveInternet.isConnected){
                console.log('funciona la parte 1')
             fetch(ApiEvent)
            .then(respuesta => {
                if(respuesta.ok){
                  return  respuesta.json()
                }
            })
            .then((Data)=>{
                const ArrayP = [];
                Data.data.forEach(Dt =>{


                    if(Dt.room === null && !EventosHoy){
                        ArrayP.push(Dt);
                    }else if(EventosHoy){
                       
                        const FechaActual = new Date().toISOString();
                    
                        if(Dt.start_time === FechaActual){
                            if(Dt.room === null && EventosHoy){
                                ArrayP.push(Dt);
                            }else if(Dt.room.location == SelectName && EventosHoy){
                                setNoEventos(false);
                                ArrayP.push(Dt);
                            }else if((SelectName == 'No filtrar' && SearchText == '') && EventosHoy){
                                setNoEventos(false);
                                ArrayP.push(Dt);
                            }else if(SearchText != ''){
                                let IsIgual;
                                setNoEventos(false);
                                const Stext = SearchText.toUpperCase().split(' ');
                        
                                const NameEvent = Dt.title.toUpperCase().split(' ');

                                for(let d = 0; d < NameEvent.length; d++){
                                    for(let x = 0; x < Stext.length ; x++){
                                        if(Stext[x] == NameEvent[d]){
                                            IsIgual = true;
                                        }
                                    }
                                }

                                if(IsIgual){
                                    ArrayP.push(Dt);
                                }

                            }
                        };
                        
                        if(!NoEventos && ArrayP.length === 0){
                            setNoEventos(true);
                        };             
                    }else if(Dt.room.location == SelectName && !EventosHoy){
                        setNoEventos(false);
                        ArrayP.push(Dt);
                    }else if((SelectName == 'No filtrar' && SearchText == '') && !EventosHoy){
                        setNoEventos(false);
                        ArrayP.push(Dt);
                    }else if(SearchText != ''){
                        let IsIgual;
                        setNoEventos(false);
                        
                        const NameEvent = Dt.title.toUpperCase();
                        if(NameEvent.includes(SearchText.toUpperCase())){
                            IsIgual = true;
                        };

                        if(IsIgual){
                            ArrayP.push(Dt);
                        }

                    }
                });

                if(ArrayP != []){       
                    setAllEvents(ArrayP);
                }
              
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(true)
            });
            // 
        };

    return({
        GetEvents:GetEvents,
        Loading: Loading,
        setLoading:setLoading,
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
        EventosHoy: EventosHoy,
        setEventosHoy: setEventosHoy,
        NoEventos:NoEventos,

    })
}




// Revisar para terminar el apartado de internet malo o mala conexion de internet.
    
    // const { networkSpeed, networkSpeedText } = useRnSpeedTest();
    // const [DataE_Events,setDataE_Events] = useState([]);
    // const [StatusDataE,setStatusDataE] = useState(false);
// }else{
            //     console.log('funciona la parte dos')
            //     if(!StatusDataE){
            //         setDataE_Events(AllEvents);
            //         setStatusDataE(true);
            //     };

            //     const ArrayP = [];

            //     AllEvents.forEach(Data =>{
            //         if(Data.room === null && !EventosHoy){
            //             ArrayP.push(Dt);
            //         }else if(EventosHoy){
                       
            //             const FechaActual = new Date().toISOString();
                    
            //             if(Data.start_time === FechaActual){
            //                 if(Data.room === null && EventosHoy){
            //                     ArrayP.push(Data);
            //                 }else if(Data.room.location == SelectName && EventosHoy){
            //                     setNoEventos(false);
            //                     ArrayP.push(Data);
            //                 }else if((SelectName == 'No filtrar' && SearchText == '') && EventosHoy){
            //                     setNoEventos(false);
            //                     ArrayP.push(Data);
            //                 }else if(SearchText != ''){
            //                     let IsIgual;
            //                     setNoEventos(false);
            //                     const Stext = SearchText.toUpperCase().split(' ');
                        
            //                     const NameEvent = Data.title.toUpperCase().split(' ');

            //                     for(let d = 0; d < NameEvent.length; d++){
            //                         for(let x = 0; x < Stext.length ; x++){
            //                             if(Stext[x] == NameEvent[d]){
            //                                 IsIgual = true;
            //                             }
            //                         }
            //                     }

            //                     if(IsIgual){
            //                         ArrayP.push(Data);
            //                     }

            //                 }
            //             };
                        
            //             if(!NoEventos && ArrayP.length === 0){
            //                 setNoEventos(true);
            //             };             
            //         }else if(Data.room.location == SelectName && !EventosHoy){
            //             setNoEventos(false);
            //             ArrayP.push(Data);
            //         }else if((SelectName == 'No filtrar' && SearchText == '') && !EventosHoy){
            //             setNoEventos(false);
            //             ArrayP.push(Data);
            //         }else if(SearchText != ''){
            //             let IsIgual;
            //             setNoEventos(false);
                        
            //             const NameEvent = Data.title.toUpperCase();
            //             if(NameEvent.includes(SearchText.toUpperCase())){
            //                 IsIgual = true;
            //             };

            //             if(IsIgual){
            //                 ArrayP.push(Data);
            //             }

            //         }
            //     });

            //     if(ArrayP != []){       
            //         setAllEvents(ArrayP);
            //     };
            // }
