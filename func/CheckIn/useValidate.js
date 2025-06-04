import { useState } from "react";

const ApiUser = 'https://directus-prueba.dominicanainnova.gob.do/users/'
const ApiUserEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]='
const useValidate = () => {
    const [StatusModalIngCodigo,setStatusModalIngCodigo] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [StatusPar,setStatusPar] = useState(false);
    const [NoMatchUser,setNoMatchUser] = useState(false);
    const [NotInEvent, setNotInEvent] = useState(false);


    const [DataUsers,setDataUsers] = useState(
        {
        lastName: String,
        firstName: String,
        Id: String,
        Picture_Profile: String,
    }
);

    const CloseError = () => {
        setNoMatchUser(false)
    }

    
    const ResetStatusPar = () => {
        setStatusPar(false);
    };
        
    const CodeScanned = ({DataScanned,TokenUser,EventId}) =>{
        if((!NoMatchUser && !NotInEvent) === !StatusPar){
            setLoading(true);
        }
        fetch(ApiUser,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${TokenUser}`
            }
         })
         .then(respuesta => respuesta.json()) 
         .then((Data)=>{
            let B;

            
            const LargeDataScanned = DataScanned.data.split('')

            if(Data.data.length  > 0){
                Data.data.forEach((data)=>{
                    
                    if(data.id == DataScanned.data && LargeDataScanned.length > 7){
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
                        B = true;
                    }else if(data.id.slice(30,36) == DataScanned.data && LargeDataScanned.length === 6){

                            setStatusModalIngCodigo(false);
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
                            B = true;
                    }
                });

                if(!B){
                setStatusModalIngCodigo(false);
                setLoading(false)
                setNoMatchUser(true)
                };

                
            }
         })
         .catch((error)=>{
            console.error(error)
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

            let B;
            Data.data.forEach((data)=>{
                if(data.user_id == Id){
                   setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id.slice(30,36),
                    Picture_Profile: Picture_Profile,
                   });
                   setStatusPar(true);
                   B = true;
                }else{
                   setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id.slice(30,36),
                    Picture_Profile: Picture_Profile,
                   }); 
                }
            });

            if(!B){
                setNotInEvent(true)
            };
            

            
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
        NotInEvent:NotInEvent,
        setNotInEvent: setNotInEvent,
        StatusModalIngCodigo: StatusModalIngCodigo,
        setStatusModalIngCodigo: setStatusModalIngCodigo,
    })
};
export default useValidate