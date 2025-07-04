import { router, Stack, useRouter } from "expo-router";
import { Image, View,TouchableOpacity,Text, StatusBar } from "react-native";
import MenuProfile from "../Components/Components - Globales/Menus/MenuProfile";
import { StyleLayoutEvent } from "../style/Style - Layout/StyleLayoutEvents";
import useDeployPerfil from "../hooks/hooks - Globales/useDeployPerfil";
import useDeployCerrarSesion from "../hooks/hooks - Globales/useDeployCerrarSesion";
import { funcionRefresh } from "./Screens/ScreenHome";
import { StyleLayoutHome } from "../style/Style - ScreenHome/StyleLayoutHome";

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
                        // alignItems:'center',
                        alignItems:'center'
                        // borderWidth:1
                    }}>
                        <Image source={LogoOgtic}  style={{
                            tintColor:'#023e8a',
                            height:40,
                            // width:150,
                            objectFit:'contain',
                            // borderWidth:1
                        }}/>
                    </View>
                )
            },
        }}/>
        <Stack.Screen name="Screens/ScreenForgetPassword/index" options={{
            header:()=>{
                return(
                    <View style={{
                        alignItems:'center',
                        height:100,
                        paddingHorizontal: 10,
                        justifyContent:'Flex-end',
                        backgroundColor:'white',
                        flexDirection:'row',
                        gap: 20,
                        paddingTop: StatusBar.currentHeight
                        }}>
                        <TouchableOpacity onPress={()=>{Router.navigate('../')}}>
                            <Image style={{height:50,width:50,tintColor:'#023e8a'}} 
                            source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:20,color:'#023e8a',fontWeight:'600'}}>
                            Recuperar cuenta
                        </Text>
                    </View>
                )
            },
            
        }}/>
        <Stack.Screen name="Screens/ScreenHome/index" options={{
            header:({route})=>{
                const FirstName = route.params.FirstName.split(" ");
                const LastName = route.params.LastName.split(" ");
                return(
                    <View style={{paddingTop: StatusBar.currentHeight,}}>
                        <View style={StyleLayoutHome.Header}>
                        <View>
                            <Text style={StyleLayoutHome.TitlesHeader}>Eventos</Text>
                        </View>
                            <TouchableOpacity onPress={DeployMenuPerfil}>
                                <Image style={StyleLayoutHome.ImgProfile}
                                    source={ route.params.profile_picture ? { uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${route.params.profile_picture}`} : require('../assets/IconHome/userImg.png')}/>
                            </TouchableOpacity>
                        </View>

                        <MenuProfile
                        StyleMenuProfile={StyleMenuProfile}
                        DeployProfileMenu={DeployMenuPerfil}
                        FCerrarSesion={()=>{
                            DeployModalCerrarS();
                            funcionRefresh();
                        }}
                        FirstName={FirstName}
                        LastName={LastName}
                        />
                    </View>
                )
            },
            
        }} />
        <Stack.Screen name="Screens/ScreenParticipantes/index" options={{
            header:({route})=>{

                const ArrayNombreEvento = route.params.NombreEvento.split('');
                const FirstName = route.params.FirstName.split(" ");
                const LastName = route.params.LastName.split(" ");

                return(
                    <View style={{paddingTop: StatusBar.currentHeight,}}>
                        <View style={StyleLayoutEvent.Header}>

                            <TouchableOpacity onPress={()=>{
                                Router.back();
                                if(!StatusMenuProfile){
                                    DeployMenuPerfil();
                                    
                                }
                            }}>
                                <Image style={StyleLayoutEvent.IconBack} 
                                source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                            </TouchableOpacity>
                            
                            <Text style={StyleLayoutEvent.TitlesHeader}>
                                {ArrayNombreEvento.length > 16 ?
                                    route.params.NombreEvento.slice(0,16) + '...'
                                    :
                                    route.params.NombreEvento.slice(0,16)
                                }
                            </Text>

                            <TouchableOpacity onPress={DeployMenuPerfil}>
                                <Image style={StyleLayoutEvent.ImgProfile}
                                    source={ route.params?.profile_picture ? { uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${route.params.profile_picture}`} : require('../assets/IconHome/userImg.png')}/>
                            </TouchableOpacity>

                        </View>
                        <MenuProfile
                        StyleMenuProfile={StyleMenuProfile}
                        DeployProfileMenu={DeployMenuPerfil}
                        FCerrarSesion={()=>{
                            router.back();
                            DeployModalCerrarS();
                        }}
                        FirstName={FirstName}
                        LastName = {LastName}
                        />
                    </View>
                )
            },
            
        }}/>

        <Stack.Screen name="Screens/ScreenCheckIn/CheckIn" options={{
            header:()=>{

                return(
                    <View style={{
                        alignItems:'center',
                        paddingHorizontal: 10,
                        justifyContent:'Flex-end',
                        backgroundColor:'white',
                        flexDirection:'row',
                        gap: 20,
                        paddingTop: StatusBar.currentHeight,
                        }}>
                        <TouchableOpacity onPress={()=>{
                            Router.back();  
                        }}>
                            <Image style={{height:50,width:50,tintColor:'#023e8a'}} 
                            source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:20,color:'#023e8a',fontWeight:'600'}}>
                            Scanner QR
                        </Text>
                    </View>
                )
            },
        }}/>
        
    </Stack>
  )
};


