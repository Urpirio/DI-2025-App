import { Modal, TouchableOpacity, View ,Text} from "react-native";

export default function ModalConnectRed({
    StatusModal,OnPress,OnCancel
}) {
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            }}>
            <View style={{
                    flex:1,
                    backgroundColor:'gray',
                    width:'100%',
                    opacity:0.3}}>
            
            </View>
            <View style={{paddingHorizontal:30,position:'absolute',}}>
                <View style={{
                borderWidth:1,
                borderColor:'#ced4da',
                padding:10,
                borderRadius:10,
                gap:20,
                backgroundColor:'white',
            }}>
                <View style={{justifyContent:'center',alignItems:'center',gap:5}}>
                    <Text style={{fontSize:22,color:'#ff9900ff',fontWeight:'400'}}>Conexión requerida</Text>
                    <Text style={{textAlign:'center',color:'gray',fontWeight:'300'}}>
                        Para continuar, necesitas estar conectado a una red.
                        Por favor, verifica tu conexión y vuelve a intentarlo.
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{borderRadius:10,height:30,width:'48%',alignItems:'center',justifyContent:'center',backgroundColor:'#007AFF'}} onPress={OnPress}>
                        <Text style={{color:'white'}}>Reintentar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius:10,height:30,width:'48%',alignItems:'center',justifyContent:'center',backgroundColor:'#d00000c4'}} onPress={OnCancel}>
                        <Text style={{color:'white'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    </Modal>
  )
}
