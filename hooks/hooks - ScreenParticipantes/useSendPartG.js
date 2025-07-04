import { useLocalSearchParams } from "expo-router";
import { GlobalApis } from "../../Apis/GlobalApis";

export const useSendPartG = () =>{

        const LocalData = useLocalSearchParams();

        const AsistenciaStaff = ({userID}) => {

            const date = new Date().toISOString();
            fetch(GlobalApis.ApiUser_Event,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LocalData.TokenAccess}`
                },
                body: JSON.stringify({
                    checkin: date,
                    user_id: LocalData.StaffId,
                    event_id: LocalData.IDEvents,
                })
            })
            .then(respuesta => respuesta.json())
            .then((data)=>{
                if(!data.errors){
                    AsistenciaParticipante({Id: data.data.id,userID:userID})
                }
            })
            .catch((err)=>{
                console.error(err)
            });    
        };
    
        const AsistenciaParticipante = ({Id,userID}) => {
            fetch(GlobalApis.ApiUser_Event + Id ,{
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LocalData.TokenAccess}`
                },
                body: JSON.stringify({
                    user_id: userID,
                })
            })
            .then(respuesta => {
                if(respuesta.ok){
                   return respuesta.json()
                }
            })
            .catch((err)=>{
                console.error(err)
            });
        };


    return({
        AsistenciaStaff,
    })
}