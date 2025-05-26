import { View,Image,Text, TouchableOpacity } from "react-native";
import { StyleCardParticipantes } from "../style/StyleCardParticipantes";
import { useEffect, useState } from "react";

export default function CardParticipante({
    Nombre,Apellido,ImgPerfil,Email,IdPersona,CheckIn
}) {
  
  return (
    <View style={StyleCardParticipantes.BodyCard}>
                <View style={StyleCardParticipantes.ImageContainer}>
                    <Image style={StyleCardParticipantes.PerfilImg} 
                        source={{uri:ImgPerfil}}
                        />
                </View>
                <View style={StyleCardParticipantes.MainContainer}>
                    <View style={StyleCardParticipantes.Section1C}>
                        <Text style={StyleCardParticipantes.TextNombre}>{Nombre} {Apellido}</Text>
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
