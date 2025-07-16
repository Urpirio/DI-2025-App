import { Image, Modal, TouchableOpacity, View,Text } from "react-native";
import { StyleModalPart } from "../../../style/Style - ScreenCheckIn/StyleModalPart";

export default function ModalUsuarioInscrito({
    StatusModal,FuncionOtraEntrada,FuncionVolver
}) {
  return (
    <Modal transparent={true} visible={StatusModal}>
       <View>
        <View style={StyleModalPart.Blur} >
                
        </View>
         <View style={StyleModalPart.BodyContainer}>
                
            <View style={StyleModalPart.MainContainer}>
                <View style={{alignItems:'center',gap:10}}>
                    <Image style={StyleModalPart.ImgCheck} 
                    source={require('../../../assets/IconCheckIn/Featured icon.png')}/>
                <View>
                    <Text style={{fontSize:18,fontWeight:'300'}}>
                        Entrada registrada correctamente
                    </Text>
                </View>
                </View>
                
                <View style={StyleModalPart.BtnContainer}>
                    <TouchableOpacity style={StyleModalPart.BtnRegistrar} onPress={FuncionOtraEntrada}>
                        <Text style={StyleModalPart.TextBtnRegistrar}>Nueva entrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleModalPart.BtnVolver} onPress={FuncionVolver}>
                        <Text style={StyleModalPart.TextBtnVolver}>Volver a evento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
       </View>
    </Modal>
  )
}
