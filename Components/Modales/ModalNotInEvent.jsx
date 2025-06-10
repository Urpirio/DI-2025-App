import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalNotInEvent } from "../../style/StyleNotInEvent";

export default function ModalNotInEvent({
    StatusModal,
    FuncionCancelar,
    Data,
    EventId,
    TokenAccess

}) {

    

    const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/';

    const ImageProfile = Data.Picture_Profile 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${Data.Picture_Profile}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;


    const ConfirmarAsistencia = () => {
        const date = new Date().toISOString();

        fetch(ApiSpecificEvent,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({
                checkin: date,
                user_id: Data.Id,
                event_id: EventId,
            })
        })
        .then(respuesta => respuesta.json()).then((data)=>{
            console.log(data)
            console.log(Data.Id)
        })
        .catch((err)=>{
            console.error(err)
        })     
    }

  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalNotInEvent.BodyContainer}>
            <View style={StyleModalNotInEvent.Blur}>

            </View>
            <View style={StyleModalNotInEvent.MainContainer}>
                <Image source={{uri:ImageProfile}}
                style={StyleModalNotInEvent.PictureImg}
                />
                <View style={StyleModalNotInEvent.ContainerText}>
                    <Text style={StyleModalNotInEvent.TextNameUser}>{ Data ? Data.firstName + ' ' + Data.lastName : 'No disponible'}</Text>
                    <Text style={StyleModalNotInEvent.TextId}>ID: {Data ? Data.ShortID : 'No disponible'}</Text>
                </View>
                <View style={{gap:10}}>
                    <TouchableOpacity style={StyleModalNotInEvent.btnConfirmarAsistencia} onPress={ConfirmarAsistencia}>
                        <Text style={StyleModalNotInEvent.TextbtnConfirmarAsistencia}>Agregar y Confirmar Asitencia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleModalNotInEvent.BtnCancelar} 
                        onPress={FuncionCancelar}>
                        <Text style={StyleModalNotInEvent.TextBtnCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}