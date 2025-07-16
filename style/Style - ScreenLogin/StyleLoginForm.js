import { StyleSheet } from "react-native";

export const StyleLoginForm = StyleSheet.create({
    Section1:{
        paddingVertical:20,
        paddingHorizontal:20,
        // backgroundColor:'#'
    },
    TextSection1:{
        fontSize:30,
        fontWeight:600,
        // textAlign:'center'
    },
    SectionForm:{
        padding:20,
    },
    InputEmail:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'#e9ecef',
        // borderWidth: 1,
        borderColor: '#adb5bd',
        intensity: 100
    },
    IconInputEmail:{
        height:30,
        width:30,
        tintColor: '#ced4da',
    },
    TextInput_Email:{
        fontSize:16,
        width:'90%',
                
    },
    InputEmailBLue:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'#023e8a',
        // borderWidth: 1,
        borderColor: '#023e8a',
        intensity: 190

    },
    IconInputEmailBLue:{
        height:30,
        width:30,
        tintColor: '#023e8a',
    },
    TextInput_EmailBLue:{
        fontSize:16,
        width:'90%',
        color:'#f8f9fa',
                
    },
    InputPassword:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'#e9ecef',
        // borderWidth: 1,
        borderColor: '#adb5bd',
        intensity: 90
    },
    IconInputPassWord:{
        height:30,
        width:30,
        tintColor: '#ced4da',
    },
    TextInput_PassWord:{
        fontSize:16,
        color:'gray',
        width:'80%'
    },
    PressablePassWord:{

    },
    PressablePassWordIcon:{
        height:30,
        width:30,
        tintColor: '#ced4da',
    },
    InputPasswordBLue:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
       backgroundColor:'#023e8a',
        // borderWidth: 1,
        // borderColor: '#023e8a',
        intensity: 190
    },
    IconInputPassWordBLue:{
        height:30,
        width:30,
        tintColor: '#023e8a',
    },
    TextInput_PassWordBLue:{
        fontSize:16,
        color:'#f8f9fa',
        width:'80%'
    },
    PressablePassWordBLue:{

    },
    PressablePassWordIconBLue:{
        height:30,
        width:30,
        tintColor: '#023e8a',
    },
    ContainerForgetPassword:{
        alignItems:'center',
        flexDirection:'row',
        gap:10,
        justifyContent:'center'
    },
    ContainerBtnSignIn:{
        alignItems:'center'
    },
    BtnSignIn:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:12,
        borderRadius: 10,
        backgroundColor:'#023e8a',
    },
    TextBtnSignIn:{
        fontSize: 18,
        color:'white'
    },
    CredentialErrorNotShow:{
        display:'none'
    },
    CredentialErrorShow:{
        paddingVertical:5
    },
    CamposVacios:{
        display:'flex'
    },
    CamposVaciosNone:{
        display:'none'
    },
    CorreInvalido:{
        display:'flex'
    },
    CorreInvalidoNone:{
        display:'none'
    }





});