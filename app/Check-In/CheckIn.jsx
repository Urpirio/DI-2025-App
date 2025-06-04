import { SafeAreaProvider } from "react-native-safe-area-context";
import { CameraView,useCameraPermissions,CameraType } from "expo-camera";
import { useState } from "react";
import { TouchableOpacity,View,Text} from "react-native";
import { useRouter,useLocalSearchParams } from "expo-router";
import Modal_IngresarCodigo from "../../Components/Modales/Modal_IngresarCodigo";
import { StatusBar } from "expo-status-bar";
import QR_Mask from "../../Components/Masks/QR_Mask";
import { StyleCheckIn } from "../../style/StyleCheckIn";
import Modalloading from "../../Components/Modales/Modalloading";
import ModalParticipante from "../../Components/Modales/ModalParticipante";
import ModalNoMatch from "../../Components/Modales/ModalNoMatch";
import useValidate from "../../func/CheckIn/useValidate";
import ModalNotInEvent from "../../Components/Modales/ModalNotInEvent";


export default function CheckIn() {

    const router = useRouter();
    const [DataQr,setDataQr] = useState(null);
    const [WhatCamera,setWhatCamera] = useState('back');
    const [HavePermission,setHavePermission] = useCameraPermissions();
    
    
    const LocalData = useLocalSearchParams();
    const { 
        CodeScanned,
        Loading,
        StatusPar,
        ResetStatusPar,
        DataUsers,
        NoMatchUser,
        CloseError,
        NotInEvent,
        setNotInEvent,
        StatusModalIngCodigo,
        setStatusModalIngCodigo,
    } = useValidate();

  
  
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
            
            <CameraView facing={WhatCamera} onBarcodeScanned={(Data)=>{
                CodeScanned({DataScanned:Data,TokenUser: LocalData.TokenAccess,EventId: LocalData.IDEvents})
                }} style={{flex:1}} Flash = "auto" />
                
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
                            router.navigate({pathname: 'Participantes/ListaPart',params:{
                                NameLista:'Participantes',WhatList: true,TokenAccess: LocalData.TokenAccess,
                                IDEvents: LocalData.IDEvents
                            }});
                        }}>
                        <Text style={StyleCheckIn.TextBtnVerparticipantes}>Ver participantes</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <Modal_IngresarCodigo
                StatusModal={StatusModalIngCodigo}
                FunctionCloseModal={()=>{
                    setStatusModalIngCodigo(!StatusModalIngCodigo)
                }}
                ValidarQR={({TextCode})=>{
                    CodeScanned({DataScanned: {data: TextCode},TokenUser: LocalData.TokenAccess,EventId: LocalData.IDEvents})
                }}
                />

                <Modalloading StatusLoading={Loading}/>
                
                <ModalParticipante 
                    StatusModal={StatusPar}
                    FuncionCancelar={ResetStatusPar}
                    Data={DataUsers}
                    
                />

                <ModalNoMatch 
                StatusModal={NoMatchUser}
                CloseModal={CloseError}
                OpenIngresarCodigo={()=>{
                    CloseError();
                    setStatusModalIngCodigo(!StatusModalIngCodigo);
                }}
                />
                <ModalNotInEvent
                    StatusModal={NotInEvent}
                    FuncionCancelar={()=>{
                        setNotInEvent(false);
                    }}
                    Data={DataUsers}
                />

               <StatusBar style="auto"/>
        </SafeAreaProvider>
    ) 
};
