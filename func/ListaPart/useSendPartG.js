// import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export const useSendPartG = () =>{

        const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';
        
        
        const LocalData = useLocalSearchParams();

        const AsistenciaStaff = ({userID,FuncLoading, FuncionAutoR}) => {
            // FuncLoading(true)
            const date = new Date().toISOString();
            fetch(ApiSpecificEvent,{
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
                    AsistenciaParticipante({Id: data.data.id,userID:userID, FuncionAutoR: FuncionAutoR,FuncLoading:FuncLoading})
                }
            })
            .catch((err)=>{
                console.error(err)
            })     
        };
    
        const AsistenciaParticipante = ({Id,userID,FuncLoading,FuncionAutoR}) => {
            fetch(ApiSpecificEvent + Id ,{
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LocalData.TokenAccess}`
                },
                body: JSON.stringify({
                    user_id: userID,
                })
            })
            .then(respuesta => respuesta.json())
            .catch((err)=>{
                console.error(err)
            })
            .finally(()=>{
                FuncionAutoR();
            })
        };


    return({
        AsistenciaStaff,
    })
}