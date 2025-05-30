import { useState } from "react";

const ApiUser = 'https://directus-prueba.dominicanainnova.gob.do/users/'
const ApiUserEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
const useValidate = () => {
    const [Loading, setLoading] = useState(false);
    const [StatusPar,setStatusPar] = useState(false);
    const [NoMatchUser,setNoMatchUser] = useState(false);

    const [DataUsers,setDataUsers] = useState({
        lastName: String,
        firstName: String,
        Id: String,
        Picture_Profile: String,
    });

    const CloseError = () => {
        setNoMatchUser(false)
    }

    const ResetStatusPar = () => {
        setStatusPar(false);
    };
        
    const CodeScanned = ({DataScanned,TokenUser,EventId}) =>{
        setLoading(true);
        fetch(ApiUser,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${TokenUser}`
            }
         })
         .then(respuesta => respuesta.json()) 
         .then((Data)=>{

            if(Data.data.length  > 0){
                Data.data.forEach((data)=>{
                    if(data.id == DataScanned.data){
                        const FirstName = data.first_name.split(' ');
                        const LastName = data.last_name.split(' ');
                        Validando({
                            firstName: FirstName[0],
                            lastName: LastName[0],
                            Id: data.id,
                            Picture_Profile: data.profile_picture,
                            TokenUser: TokenUser,
                            EventId: EventId,
                        });
                    }
                });

                
            }else{

            };
         })
         .catch((error)=>{
            console.error(error)
         })
         .finally(()=>{
            setLoading(false);
         })
    };

    const Validando = ({firstName,lastName,Id,Picture_Profile,TokenUser,EventId}) =>{
        fetch(`${ApiUserEvent + EventId}`,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${TokenUser}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{
            Data.data.forEach((data)=>{
                if(data.user_id == Id){
                   setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id.slice(30,36),
                    Picture_Profile: Picture_Profile,
                   });
                   setStatusPar(true);
                }
            });
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
             setLoading(false);
        })
    }

    return({
        CodeScanned: CodeScanned,
        ResetStatusPar: ResetStatusPar,
        CloseError: CloseError,
        Loading:Loading,
        StatusPar:StatusPar,
        DataUsers: DataUsers,
        NoMatchUser:NoMatchUser,
    })
};
export default useValidate