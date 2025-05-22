import { StyleSheet } from "react-native";

export const StyleHome = StyleSheet.create({
    CardEvent:{
        flexDirection:'row',
        borderWidth:1,
        justifyContent:'space-between',
        padding:5,
        marginBottom:10,
        height:100,
        borderRadius:10,
        boxShadow:'0px 0px 1px 0px gray',
        borderColor:'#adb5bd',
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
        height:'100%',
        width:'100%',
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