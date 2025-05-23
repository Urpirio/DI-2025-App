import { StyleSheet } from "react-native";

export const StyleHome = StyleSheet.create({
    ContainerFilter:{
        height:60,
        justifyContent:'center',
        alignItems:'flex-start',
        // flexDirection:'row'
    },
    ContainerBtnFiltrosShow:{
        position:'absolute',
        marginTop:240,
        borderWidth:1,
        borderColor:'#ced4da',
        width:150,
        height:200,
        backgroundColor:'#ffffff',
        padding:5,
        zIndex:20,
        gap:5,
        borderRadius: 10,
    },
    ContainerBtnFiltrosNotShow:{
        display:'none'
    },
    BtnFilterDeploy:{
        borderWidth:1,
        borderColor:'#ced4da',
        paddingVertical:1,
        borderRadius:10,
        paddingHorizontal: 5,
        width:150,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'0px 0px 1px 0px gray'
    },
    IconBtnFilter:{
        height:30,
        width:30
    },
    TextBtnFilter:{

    },
    CardEvent:{
        flexDirection:'row',
        borderWidth:1,
        justifyContent:'space-between',
        padding:5,
        marginBottom:10,
        borderRadius:10,
        height:120,
        boxShadow:'0px 0px 1px 0px gray',
        borderColor:'#adb5bd',
        flexGrow: 1,
        flexBasis:0,

    },
    CardEventSection1:{

    },
    CardEventBtns:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
    },
    BtnInCardEvent:{
        borderRadius:10,
        width:'100%',
        flexGrow: 1,
        flexBasis:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#023e8a',
    },
    IconBtnInCardEvent:{
        height:50,
        width:50,
        marginLeft:5,
        tintColor:'white'
    }
});