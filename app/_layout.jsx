import { router, Stack, useRouter } from "expo-router";
import { Image, View,TouchableOpacity,Text, StatusBar } from "react-native";
import { StyleLayoutEvent } from "../style/StyleLayoutEvents";
import MenuProfile from "../Components/Menus/MenuProfile";
import { StyleLayoutHome } from "../style/StyleLayoutHome";
import useDeployPerfil from "../hooks/useDeployPerfil";
import useDeployCerrarSesion from "../hooks/useDeployCerrarSesion";
import { funcionRefresh } from "./Screens/ScreenHome";

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
                        paddingTop:150,
                        alignItems:'center',
                    }}>
                        <Image source={LogoOgtic}  style={{
                            tintColor:'#023e8a',
                            height:40,
                            objectFit:'contain'
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
                                    source={{uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${route.params.profile_picture}`}}/>
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

                            {'Boton para volver atras'}
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
                            {'Imagen de perfil'}
                            <TouchableOpacity onPress={DeployMenuPerfil}>
                                <Image style={StyleLayoutEvent.ImgProfile}
                                    source={{uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${route.params.profile_picture}`}}/>
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
        <Stack.Screen name="r" options={{
            header:({route})=>{
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
                            // FunctionChangeCamara('back');
                            Router.back();
                        }}>
                            <Image style={{height:50,width:50,tintColor:'#023e8a'}} 
                            source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:20,color:'#023e8a',fontWeight:'600'}}>
                            {route.params.NameLista}
                        </Text>
                    </View>
                )  
            }
        }}/>
        
    </Stack>
  )
};


