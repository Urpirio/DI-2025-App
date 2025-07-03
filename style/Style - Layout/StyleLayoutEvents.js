import { StyleSheet } from "react-native";

export const StyleLayoutEvent = StyleSheet.create({
    Header:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingHorizontal:10,
        flexDirection:'row',
        backgroundColor:'white',
        boxShadow:'0px 0px 1px 0px gray',
        zIndex:10,
    },
    IconBack:{
        height:50,
        width:50,
        tintColor:'#023e8a'
    },
    TitlesHeader:{
        color: '#023e8a',
        fontSize:20,
        fontWeight:'500'
    },
    ImgProfile:{
        height:50,width:50,borderRadius: 100
    },
    

})