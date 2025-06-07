import { View,Image,Text, TouchableOpacity } from "react-native";
import { StyleCardParticipantes } from "../../style/StyleCardParticipantes";
import { useEffect, useState } from "react";

export default function CardPartGeneral({
    first_name,last_name,ImgPerfil,Email,IdPersona,CheckIn,EventID,userID,TokenAccess
}) {

    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]=';

    const ImageProfile = ImgPerfil 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${ImgPerfil}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;
    
    const FirstName = first_name.split(" ");
    const LastName = last_name.split(" ");

//En proceso para continuar
    const AddNewPart = () => {
        fetch(ApiSpecificEvent + EventID,{
            method:'POST',
            headers:{
                'Authorization': `Bearer ${TokenAccess}`
            },
            body:JSON.stringify({
                user_id: userID,
            })
        })
        .then(respuesta => respuesta.json())
        .then((Data)=>{
            console.log(Data)
        })
        .catch((err)=>{
            console.log(err)
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
                        <Text style={StyleCardParticipantes.TextNombre}>{FirstName[0]} {LastName[0]}</Text>
                        <Text style={StyleCardParticipantes.TextId}>ID {IdPersona}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section2C}>
                         <Text>{Email}</Text>
                         <Text style={CheckIn ? StyleCardParticipantes.TextInscrito :  StyleCardParticipantes.TextNotInscrito}>{CheckIn ? 'Inscrito' : 'No Inscrito'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={StyleCardParticipantes.btnAgregar} onPress={()=>{
                            AddNewPart();
                            console.log('fucniona')
                        }}>
                            <Text style={StyleCardParticipantes.TextBtns}>{'Agregar a Evento' }</Text>
                        </TouchableOpacity>
                    </View>
              </View>
            
    </View>
  )
}
