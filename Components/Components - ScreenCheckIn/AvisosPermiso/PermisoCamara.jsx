import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleCheckIn } from "../../../style/Style - ScreenCheckIn/StyleCheckIn";
import { View,Text,TouchableOpacity, } from "react-native";


export default function PermisoCamara({
    setHavePermission,
    router,
}) {
  return (
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
                        onPress={setHavePermission}>
                        <Text style={{color:'white'}}>Permitir acceso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={StyleCheckIn.BtnNotPermission} 
                        onPress={()=>{
                            router.back();
                        }}>
                        <Text style={{color:'white'}}>Ahora no</Text>
                    </TouchableOpacity>
                </View>
    </SafeAreaProvider>    
  )
}
