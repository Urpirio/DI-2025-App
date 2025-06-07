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
            <Pressable style={Style.PressableMenuProfile} onPress={DeployProfileMenu}>
                <View style={Style.ContainerBtnMenuProfile}>
                    <TouchableOpacity style={Style.BtnMyProfile}>
                        <Text style={{color:'#023e8a',fontSize:18,fontWeight:'600'}}>{FirstName[0]+ " " + LastName[0]}</Text>
                    </TouchableOpacity>
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
        paddingRight:10,
    },
    ContainerBtnMenuProfile:{
        width:'50%',
        marginTop:95,
        backgroundColor:'white',
        gap:5,
        borderWidth:1,
        borderColor:'#ced4da',
        borderRadius:10,
    },
    BtnMyProfile:{
        width:'100%',
        paddingVertical:10,
        borderRadius:5, 
        alignItems:'center',
        
    },
    BtnCloseSesion:{
        width:'100%',
        padding:10,
        borderBottomRightRadius:5,
        borderBottomLeftRadius: 5,
        alignItems:'center',
        // backgroundColor:'red'
    }
})


