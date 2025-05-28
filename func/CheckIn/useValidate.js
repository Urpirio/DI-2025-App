import { useState } from "react";

const ApiUser = 'https://directus-prueba.dominicanainnova.gob.do/users/'
const useValidate = () => {
    const [Loading, setLoading] = useState(false);
    const [ StatusPar,setStatusPar] = useState(false);
    const [DataUsers,setDataUsers] = useState({
        lastName: String,
        firstName: String,
        Id: String,
        Picture_Profile: String,
    });

    const ResetStatusPar = () => {
        setStatusPar(false);
    };
        
    const CodeScanned = ({DataScanned,TokenUser}) =>{
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
                        setDataUsers({
                            firstName: FirstName[0],
                            lastName: LastName[0],
                            Id: data.id.slice(30,36),
                            Picture_Profile: data.profile_picture,
                        })
                    }
                });
            };
         })
         .catch((error)=>{
            console.error(error)
         })
         .finally(()=>{
             setLoading(false);
             setStatusPar(true);
         })
    };

    return({
        CodeScanned: CodeScanned,
        ResetStatusPar: ResetStatusPar,
        Loading:Loading,
        StatusPar:StatusPar,
        DataUsers: DataUsers,
    })
};
export default useValidate