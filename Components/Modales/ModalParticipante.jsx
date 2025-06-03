import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalParticipante } from "../../style/StyleModalParticipante";



export default function ModalParticipante({
    StatusModal,
    FuncionCancelar,
    Data,
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalParticipante.BodyContainer}>
            <View style={StyleModalParticipante.Blur}>

            </View>
            <View style={StyleModalParticipante.MainContainer}>
                <Image source={{uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${Data ? Data.Picture_Profile : 'No disponible'}`}}
                style={StyleModalParticipante.PictureImg}
                />
                <View style={StyleModalParticipante.ContainerText}>
                    <Text style={StyleModalParticipante.TextNameUser}>{ Data ? Data.firstName + ' ' + Data.lastName : 'No disponible'}</Text>
                    <Text style={StyleModalParticipante.TextId}>ID: {Data ? Data.Id : 'No disponible'}</Text>
                </View>
                <View style={{gap:10}}>
                    <TouchableOpacity style={StyleModalParticipante.btnConfirmarAsistencia}>
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
