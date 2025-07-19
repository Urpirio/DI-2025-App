import { Stack, useRouter } from "expo-router";
import { Image, View,TouchableOpacity,Text, StatusBar } from "react-native";
import useDeployPerfil from "../hooks/hooks - Globales/useDeployPerfil";
import useDeployCerrarSesion from "../hooks/hooks - Globales/useDeployCerrarSesion";

export let CheckMenuPerfil;
export let funcionChangeStateMenuPerfil;

export let StatusModalCerrarS;
export let funcionCancelarCerrarSesion;
export let CerrarSesion;
export let funcionCSesion;

export default function _layout() {

  const Router = useRouter();
  const LogoOgtic = require('../assets/Login/Capa_1 (7).png');

  

  const { DeployModalCerrarS, StateCerrarS,CS,cerrarSesion } = useDeployCerrarSesion();
  StatusModalCerrarS = StateCerrarS;
  funcionCancelarCerrarSesion = DeployModalCerrarS;
  CerrarSesion = cerrarSesion;
  funcionCSesion = CS;
  

  const { StyleMenuProfile,StatusMenuProfile,DeployMenuPerfil} = useDeployPerfil();
  CheckMenuPerfil = StatusMenuProfile;
  funcionChangeStateMenuPerfil = DeployMenuPerfil;



  return (
    <Stack>
        <Stack.Screen name="index" options={{
            header:()=>{
                return(
                    <View style={{
                        backgroundColor:'white',
                        paddingHorizontal:0,
                        paddingTop:120,
                        alignItems:'center'
                    }}>
                        <Image source={LogoOgtic}  style={{
                            tintColor:'#0059b8ff',
                            height:40,
                            objectFit:'contain',
                        }}/>
                    </View>
                )
            },
        }}/>
        <Stack.Screen name="Screens/ScreenHome/index" options={{
            header:()=>{return <View style={{height:30}}/>}
            
        }} />
        <Stack.Screen name="Screens/ScreenParticipantes/index" options={{
            header:()=>{
                return(
                    <View style={{height:30}}/>
                )
            },
            
        }}/>

        <Stack.Screen name="Screens/ScreenCheckIn/CheckIn" options={{
            animation:'slide_from_bottom',
            header:()=>{

                return(
                    <View >
                        <View style={{height:30}}/>
                        <View style={{
                        alignItems:'center',
                        paddingHorizontal: 10,
                        justifyContent:'Flex-end',
                        backgroundColor:'white',
                        flexDirection:'row',
                        gap: 20,
                        }}>
                            <TouchableOpacity onPress={()=>Router.back()}>
                            <Image style={{height:50,width:50,tintColor:'#007AFF'}} 
                            source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                            </TouchableOpacity>
                            <Text style={{fontSize:20,color:'#007AFF',fontWeight:'600'}}>
                                Scanner QR
                            </Text>
                        </View>
                    </View>
                )
            },
        }}/>
        <Stack.Screen name="Screens/Modals/ModalsAboutEvents" options={{
            presentation:'transparentModal',
            animation:'slide_from_bottom',
            header:()=>{
                return <View style={{height:30}}/>
            },
            
        }}/>
        <Stack.Screen name="Screens/Modals/ModalCerrarSesion" options={{
            presentation:'transparentModal',
            animation:'slide_from_left',
            header:()=>{
                return <View style={{height:30}}/>
            },
        }}/>
        <Stack.Screen name="Screens/Modals/ModalRegistrarAsistencia" options={{
            presentation:'transparentModal',
            animation:'fade',
            header:()=><View style={{height:30}}/>,
        }}/>
        
    </Stack>
  )
};


