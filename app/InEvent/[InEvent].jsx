import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function InEvent() {
  const local = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'space-around',
          padding:10,
          }}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              {/* <Image style={{tintColor:'#023e8a',height:100,width:250,objectFit:'contain'}} source={require('../../assets/IconEvent/LogoInnova.png')}/> */}
              <Text style={{fontSize:26,color:'',textAlign:'center',fontWeight:'600'}}>
                {local.NombreEvento}
              </Text>
              <Text style={{fontWeight:'500',fontSize:18}}>
                80/100
              </Text>
            </View>
            <TouchableOpacity style={{
              width:'100%',
              paddingHorizontal:30,
              paddingVertical:15,
              alignItems:'center',
              borderRadius:10,
              backgroundColor:'#023e8a'
              }} onPress={()=>{
                router.navigate('/Check-In/CheckIn')
              }}>
              <Text style={{
                fontSize:18,
                fontWeight:'600',
                color:'white'
                }}>Registrar</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaProvider>
  )
}
