import { Image, Modal, TouchableOpacity, View,Text } from "react-native";

export default function ModalParticipante({
    StatusModal,
    FuncionCancelar,
    Data,
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <View style={{
                flex:1,
                filter:'blur(50px)',
                backgroundColor:'black',
                width:'100%',
                opacity:0.1
            }}>

            </View>
            <View style={{
                backgroundColor:'white',
                padding:10,
                borderRadius:10,
                position:'absolute',
                }}>
                <Image source={{uri:'https://i.pinimg.com/736x/d0/26/79/d026798534eac7d6db5006f0d8673946.jpg'}}
                style={{height:250,width:250,objectFit:'cover',borderRadius:10}}
                />
                <View style={{padding:10}}>
                    <Text style={{textAlign:'center',fontSize:20,fontWeight:'500'}}>Nelson Javier</Text>
                    <Text style={{textAlign:'center',color:'gray'}}>ID: 3043494</Text>
                </View>
                <View style={{gap:10}}>
                    <TouchableOpacity style={{
                    alignItems:'center',
                    padding:10,
                    borderRadius:5,
                    backgroundColor:'#023e8a'
                    }}>
                    <Text style={{color:'white',fontWeight:'600'}}>Confirmar Asitencia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                    alignItems:'center',
                    padding:10,
                    borderRadius:5,
                    backgroundColor:'#d00000'
                    }} onPress={FuncionCancelar}>
                    <Text style={{color:'white',fontWeight:'600'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
