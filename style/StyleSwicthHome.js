import { StyleSheet } from "react-native";

export const StyleSwicthHome = StyleSheet.create({
    constainerBtn:{
        flexDirection:'row',
    },
    BtnHoy:{
        borderWidth:1,
        borderColor: '#adb5bd',
        paddingHorizontal:20,
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
    },
    BtnHoySelected:{
        borderWidth:1,
        borderColor: '#adb5bd',
        paddingHorizontal:20,
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        backgroundColor:'#adb5bd'
    },
    textBtnHoy:{
        color:'#adb5bd'
    },
    textBtnHoySelected:{
        color:'white'
    },
    BtnTodos:{
        borderWidth:1,
        borderColor: '#adb5bd',
        paddingHorizontal:20,
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    BtnTodosSelected:{
        borderWidth:1,
        borderColor: '#adb5bd',
        paddingHorizontal:20,
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'#adb5bd'
    },
    textBtnTodos:{
        color:'#adb5bd',
    },
    textBtnTodosSelected:{
        color:'white',
    }
});