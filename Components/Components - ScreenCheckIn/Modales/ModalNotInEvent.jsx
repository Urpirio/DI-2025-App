import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalNotInEvent } from "../../../style/Style - ScreenCheckIn/StyleNotInEvent";
import { GlobalApis } from "../../../Apis/GlobalApis";

export default function ModalNotInEvent({
    StatusModal,
    FuncionCancelar,
    Data,
    EventId,
    TokenAccess,
    StaffID,
    FuncionExitoso,

}) {


    const ImageProfile = Data.Picture_Profile 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${Data.Picture_Profile}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;


    const AsistenciaStaff = () => {
        const date = new Date().toISOString();

        fetch(GlobalApis.ApiUser_Event,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({
                checkin: date,
                user_id: StaffID,
                event_id: EventId,
            })
        })
        .then(respuesta => respuesta.json()).then((data)=>{
            if(!data.errors){
                AsistenciaParticipante({Id: data.data.id})
            }
        })
        .catch((err)=>{
            console.error(err)
        })     
    };

    const AsistenciaParticipante = ({Id}) => {
        fetch(GlobalApis.ApiUser_Event + Id ,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({
                user_id: Data.Id,
            })
        })
        .then(respuesta => {
            if(respuesta.ok){
                FuncionCancelar();
                FuncionExitoso();
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    };

    




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
                    <TouchableOpacity style={StyleModalNotInEvent.btnConfirmarAsistencia} onPress={AsistenciaStaff}>
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