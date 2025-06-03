import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalNotInEvent } from "../../style/StyleNotInEvent";

export default function ModalNotInEvent({
    StatusModal,
    FuncionCancelar,
    Data,
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalNotInEvent.BodyContainer}>
            <View style={StyleModalNotInEvent.Blur}>

            </View>
            <View style={StyleModalNotInEvent.MainContainer}>
                <Image source={{uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${Data ? Data.Picture_Profile : 'No disponible'}`}}
                style={StyleModalNotInEvent.PictureImg}
                />
                <View style={StyleModalNotInEvent.ContainerText}>
                    <Text style={StyleModalNotInEvent.TextNameUser}>{ Data ? Data.firstName + ' ' + Data.lastName : 'No disponible'}</Text>
                    <Text style={StyleModalNotInEvent.TextId}>ID: {Data ? Data.Id : 'No disponible'}</Text>
                </View>
                <View style={{gap:10}}>
                    <TouchableOpacity style={StyleModalNotInEvent.btnConfirmarAsistencia}>
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