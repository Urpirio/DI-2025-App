import { Modal, View,Text,Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ModalNoMatch({
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
                justifyContent:'space-around',
                padding:10,
                backgroundColor:'white',
                borderRadius:10,
                width: '100%',
                height:300,
                position:'absolute'

            }}>
                <Image style={{height:100,width:100,objectFit:'contain',tintColor: 'red'}} source={require('../../../assets/IconCheckIn/x-circle.png')}/>
                <Text style={{fontWeight: '600',fontSize:18}}>Usuario no encontrado</Text>
                <View style={{width:'100%',gap:10}}>
                    <TouchableOpacity style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'center',
                        padding:10,
                        borderRadius:10,
                        backgroundColor:'#023e8a',
                    }} onPress={OpenIngresarCodigo}>
                        <Text style={{color:'white',fontWeight:'500'}}>Ingresar Codigo</Text>
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
                        <Text style={{color:'white',fontWeight:'500'}}>Volver a evento</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
