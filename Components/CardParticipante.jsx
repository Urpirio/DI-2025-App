import { View,Image,Text, TouchableOpacity } from "react-native";
import { StyleCardParticipantes } from "../style/StyleCardParticipantes";
import { useEffect, useState } from "react";

export default function CardParticipante({
    first_name,last_name,ImgPerfil,Email,IdPersona,CheckIn
}) {

    const ImageProfile = ImgPerfil 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${ImgPerfil}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;
    
    const FirstName = first_name.split(" ");
    const LastName = last_name.split(" ");
  
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
                         <Text style={CheckIn ? StyleCardParticipantes.TextNotInscrito : StyleCardParticipantes.TextInscrito}>{CheckIn ? 'No Evento' : 'Evento'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={CheckIn ? StyleCardParticipantes.btnAgregar : StyleCardParticipantes.BtnConfirmarAsistencia}>
                            <Text style={StyleCardParticipantes.TextBtns}>{CheckIn ? 'Agregar a Evento' : 'Confirmar Asistencia'}</Text>
                        </TouchableOpacity>
                    </View>
              </View>
            
    </View>
  )
}
