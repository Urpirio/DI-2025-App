import { View,TouchableOpacity,Text } from "react-native";
import { StyleSwicthHome } from "../../style/StyleSwicthHome";
// import { useSwitchHome } from "../../func/Home/useSwitchHome";

export let FuncionSwitch;

export default function SwitchHome({
    Fhoy,FTodos,StyleBtnHoy,StyleBtnTodos
}) {


  return (
    <View style={StyleSwicthHome.constainerBtn}>
        <TouchableOpacity style={StyleBtnHoy.Btn} onPress={()=>{
            // SwitchStyle();
            Fhoy();
        }}>
            <Text style={StyleBtnHoy.Text}>Hoy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={StyleBtnTodos.Btn} onPress={()=>{
            // SwitchStyle();
            FTodos();
        }}>
            <Text style={StyleBtnTodos.Text}>Todos</Text>
        </TouchableOpacity>
    </View>
  )
}
