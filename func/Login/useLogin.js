import { router } from "expo-router";
import { useState } from "react";

const ApiToken = 'https://directus-prueba.dominicanainnova.gob.do/auth/login/';
const ApiInfoUser = 'https://directus-prueba.dominicanainnova.gob.do/users/me'
export const GetLogin = () => {

    const [LoadingLOGIN,setLoadingLOGIN] = useState(false);
    const [Token,setToken] = useState(null);
    const [Credencial_No_Valida,setCredencial_No_Valida] = useState(false);
    const [DataUser,setDataUser] = useState([]);

    const UseOtherCredencial = () => {
        setCredencial_No_Valida(false)
    };


    const PostUserCredential = ({Email,Password,ErrorFunction}) => {
        setLoadingLOGIN(true)
        fetch(ApiToken,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:Email,
                password:Password,
            })
        })
        .then(respuesta => {
            if(respuesta.ok){
               return respuesta.json();
            }
        })
        .then((Data)=>{
            if(Data.errors){
                setCredencial_No_Valida(true)
                ErrorFunction({Status: false})
            }else{
                GetInfoUser({TokenAccess: Data.data.access_token});
                setToken(Data.data.access_token);
                ErrorFunction({Status: true})
            };
            
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoadingLOGIN(false);
        })

    };

    const GetInfoUser = ({TokenAccess}) =>{
        fetch(ApiInfoUser,{
            method: 'GET',
            headers:{
              'Authorization': `Bearer ${TokenAccess}`  
            }
        })
        .then(respuesta => respuesta.json())
        .then((Data)=>{
            if(Data.errors){

            }else{
                 router.navigate({
                    pathname: 'Screens/ScreenHome',
                    params: {
                    DataUser: Data.data,
                    TokenAccess: TokenAccess,
                    profile_picture: Data.data.profile_picture,
                    LastName: Data.data.last_name,
                    FirstName: Data.data.first_name,
                    StaffId: Data.id,
                    }
                });
            }
        })
        .catch((error) =>{
            console.error(error)
        })
        .finally(()=>{
           
        })
    };


    return({
        LoadingLOGIN: LoadingLOGIN,
        PostUserCredential: PostUserCredential,
        Token: Token,
        Credencial_No_Valida: Credencial_No_Valida,
        UseOtherCredencial: UseOtherCredencial,
        DataUser: DataUser,

    })
}