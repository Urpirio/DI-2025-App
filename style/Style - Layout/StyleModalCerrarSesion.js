import { StyleSheet } from "react-native";

export const StyleModalCerrarSesion = StyleSheet.create({
        BodyContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    containerModal:{
        borderWidth:1,
        borderColor:'#ced4da',
        paddingVertical:15,
        paddingHorizontal:15,
        gap:20,
        borderRadius:10,
        width:'100%',
        position:'absolute',
        backgroundColor:'white',
        justifyContent:'space-around',
        alignItems:'center',
        zIndex:20
    },
    Question:{
        textAlign:'center',
        fontSize:18,
        width:'80%',
        fontWeight:'300'
    },
    containerBtns:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    btnCerrarSesion:{
        paddingVertical:8,
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'#033E8A',
    },
    btnCancelar:{
        paddingVertical:8,
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor:'#CF0101',
    }
})