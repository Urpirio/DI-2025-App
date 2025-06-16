import { View,Image,Text, TouchableOpacity,ActivityIndicator } from "react-native";
import { StyleCardParticipantes } from "../../style/StyleCardParticipantes";
import { useState } from "react";

export default function CardParticipante({
    first_name,
    last_name,
    ImgPerfil,
    Email,
    IdPersona,
    CheckIn,
    user_id,
    TokenAccess,
    funcionRefresh,
}) {

    const [Loading,setLoading] = useState(false);
    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ImageProfile = ImgPerfil 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${ImgPerfil}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;
    
    const FirstName = first_name ? first_name.split(" ")[0] : '';
    const LastName = last_name ? last_name.split(" ")[0] : '';

    const ConfirmarAsistencia = () => {

        setLoading(true);
        const date = new Date().toISOString();

        fetch(ApiSpecificEvent + user_id,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({checkin: date})
        })
        .then(respuesta => respuesta.json())
        .then(Data =>{
            console.log(Data);
            console.log(TokenAccess);
            console.log(user_id);
        })
        .catch((err)=>{
            console.error(err)
        }) 
        .finally(()=>{
            setLoading(false)
            funcionRefresh();
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
                        <Text style={StyleCardParticipantes.TextId}>ID {IdPersona ? IdPersona : 'No disponible'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section2C}>
                         <Text>{Email ? Email : 'No disponible'}</Text>
                         <Text style={CheckIn ? StyleCardParticipantes.TextInscrito :  StyleCardParticipantes.TextNotInscrito}>{CheckIn ? 'Registrado' : 'No registrado'}</Text>
                    </View>
                    {CheckIn ? <View/> : <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={StyleCardParticipantes.BtnConfirmarAsistencia} onPress={ConfirmarAsistencia} >
                           { Loading ? <ActivityIndicator size={'small'}/> :
                            <Text style={StyleCardParticipantes.TextBtns}>Confirmar Asistencia</Text>
                            }
                        </TouchableOpacity>
                    </View>}
              </View>
            
    </View>
  )
}
