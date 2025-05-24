import { Modal,Text,TouchableOpacity,View,Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { funcionCancelarCerrarSesion, StatusModalCerrarS } from "../app/_layout";

export default function ModalCerrarSesion() {

  return (
    <Modal visible={StatusModalCerrarS} transparent={true}>
        <View style={style.BodyContainer}>
            <Pressable style={{
                backgroundColor:'white', 
                opacity:0.5,
                filter:'blur(20px)',
                height:'100%',
                width:'100%',
                zIndex: 10,
            }} onPress={funcionCancelarCerrarSesion}></Pressable>
            <View style={style.containerModal}>
                <Text style={style.Question}>
                    ¿Estás seguro de que deseas cerrar sesión?
                </Text>
                <View style={style.containerBtns}>
                    <TouchableOpacity style={style.btnCerrarSesion}>
                        <Text style={{color:'white',fontWeight:'500'}}>Cerrar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnCancelar} 
                        onPress={funcionCancelarCerrarSesion}>
                        <Text style={{color:'white',fontWeight:'500'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
};

const style = StyleSheet.create({
    BodyContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    containerModal:{
        borderWidth:1,
        borderColor:'#ced4da',
        paddingVertical:10,
        gap:10,
        borderRadius:10,
        width:'100%',
        position:'absolute',
        backgroundColor:'white',
        paddingHorizontal:1,
        height:120,
        justifyContent:'space-around',
        alignItems:'center',
        zIndex:20
    },
    Question:{
        textAlign:'center',
        fontSize:18,
        color:'#023e8a',
        fontWeight:'600'
    },
    containerBtns:{
        flexDirection:'row',
        justifyContent:'space-between',
        // padding: 5,
        gap:10
    },
    btnCerrarSesion:{
        // borderWidth:1,
        paddingVertical:10,
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'#023e8a',
    },
    btnCancelar:{
        // borderWidth:1,
        paddingVertical:10,
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'#d00000',
    }
});
