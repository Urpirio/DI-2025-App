import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalPart } from "../../style/StyleModalPart2";

export default function Modal_Registrado({
    StatusModal,FuncionOtraEntrada,FuncionVolver
}) {
  return (
    <Modal transparent={true} visible={StatusModal}>
       <View>
        <View style={StyleModalPart.Blur} >
                
        </View>
         <View style={StyleModalPart.BodyContainer}>
                
            <View style={StyleModalPart.MainContainer}>
                <Image style={StyleModalPart.ImgCheck} 
                    source={require('../../assets/IconCheckIn/CheckIn.png')}/>
                <View>
                    <Text style={{fontSize:20}}>
                        Entrada registrada correctamente
                    </Text>
                </View>
                <View style={StyleModalPart.BtnContainer}>
                    <TouchableOpacity style={StyleModalPart.BtnRegistrar} onPress={FuncionOtraEntrada}>
                        <Text style={StyleModalPart.TextBtnRegistrar}>Registrar otra entrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleModalPart.BtnVolver} onPress={FuncionVolver}>
                        <Text style={StyleModalPart.TextBtnVolver}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
       </View>
    </Modal>
  )
}
