import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalParticipante } from "../../style/StyleModalParticipante";



export default function ModalParticipante({
    StatusModal,
    FuncionCancelar,
    Data,
    TokenAccess,
    EventId,
    user_id,
}) {

        const ApiSpecificEvent = 'https://directus-prueba.dominicanainnova.gob.do/items/user_event/?filter[event_id][_eq]=';

    const ImageProfile = Data.Picture_Profile 
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${Data.Picture_Profile}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;


    const ConfirmarAsistencia = () => {
        const date = new Date();
        const ActualDay = date.getDay() + 1;
        const ActualMes = date.getMonth() + 1;
        const ActualAno = date.getFullYear();
        const ActualHora = date.getHours();
        const ActualMinutos = date.getMinutes();
        const ActualSegundos = date.getSeconds();

        const FechaActualC = ActualAno + "-" + `${(ActualMes > 1 && ActualMes < 9 ) ?
        `0${ActualMes}` :  ActualMes }` + "-" + `${(ActualDay > 1 && ActualDay < 9) ?
        `0${ActualDay}` : ActualDay}` + `T${ActualHora}:${ActualMinutos}:${ActualSegundos}`;

        //En procesos para terminar desde quue cesar me responda.
        fetch(ApiSpecificEvent + EventId,{
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${TokenAccess}`
            },
            body: JSON.stringify({
                user_id: user_id,
                checkin: FechaActualC,
                date_updated: FechaActualC,
            })
        })
        .then(respuesta => respuesta.json())
        .then((Data)=>{
           console.log(Data)
        })
        .catch((err)=>{
            console.error(err)
        });
        
        
    }

  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalParticipante.BodyContainer}>
            <View style={StyleModalParticipante.Blur}>

            </View>
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
