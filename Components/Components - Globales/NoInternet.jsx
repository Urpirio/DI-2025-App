import { View,Text,Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NoInternet() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}} >
          <View style={{alignItems:'center',height:'50%',padding:20,justifyContent:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:150,height:150,objectFit:'contain'}} source={require('../../assets/IconHome/Warnning.png')}/>
            </View>
            <View style={{}}>
              <Text style={{textAlign:'center',fontWeight:'500',color:'gray',fontSize:18}}>
                Se ha interrumpido la conexión. Comprueba tu
                conexión a internet para seguir usando la aplicación.
              </Text>
             </View>
          </View>
    </SafeAreaProvider>
  )
}
