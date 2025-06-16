import { View,Image,Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { StyleCardParticipantes } from "../../style/StyleCardParticipantes";
import {  useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function CardPartGeneral({
    first_name,
    last_name,
    ImgPerfil,
    Email,
    IdPersona,
    CheckIn,
    userID,
    FuncionAutoR
}) {
    const LocalData = useLocalSearchParams();
    const [Loading,setLoading] = useState(false);
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ImageProfile = ImgPerfil 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${ImgPerfil}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;
    
    const FirstName = first_name ?  first_name.split(" ")[0] : '';
    const LastName = last_name ? last_name.split(" ")[0] : '';

    const AsistenciaStaff = () => {
        const date = new Date().toISOString();
        console.log(LocalData.StaffId);
        console.log(LocalData.TokenAccess);
        console.log(LocalData.IDEvents);
        console.log(userID);
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
            console.log(data)
            if(!data.errors){
                AsistenciaParticipante({Id: data.data.id})
            }
        })
        .catch((err)=>{
            console.error(err)
        })     
    };

    const AsistenciaParticipante = ({Id}) => {
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
            setLoading(false);
            FuncionAutoR();
        })
    };
  
  return (
    <View style={StyleCardParticipantes.BodyCard}>
                <View style={StyleCardParticipantes.ImageContainer}>
                    <Image style={StyleCardParticipantes.PerfilImg} 
                        source={{uri:ImageProfile}}
                        />
                </View>
                <View style={StyleCardParticipantes.MainContainer}>
                    <View style={StyleCardParticipantes.Section1C}>
                        <Text style={StyleCardParticipantes.TextNombre}>{FirstName} {LastName}</Text>
                        <Text style={StyleCardParticipantes.TextId}>ID {IdPersona ?  IdPersona : 'No disponible'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section2C}>
                         <Text>{Email ? Email : 'No disponible'}</Text>
                         <Text style={CheckIn ? StyleCardParticipantes.TextInscrito :  StyleCardParticipantes.TextNotInscrito}>{CheckIn ? 'Inscrito' : 'No Inscrito'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={StyleCardParticipantes.btnAgregar} onPress={()=>{
                            AsistenciaStaff();
                            setLoading(true);
                            
                        }}>
                            {Loading ? <ActivityIndicator size={'small'}/> : <Text style={StyleCardParticipantes.TextBtns}>Agregar a Evento</Text>}
                        </TouchableOpacity>
                    </View>
              </View>
            
    </View>
  )
}
