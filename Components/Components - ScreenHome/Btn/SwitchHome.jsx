import { View,TouchableOpacity,Text } from "react-native";
import { StyleSwicthHome } from "../../../style/Style - ScreenHome/StyleSwicthHome";

export let FuncionSwitch;

export default function SwitchHome({
    Fhoy,FTodos,StyleBtnHoy,StyleBtnTodos
}) {


  return (
    <View style={StyleSwicthHome.constainerBtn}>
        <TouchableOpacity style={StyleBtnHoy.Btn} onPress={()=>{
            Fhoy();
        }}>
            <Text style={StyleBtnHoy.Text}>Hoy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleBtnTodos.Btn} onPress={()=>{
            FTodos();
        }}>
            <Text style={StyleBtnTodos.Text}>Todos</Text>
        </TouchableOpacity>
    </View>
  )
}
