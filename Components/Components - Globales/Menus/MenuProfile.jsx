import { StyleSheet } from "react-native"
import { View,Pressable,TouchableOpacity,Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function MenuProfile({
    StyleMenuProfile,
    DeployProfileMenu,
    FCerrarSesion,
    FirstName,
    LastName,
}) {

    

  return (
    <View style={StyleMenuProfile}>
            <Pressable style={Style.PressableMenuProfile} onPressOut={DeployProfileMenu}>
                <View style={Style.ContainerBtnMenuProfile}>
                    <View style={Style.BtnMyProfile}>
                        <Text style={{color:'#007AFF',fontWeight:'600'}}>{FirstName[0]+ " " + LastName[0]}</Text>
                    </View>
                    <TouchableOpacity style={Style.BtnCloseSesion} onPress={FCerrarSesion}>
                        <Text style={{color:'#d00000',}}>Cerrar sesion</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
    </View>
  )
};

const Style = StyleSheet.create({
    PressableMenuProfile:{
        width:'100%',
        alignItems:'flex-end',
        zIndex:10,
    },
    ContainerBtnMenuProfile:{
        width:'50%',
        marginTop:87,
        backgroundColor:'white',
        gap:5,
        borderWidth:1,
        borderColor:'#ced4da',
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5,
        zIndex: 10,

    },
    BtnMyProfile:{
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:5, 
        
    },
    BtnCloseSesion:{
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'#dee2e6',
        
    }
})


