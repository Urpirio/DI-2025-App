import { Modal, TouchableOpacity, View ,Text} from "react-native";

export default function ModalConectRed({
    StatusModal,OnPress,OnCancel
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:20
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
                borderWidth:1,
                borderColor:'#ced4da',
                padding:10,
                borderRadius:10,
                gap:10,
                position:'absolute',
                backgroundColor:'white',
            }}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'#ffc300',fontWeight:'600'}}>Conexión requerida</Text>
                    <Text style={{textAlign:'center',color:'gray'}}>
                        Para continuar, necesitas estar conectado a una red.
                        Por favor, verifica tu conexión y vuelve a intentarlo.
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{borderRadius:10,height:30,width:'48%',alignItems:'center',justifyContent:'center',backgroundColor:'#023e8a'}} onPress={OnPress}>
                        <Text style={{color:'white'}}>Reintentar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius:10,height:30,width:'48%',alignItems:'center',justifyContent:'center',backgroundColor:'#d00000'}} onPress={OnCancel}>
                        <Text style={{color:'white'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}
