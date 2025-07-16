import { useState } from "react";
import { GlobalApis } from "../../Apis/GlobalApis";


const useValidate = () => {
    const [StatusModalIngCodigo,setStatusModalIngCodigo] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [StatusPar,setStatusPar] = useState(false);
    const [NoMatchUser,setNoMatchUser] = useState(false);
    const [NotInEvent, setNotInEvent] = useState(false);
    const [UserID,setUserID] = useState();
    const [Ischeckin,setISCheckin] = useState(false);


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
        if((!NoMatchUser && (!NotInEvent == !Ischeckin)) === !StatusPar){
            setLoading(true);
        };

        fetch(GlobalApis.ApiUSer,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${TokenUser}`
            }
         })
         .then(respuesta => {
            if(respuesta.ok){
                return respuesta.json()
            }
         }) 
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
        fetch(`${GlobalApis.ApiUserInEvent + EventId}`,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${TokenUser}`
            }
        })
        .then(respuestas => respuestas.json())
        .then((Data)=>{

            let B;
            let C;

            if(Data.data.length === 0){
                setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id,
                    Picture_Profile: Picture_Profile,
                    ShortID: Id.slice(30,36)
                });
            }else{
             Data.data.forEach((data)=>{
                if(data.user_id == Id && data.checkin === null){
                   setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id.slice(30,36),
                    Picture_Profile: Picture_Profile,
                   });
                   setUserID(data.id)
                   setStatusPar(true);
                   B = true;
                }else if(data.checkin === null){
                   setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id,
                    Picture_Profile: Picture_Profile,
                    ShortID: Id.slice(30,36)
                   }); 
                }else if(data.user_id != Id){
                    setDataUsers({
                    lastName:lastName,
                    firstName: firstName,
                    Id: Id,
                    Picture_Profile: Picture_Profile,
                    ShortID: Id.slice(30,36)
                    });
                }else if(data.checkin != null){
                    C = true;   
                }
                });
            }

            if(!B && !C){
                setNotInEvent(true)
            }else if(C && !Ischeckin){
                setISCheckin(true);
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
        UserID:UserID,
        Ischeckin: Ischeckin,
        setISCheckin:setISCheckin,
    })
};
export default useValidate