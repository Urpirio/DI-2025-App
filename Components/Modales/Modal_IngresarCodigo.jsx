import { TouchableOpacity,View,Text, Modal, Pressable, TextInput } from "react-native";


export default function Modal_IngresarCodigo({
    StatusModal,FunctionCloseModal
}) {


    
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View>
            <Pressable style={{
                height:'100%',
                filter:'blur(5px)',
                width:'100%',
                backgroundColor:'black',
                opacity:0.3
            }} onPress={FunctionCloseModal}>

            </Pressable>
            <View style={{
                position:'absolute',
                height:'100%',
                width:'100%',
                alignItems:'center',
                justifyContent:'center',
                padding:20,
            }}>
                <View style={{
                    borderWidth:1,
                    borderColor:'#ced4da',
                    height:'50%',
                    width:'100%',
                    borderRadius:10,
                    backgroundColor:'white',
                    boxShadow:'0px 0px 1px 0px gray',
                    justifyContent:'space-around',
                    alignItems:'center',
                    padding:10,
                    minHeight:300,
                }}>
                    <View style={{
                        height:150,
                        width:150,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:100,
                        backgroundColor:'#ced4da'
                    }}>
                        <Text style={{fontSize:50}}>🔍</Text>
                    </View>
                        <Text style={{fontSize:16,fontWeight:'500'}}>Ingresa tu código de verificación</Text>
                            <TextInput style={{
                                borderWidth:1,
                                width:'100%',
                                fontSize: 18,
                                borderRadius:10,
                                borderColor:'#ced4da',

                            }} placeholder="Codigo" placeholderTextColor={'#ced4da'} />
                            <TouchableOpacity style={{
                                width:'100%',
                                alignItems:'center',
                                justifyContent:'center',
                                paddingVertical:10,
                                borderRadius:10,
                                backgroundColor:'#023e8a'
                            }}>
                                <Text style={{color:'white',fontSize:16}}>Validar</Text>
                                {/* keyboardType="numeric" */}
                            </TouchableOpacity>

                </View>
            </View>
                
        </View>
    </Modal>
  )
}
