import { StyleSheet } from "react-native";

export const StyleHome = StyleSheet.create({
    ContainerFilter:{
        justifyContent:'center',
        alignItems:'flex-start',

    },
    ContainerNotFilter:{
        display: 'none'
    },
    ContainerBtnFiltrosShow:{
        position:'absolute',
        marginTop:240,
        borderColor:'#ced4da',
        width:150,
        height:200,
        backgroundColor:'#ffffff',
        padding:5,
        gap:5,
        borderRadius: 5,
        borderWidth:1,
        zIndex:30,
        
    },
    ContainerBtnFiltrosNotShow:{
        display:'none'
    },
    BtnSelectFilter:{
        backgroundColor:'white',
        borderBottomWidth:1,
        borderColor: '#ced4da',
        padding:5,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    TextBtnSelectFilter:{
        color:'#007AFF',
        fontWeight:'600'
    },
    BtnFilterDeploy:{
        borderColor:'#ced4da',
        paddingVertical:2,
        borderRadius:10,
        paddingHorizontal: 20,
        width:150,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'0px 0px 1px 0px gray',
        backgroundColor:'white'
    },
    IconBtnFilter:{
        height:30,
        width:30
    },
    TextBtnFilter:{

    },
    CardEvent:{
        justifyContent:'center',
        // padding:10,
        marginBottom:10,
        borderRadius:10,
        gap:10,
        flexGrow: 1,
        flexBasis:0,
        backgroundColor:'#001233',
        position:'relative',
        alignItems:'center'

    },
    //Cambiar el nombre XD
    CardEventBtns:{
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        padding:10,
        flexDirection:'row',
        
    },
    BtnInCardEvent:{
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#007AFF'
    },
});