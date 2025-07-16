import { useState } from "react";
import { TouchableOpacity,View,Text, Modal, Pressable, TextInput } from "react-native";


export default function Modal_IngresarCodigo({
    StatusModal,FunctionCloseModal,ValidarQR
}) {

    const [TextCd,setTextCd] = useState('');

    
  return (
    <Modal visible={StatusModal} transparent={true}>
        <View>
            <Pressable style={{
                height:'100%',
                width:'100%',
                backgroundColor:'white',
                opacity:0.1
            }} onPress={FunctionCloseModal}>

            </Pressable>
            <View style={{
                position:'absolute',
                height:'100%',
                width:'100%',
                justifyContent:'center',
                paddingHorizontal:20,
                paddingVertical:5,
            }}>
                <View style={{
                    borderWidth:1,
                    borderColor:'#ced4da',
                    height:'50%',
                    width:'100%',
                    borderRadius:10,
                    backgroundColor:'white',
                    boxShadow:'0px 0px 1px 0px gray',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:10,
                    minHeight:300,
                }}>
                    <View style={{justifyContent:'center',alignItems:'center',gap:10}}>
                        <View style={{
                        height:130,
                        width:130,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'100%',
                        backgroundColor:'#007bff2e'
                        }}>
                            <Text style={{fontSize:50}}>🔍</Text>
                        </View>
                        <Text style={{fontSize:16,fontWeight:'300'}}>
                            Ingresa tu código de verificación
                        </Text>
                    </View>
                            <TextInput style={{
                                borderWidth:1,
                                width:'100%',
                                fontSize: 18,
                                borderRadius:10,
                                borderColor:'#007bff2e',

                            }} placeholder="Codigo" placeholderTextColor={'#ced4da'} value={TextCd} onChangeText={setTextCd} maxLength={6}/>
                            <TouchableOpacity style={{
                                width:'100%',
                                alignItems:'center',
                                justifyContent:'center',
                                paddingVertical:10,
                                borderRadius:10,
                                backgroundColor:'#007AFF'
                            }} onPress={()=>ValidarQR({TextCode: TextCd})}>
                                <Text style={{color:'white',fontSize:16,fontWeight:'300'}}>Validar</Text>
                            </TouchableOpacity>

                </View>
            </View>
                
        </View>
    </Modal>
  )
}
