import { StyleSheet } from "react-native";

const ColorBorder = '#ced4da';
export const StyleScreenEventos = StyleSheet.create({
    BodyScreen: {
        justifyContent:'flex-end',
        alignItems:'flex-end',
        backgroundColor:'white',
        paddingBottom:5
    },
    NoElementoslista: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:50,
    },
    TextNoElementos: {
        color:'gray'
    },
    ContenedorFiltros:{
        padding:5,
        gap:5,
        width:'100%'
    },
    ContenedorBuscador:{
        borderRadius:10,
        height:50,
        flexDirection:'row',
        borderColor:'#ced4da',
        width:`100%`,
        marginBottom: 10,
        backgroundColor:'#E4E5E7',
        justifyContent:'center',
        alignItems:'center',
    },
    IconoBuscar:{
        height:25,
        width:25,
        objectFit:'contain',
        tintColor:'#919192'
    },
    InputBuscador: {
        height:50,
        fontSize:16,
        width:'80%'
    },
    ContenedorDropDown:{
        width:'100%',
        flexDirection:'row',
        borderWidth:1,
        gap:5
    },
    DropDownEstado:{
        flexDirection:'row',
        justifyContent:'center',

    },
    ButtondeployDropDownBuscador:{
        width:'100%',
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal: 5,
        justifyContent:'space-between',
        borderRadius:10,
        borderColor:ColorBorder,
        flexDirection:'row',
        backgroundColor:'white',
    },
    ButtondeployDropDownEstado:{
      
    },
    IconDropDown:{
        height:20,
        width:20,
        objectFit:'contain'
    },
    
    buttonOpcionesDropDown:{
        width:'100%',
        padding:5,
        borderBottomWidth:1,
        borderColor:ColorBorder
    },
    buttonOpcionesDropDownUltimo:{
        width:'100%',
        padding:5
    },
    ContenedorOpcionesDropDownBuscador_None:{
        display: 'none'
    },
    ContenedorOpcionesDropDownEstados_None:{
        display: 'none'
    },
    CardListado:{
        width:'100%',
        padding:5,
        borderRadius:10,
        marginVertical:5,
        flexDirection:'row',
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ced4da',
        gap:10,
    },
    BtnSeleccionadoFiltros:{
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        marginRight:5,
        backgroundColor:'#007AFF',
    },
    BtnNoSeleccionadoFiltros:{
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        marginRight:5
    },
    TextBtnSeleccionadoFiltros:{
        fontSize:14,
        color:'white'
    },
    TextBtnNoSeleccionadoFiltros:{
        fontSize:14,
        color:'gray'
    },
    ContainerFiltros:{
        borderWidth:1,
        borderColor:'#dee2e6',
        flexDirection:'row',
        width:'100%',
        padding:5,
        borderRadius:5
    },
});