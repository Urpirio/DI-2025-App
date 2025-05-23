import { SafeAreaProvider } from "react-native-safe-area-context";
import { CameraView,useCameraPermissions,CameraType } from "expo-camera";
import { useState } from "react";
import { TouchableOpacity,View,Text} from "react-native";
import { useRouter } from "expo-router";
import Modal_IngresarCodigo from "../../Components/Modal_IngresarCodigo";
import { BackHandler } from "react-native";

export default function CheckIn() {

    const router = useRouter();
    const [WhatCamera,setWhatCamera] = useState('back');
    const [HavePermission,setHavePermission] = useCameraPermissions();
    const [StatusModalIngCodigo,setStatusModalIngCodigo] = useState(false);

    if(!HavePermission){
        return(
            <View/>
        )
    }

    if(!HavePermission.granted){
        return(
            <SafeAreaProvider style={{
                backgroundColor:'white',
                alignItems:'center',
                justifyContent:'flex-start',
                gap:50,
                paddingTop: 50,
                }}>
                <View style={{
                    // height:'50%',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    paddingHorizontal:10
                }}>
                    <Text style={{textAlign:'center',fontSize:20,color:'#023e8a',fontWeight:'600'}}>
                        ¿Nos permites acceder a tu cámara?
                    </Text>
                    <Text style={{textAlign:'center',fontSize:14,color:'gray'}}>
                        Usamos la cámara únicamente para escanear códigos QR y así mejorar tu experiencia dentro de la app.
                    </Text>
                </View>
                <View style={{
                    // height:'50%',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'flex-start',
                    width:'100%',
                    paddingHorizontal:20,
                    gap:10,
                }}>

                    

                    <TouchableOpacity style={{
                        // borderWidth:1,
                        width:'50%',
                        paddingVertical:10,
                        alignItems:'center',
                        borderRadius:10,
                        backgroundColor:'#023e8a'
                    }} onPress={()=>{
                        setHavePermission(!HavePermission)
                    }}>
                        <Text style={{color:'white'}}>Permitir acceso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        // borderWidth:1,
                        width:'50%',
                        paddingVertical:10,
                        alignItems:'center',
                        borderRadius:10,
                        backgroundColor:'#d00000'
                    }} 
                        onPress={()=>{router.back();}}>
                        <Text style={{color:'white'}}>Ahora no</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        )
    };


    return (
        <SafeAreaProvider>
            <CameraView facing={WhatCamera}  onBarcodeScanned={(Data)=>{
                // console.log(Data)
            }} style={{flex:1}}/>
             <View style={{flex:1,position:'absolute',height:'100%'}}>
                    <View style={{height:'25%',backgroundColor:'black',opacity:0.1}}>

                    </View>
                    <View style={{flexDirection:'row',height:'30%'}}>
                        <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}>

                        </View>
                        <View style={{width:'70%',justifyContent:'space-between'}}>
                            <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{height:'50%',width:'25%',borderLeftWidth:5,borderTopWidth:5,borderColor:'#023e8a'}}></View>
                                <View style={{height:'50%',width:'25%',borderRightWidth:5,borderTopWidth:5,borderColor:'#023e8a'}}></View>
                            </View>
                            <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                                <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderLeftWidth:5,borderColor:'#023e8a'}}></View>
                                <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderRightWidth:5,borderColor:'#023e8a'}}></View>
                            </View>
                        </View>
                        <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}>

                        </View>
                    </View>
                    <View style={{height:'50%',backgroundColor:'black',opacity:0.1}}>

                    </View>
                </View>
                <View style={{
                    position:'absolute',
                    width:'100%',
                    height:'100%',
                    justifyContent:'flex-end',
                    alignItems:'center',
                    paddingBottom:50,
                }}>
                    <TouchableOpacity style={{
                        // borderWidth:1,
                        paddingVertical:15,
                        paddingHorizontal:50,
                        borderRadius:30,
                        backgroundColor:'#023e8a'
                    }} onPress={()=>{setStatusModalIngCodigo(!StatusModalIngCodigo)}}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Ingresar codigo</Text>
                    </TouchableOpacity>
                </View>

                <Modal_IngresarCodigo
                StatusModal={StatusModalIngCodigo}
                FunctionCloseModal={()=>{
                    setStatusModalIngCodigo(!StatusModalIngCodigo)
                }}
                />
               
        </SafeAreaProvider>
    ) 
};
