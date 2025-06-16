import { StyleSheet } from "react-native";

//Estilo del Skeleton de los participantes.
export const StyleCardSkeletonPart = StyleSheet.create({
    BodyCard:{
        borderWidth:1,
        borderColor:'#ced4da',
        padding:10,
        borderRadius:10,
        boxShadow:'0px 0px 1px 0px gray',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    ImageContainer:{
        width:'30%'
    },
    PerfilImg:{
        height:100,
        width:100,
        objectFit:'cover',
        borderRadius:5,
    },
    MainContainer:{
        width:'65%',
        gap:5,
        justifyContent:'space-between'
    },
    Section1C:{
        flexDirection:'row',
        gap:10,
        flexWrap:'wrap'
    },
     Section2C:{
         width:'100%',
         gap:20
    },

     Section3C:{
        width:'100%',
    },
});