import { useState } from "react";
import { GlobalApis } from "../../Apis/GlobalApis";
import { useLocalSearchParams } from "expo-router";


export const useRenderTodos = () => {
    
    const LocalData = useLocalSearchParams();
    const [DatosParticipantes,setDatosParticipantes] = useState([]);
    const [TextSearch,setTextSearch] = useState('');
    const [FiltroBuscador,setFiltroBuscador] = useState('Nombre');
    const [FiltroEstado,setFiltroEstado] = useState('Todos los usuarios');

    
 

    const GetTodosUsuarios = () =>{
    fetch(GlobalApis.ApiUSer,{
        method:'GET',
        headers:{'Authorization': `Bearer ${LocalData.TokenAccess}`}  
    })
    .then(respuesta => respuesta.json())
    .then((Data)=>{
        GetTodosUsuarios2({DatosPartG:Data.data});
    })
    .catch((err)=>{
        console.log(err)
    }).finally(()=>{

    });
    };

    const  GetTodosUsuarios2 = ({DatosPartG}) =>{
        
    fetch(GlobalApis.ApiUserInEvent + LocalData.IDEvents,{
        method: 'GET',
        headers: {'Authorization': `Bearer ${LocalData.TokenAccess}`}
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.json()
        }
    })
    .then((Data)=>{
            const TodosParticipantes = [];
            const TodosID = [];
            const TodoGetTodosUsuarios = [];

            Data.data?.forEach((dt)=>{
                TodosID.push({
                    userEventId:dt.id,
                    checkin:dt.checkin,
                    user_id:dt.user_id
                })
            });

            DatosPartG.forEach( D => {
                TodosParticipantes.push(D)
            });

            TodosParticipantes.forEach((D)=>{
                if((TodosID.filter(t => t.user_id == D.id && t.checkin != null).length > 0)){
                    D.Registrado = true;
                    TodoGetTodosUsuarios.push(D)
                }else if((TodosID.filter(t => t.user_id == D.id && t.checkin == null).length > 0)){
                    TodosID.filter((U)=>{
                        if(U.user_id == D.id){
                            D.userEventId = U.userEventId
                        }
                    });
                    D.Registrado = false;
                    TodoGetTodosUsuarios.push(D)
                }else if((TodosID.filter(t => t.user_id != D.id).length > 0)){
                    D.Registrado = null;
                    TodoGetTodosUsuarios.push(D)
                   
                }else if(TodosID.length === 0){
                    D.Registrado = null;
                    TodoGetTodosUsuarios.push(D)
                }
            });
        

        if((TodoGetTodosUsuarios.length > 0 && TextSearch == '') && FiltroEstado == 'Todos los usuarios'){
            setDatosParticipantes(TodoGetTodosUsuarios);
        }else if(TodoGetTodosUsuarios.length > 0 && TextSearch != ''){
                const TodosEnBuscador = [];

            if(FiltroBuscador === 'Email'){
                TodoGetTodosUsuarios.forEach((D)=>{
                    const NombreCompleto = D.email;
                    if(NombreCompleto.toUpperCase().includes(TextSearch.toUpperCase())){
                        TodosEnBuscador.push(D)
                    }
                })
            }else if(FiltroBuscador === 'Email'){
                TodoGetTodosUsuarios.forEach((D)=>{
                    const NombreCompleto = D.first_name + ' ' + D.last_name;
                    if(NombreCompleto.toUpperCase().includes(TextSearch.toUpperCase())){
                        TodosEnBuscador.push(D)
                    }
                }) 
            }

            if(TodosEnBuscador.length > 0){
                setDatosParticipantes(TodosEnBuscador)
            }else{
                setDatosParticipantes('')
            }
        }else if(FiltroEstado == 'Usuarios Inscritos'){
            const DatosFiltrados = [];
            TodoGetTodosUsuarios.forEach((Data)=>{
                 if(Data.Registrado === false){
                    DatosFiltrados.push(Data)
                }
            });

            if(DatosFiltrados.length > 0){
                setDatosParticipantes(DatosFiltrados)
            }else{
                setDatosParticipantes('')
            }
        }else if(FiltroEstado =='Participantes en el evento'){
            const DatosFiltrados = [];
            TodoGetTodosUsuarios.forEach((Data)=>{
                 if(Data.Registrado === true){
                    DatosFiltrados.push(Data)
                }
            });
            if(DatosFiltrados.length > 0){
                setDatosParticipantes(DatosFiltrados)
            }else{
                setDatosParticipantes('')
            }
        }else if(FiltroEstado == 'Usuarios no inscritos'){
            
            const DatosFiltrados = [];
            TodosParticipantes.forEach((Data)=>{
                 if(Data.Registrado === null){
                    DatosFiltrados.push(Data)
                }
            });
            if(DatosFiltrados.length > 0){
                setDatosParticipantes(DatosFiltrados)
            }else{
                setDatosParticipantes('')
            }
        };

    })
    .catch((Err)=>{
        console.log(Err)
    })
};

return({
    GetTodosUsuarios,
    DatosParticipantes,
    TextSearch,
    setTextSearch,
    FiltroBuscador,
    setFiltroBuscador,
    FiltroEstado,
    setFiltroEstado,
})
}