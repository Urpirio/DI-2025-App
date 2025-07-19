import { SafeAreaProvider } from "react-native-safe-area-context"
import { View,Text, Pressable } from "react-native";
import { router } from "expo-router";

// Eso es un modal para registrar los usuario aun estoy eveluando si usarlo
export default function ModalRegistrarAsistencia() {
  return (
    <SafeAreaProvider >
        <Pressable onPress={()=>router.back()} style={{backgroundColor:'#7071725e',height:'100%',width:'100%'}}>
            
        </Pressable>
       <View style={{position:'absolute',height:'100%',width:'100%',justifyContent:'center',paddingHorizontal:10}}>
         <View style={{height:'30%',width:'100%',backgroundColor:'white',borderWidth:1,borderRadius:20,borderColor:'#bbbbbbff'}}>

        </View>
       </View>
    </SafeAreaProvider>
  )
}
