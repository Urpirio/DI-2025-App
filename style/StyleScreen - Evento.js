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
        gap:5
    },
    ContenedorBuscador:{
        borderWidth:1,
        borderColor: ColorBorder,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:5
    },
    IconoBuscar:{
        height:30,
        width:30,
        tintColor: ColorBorder,
    },
    InputBuscador: {
        height:50,
        fontSize:18,
        width:'90%'
    },
    ContenedorDropDown:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:5
    },
    DropDownEstado:{
        width:'48%'
    },
    DropDownBuscador:{
        width:'48%'
    },
    ButtondeployDropDownBuscador:{
        width:'100%',
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal: 5,
        justifyContent:'space-between',
        borderRadius:10,
        borderColor:ColorBorder,
        flexDirection:'row'
    },
    ButtondeployDropDownEstado:{
        width:'100%',
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        borderRadius:10,
        borderColor:ColorBorder,
        flexDirection:'row'
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
    ContenedorOpcionesDropDownBuscador:{
        width:'100%',
        position:'absolute',
        marginTop:45,
        borderWidth:1,
        padding:5,
        borderRadius:5,
        borderColor:ColorBorder,
        backgroundColor:'white'
    },
    ContenedorOpcionesDropDownBuscador_None:{
        display: 'none'
    },
    ContenedorOpcionesDropDownEstados:{
        width:'100%',
        position:'absolute',
        marginTop:45,
        borderWidth:1,
        padding:5,
        borderRadius:5,
        borderColor:ColorBorder,
        backgroundColor:'white'
    },
    ContenedorOpcionesDropDownEstados_None:{
        display: 'none'
    },
    CardListado:{
        width:'100%',
        borderWidth:1,
        padding:5,
        borderRadius:10,
        marginVertical:5,
        flexDirection:'row',
        height:130,
        borderColor:ColorBorder
    },
});