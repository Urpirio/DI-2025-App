import { Modal, View,Text,Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ModalUsuarioNoEncontrado({
    StatusModal,CloseModal,OpenIngresarCodigo
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:10
        }}>
            <TouchableOpacity onPress={()=>CloseModal()} style={{
                flex:1,
                filter:'blur(50px)',
                backgroundColor:'black',
                width:'100%',
                opacity:0.2
            }}>

            </TouchableOpacity>
            <View style={{
                borderWidth:1,
                borderColor:'gray',
                alignItems:'center',
                justifyContent:'space-between',
                padding:10,
                backgroundColor:'white',
                borderRadius:10,
                gap:20,
                width: '100%',
                position:'absolute'

            }}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image 
                    style={{height:100,width:100,objectFit:'contain',tintColor: 'red'}} 
                    source={require('../../../assets/IconCheckIn/x-circle.png')}/>

                    <Text style={{fontWeight: '400',fontSize:18}}>Usuario no encontrado</Text>
                </View>
                <View style={{width:'100%',gap:10}}>
                    <TouchableOpacity style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'center',
                        padding:10,
                        borderRadius:10,
                        backgroundColor:'#007AFF',
                    }} onPress={OpenIngresarCodigo}>
                        <Text style={{color:'white',fontWeight:'300'}}>Ingresar Codigo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'center',
                        padding:10,
                        borderRadius:10,
                        backgroundColor:'#6c757d',
                    }} onPress={()=>{
                        router.back();
                    }}>
                        <Text style={{color:'white',fontWeight:'300'}}>Volver a evento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
