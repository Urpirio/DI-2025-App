import { GlobalApis } from "../../Apis/GlobalApis";
import { useState } from "react";


export const useModalAboutEvents = () =>{

    const [Registrados, setRegistrados] = useState(Array())
    const [Inscritos, setInscritos] = useState(Array());
    const [InformacionEvento, setInformacionEvento] = useState(Object());

    const GetInformationAbout = ({IDEvents,TokenAccess}) =>{
         
         fetch(GlobalApis.ApiUserInEvent + '' + IDEvents, {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${TokenAccess}` }
                })
                    .then(respuesta => {
                        if (respuesta.ok) {
                            return respuesta.json()
                        }
                    })
                    .then((Data) => {
                        //  console.log(Data)
                        const Registrados = Data.data?.filter(D => D.checkin != null);
                        setRegistrados(Registrados);
                        setInscritos(Data?.data)
                    })
                    .catch((error) => {
                        console.error(error)
                    });
        
                fetch(GlobalApis.ApiTodosEventos)
                    .then(respuesta => {
                        if (respuesta.ok) {
                            return respuesta.json()
                        }
                    })
                    .then((Data) => {
        
                        const ElEvento = Data.data?.filter(D => D.id == IDEvents);
                        console.log(ElEvento)
                        setInformacionEvento(ElEvento[0])
                    })
                    .catch(() => {
        
        })
    }
    return({
        GetInformationAbout,
        Inscritos,
        Registrados,
        InformacionEvento,
    })
}