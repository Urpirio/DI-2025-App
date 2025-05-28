import { useState } from "react";

export const useRenderPart = () => {


    const ApiParticipant = 'https://directus-prueba.dominicanainnova.gob.do/users/';
    // const [DataParticipant,setDataParticipant] = useState({
    //     firstName: String,
    //     lastName: String,
    //     Picture_Profile : String,
    //     Email: String,
    //     Id:String,
    // });
    const [DataParticipant,setDataParticipant] = useState(null);
    const [Loading,setLoading] = useState(false);



    const GetParticipant = ({Event,TokenAcces}) =>{
        fetch(ApiParticipant,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
           console.log(Data.data) 
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{

        });
    };

    const GetGeneralParticipant = ({TokenAcces}) => {
        fetch(ApiParticipant,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenAcces}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
            setDataParticipant(Data.data)
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(true)
        });
    };

    return({
        GetGeneralParticipant: GetGeneralParticipant,
        GetParticipant: GetParticipant,
        Loading: Loading,
        DataParticipant: DataParticipant,
    })
}