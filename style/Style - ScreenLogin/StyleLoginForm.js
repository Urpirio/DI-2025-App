import { StyleSheet } from "react-native";

export const StyleLoginForm = StyleSheet.create({
    Section1:{
        paddingVertical:20,
        paddingHorizontal:20,
    },
    TextSection1:{
        fontSize:30,
        fontWeight:600,
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
        color:'gray',
        fontWeight:'300'
                
    },
    InputEmailBLue:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'#023e8a',
        borderColor: '#023e8a',
        intensity: 190,
    },
    IconInputEmailBLue:{
        height:30,
        width:30,
        tintColor: '#007AFF',
    },
    TextInput_EmailBLue:{
        fontSize:16,
        width:'90%',
        color:'#007AFF',
        fontWeight:'300'
                
    },
    InputPassword:{
        flexDirection:'row',
        padding:5,
        borderRadius:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'#e9ecef',
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
        width:'80%',
        fontWeight:'300'
    },
    TextInput_PassWordBLue:{
        fontSize:16,
        width:'80%',
        color:'#007AFF',
        fontWeight:'300'
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
        backgroundColor:'#007AFF',
        intensity: 190,
        color:'gray'
    },
    IconInputPassWordBLue:{
        height:30,
        width:30,
        tintColor: '#007AFF',
    },
    PressablePassWordBLue:{

    },
    PressablePassWordIconBLue:{
        height:30,
        width:30,
        tintColor: '#007AFF',
    },
    ContainerBtnSignIn:{
        alignItems:'center',
        gap:20
    },
    BtnSignIn:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:12,
        borderRadius: 10,
        backgroundColor:'#007AFF',
    },
    TextBtnSignIn:{
        fontSize: 18,
        color:'white',
        fontWeight:'300'
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