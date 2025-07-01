import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalParticipante } from "../../style/StyleModalParticipante";



export default function ModalParticipante({
    StatusModal,
    FuncionCancelar,
    Data,
    TokenAccess,
    EventId,
    user_id,
    FuncionRegistrado
}) {

    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ImageProfile = Data.Picture_Profile 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${Data.Picture_Profile}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;


    const ConfirmarAsistencia = () => {
        const date = new Date().toISOString();


        fetch(ApiSpecificEvent + user_id,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({checkin: date})
        })
        .then(respuesta => {
            if(respuesta.ok){
                FuncionRegistrado();
            }
        })
        .catch((err)=>{
            console.error(err)
        })     
    };

  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalParticipante.BodyContainer}>
            <View style={StyleModalParticipante.Blur}></View>
            <View style={StyleModalParticipante.MainContainer}>
                <Image source={{uri:ImageProfile}}
                style={StyleModalParticipante.PictureImg}
                />
                <View style={StyleModalParticipante.ContainerText}>
                    <Text style={StyleModalParticipante.TextNameUser}>{ Data ? Data.firstName + ' ' + Data.lastName : 'No disponible'}</Text>
                    <Text style={StyleModalParticipante.TextId}>ID: {Data ? Data.Id : 'No disponible'}</Text>
                </View>
                <View style={{gap:10}}>
                    <TouchableOpacity style={StyleModalParticipante.btnConfirmarAsistencia} onPress={()=>{
                        ConfirmarAsistencia();
                    }}>
                        <Text style={StyleModalParticipante.TextbtnConfirmarAsistencia}>Confirmar Asitencia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleModalParticipante.BtnCancelar} 
                        onPress={FuncionCancelar}>
                        <Text style={StyleModalParticipante.TextBtnCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
