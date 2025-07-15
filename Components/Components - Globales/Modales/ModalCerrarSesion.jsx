import { Modal,Text,TouchableOpacity,View,Pressable } from "react-native";
import { funcionCancelarCerrarSesion, funcionCSesion } from "../../../app/_layout";
import { funcionChangeStateMenuPerfil } from "../../../app/_layout";
import {  useNavigation } from "expo-router";
import { funcionRefresh } from "../../../app/Screens/ScreenHome";
import { StyleModalCerrarSesion } from "../../../style/Style - Layout/StyleModalCerrarSesion";

export default function ModalCerrarSesion({StatusModal,FuncionGoBack}) {
const prueba = useNavigation();
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={StyleModalCerrarSesion.BodyContainer}>
            <Pressable style={{
                backgroundColor:'white', 
                opacity:0.5,
                height:'100%',
                width:'100%',
                zIndex: 10,
            }} onPress={funcionCancelarCerrarSesion}></Pressable>
            <View style={StyleModalCerrarSesion.containerModal}>
                <Text style={StyleModalCerrarSesion.Question}>
                    ¿Estás seguro de que deseas cerrar sesión?
                </Text>
                <View style={StyleModalCerrarSesion.containerBtns}>
                    <TouchableOpacity style={StyleModalCerrarSesion.btnCerrarSesion} onPress={()=>{
                        funcionChangeStateMenuPerfil();
                        funcionCancelarCerrarSesion();
                        funcionCSesion();

                        setTimeout(()=>{
                            prueba.goBack();
                        },200);
                        
                        
                    }}>
                        <Text style={{color:'white',fontWeight:'500'}}>Cerrar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleModalCerrarSesion.btnCancelar} 
                        onPress={()=>{funcionCancelarCerrarSesion();funcionRefresh();}}>
                        <Text style={{color:'white',fontWeight:'500'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
};


