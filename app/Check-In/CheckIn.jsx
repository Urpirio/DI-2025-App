import { SafeAreaProvider } from "react-native-safe-area-context";
import { CameraView,useCameraPermissions,CameraType,Camera } from "expo-camera";
import { useState } from "react";
import { TouchableOpacity,View,Text, Modal, Pressable, Image} from "react-native";
import { useRouter } from "expo-router";
import Modal_IngresarCodigo from "../../Components/Modal_IngresarCodigo";
import { StatusBar } from "expo-status-bar";
import QR_Mask from "../../Components/QR_Mask";
import { StyleCheckIn } from "../../style/StyleCheckIn";
import { funcionRefreshScanner, ModalRefresh, StateRefreshScanner } from "../_layout";

export default function CheckIn() {

    const router = useRouter();
    const [DataQr,setDataQr] = useState(null);
    const [WhatCamera,setWhatCamera] = useState('back');
    const [HavePermission,setHavePermission] = useCameraPermissions();
    const [StatusModalIngCodigo,setStatusModalIngCodigo] = useState(false);


    // const Refresh = () => {

    // }

    if(!HavePermission){
        return(
            <View/>
        )
    };

    if(!HavePermission.granted){
        return(
            <SafeAreaProvider style={StyleCheckIn.ContainerPermissionCamara}>
                <View style={StyleCheckIn.ContainerTextPermission}>
                    <Text style={StyleCheckIn.MainTextPermission}>
                        ¿Nos permites acceder a tu cámara?
                    </Text>
                    <Text style={StyleCheckIn.SubTextPermission}>
                        Usamos la cámara únicamente para escanear códigos QR y así mejorar tu experiencia dentro de la app.
                    </Text>
                </View>
                <View style={StyleCheckIn.ContainerBtnPermission}>

                    

                    <TouchableOpacity style={StyleCheckIn.BtnPermission} 
                        onPress={()=>{
                            setHavePermission(!HavePermission);
                        }}>
                        <Text style={{color:'white'}}>Permitir acceso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleCheckIn.BtnNotPermission} 
                        onPress={()=>{
                            router.back();
                            alert(HavePermission.status)
                        }}>
                        <Text style={{color:'white'}}>Ahora no</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        )
    };

    


    return (
        <SafeAreaProvider>
        {StateRefreshScanner ? <CameraView facing={WhatCamera}  onBarcodeScanned={(Data)=>{}} style={{flex:1}} Flash = "auto" /> : <View/>}
                <QR_Mask/>

                <View style={StyleCheckIn.containerBtns}>
                    <TouchableOpacity style={StyleCheckIn.BtnIngresarCodigo} 
                        onPress={()=>{
                            setStatusModalIngCodigo(!StatusModalIngCodigo)
                        }}>
                        <Text style={StyleCheckIn.TextBtnIngresarCodigo}>Ingresar codigo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleCheckIn.BtnVerparticipantes} 
                        onPress={()=>{
                            router.navigate('Participantes/ListaPart')
                        }}>
                        <Text style={StyleCheckIn.TextBtnVerparticipantes}>Ver participantes</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <Modal_IngresarCodigo
                StatusModal={StatusModalIngCodigo}
                FunctionCloseModal={()=>{setStatusModalIngCodigo(!StatusModalIngCodigo)}}
                />

                <Modal visible={ModalRefresh} transparent={true}>
                    <View style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <View style={{height:'100%',width:'100%',zIndex:10}}>

                        </View>
                        <Pressable style={{
                            borderWidth:1,
                            borderColor:'#ced4da',
                            borderRadius:100,
                            padding:10,
                            position:'absolute',
                            backgroundColor:'white',
                            zIndex:30,
                            boxShadow:'0px 0px 1px 0px gray'
                        }} onPress={()=>{funcionRefreshScanner();router.navigate('Check-In/CheckIn')}}>
                            <Image style={{height:50,width:50,objectFit:'contain'}} source={require('../../assets/IconEvent/refresh-ccw.png')}/>
                        </Pressable>
                    </View>
                </Modal>
               <StatusBar style="auto"/>
        </SafeAreaProvider>
    ) 
};
