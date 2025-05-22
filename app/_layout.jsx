import { Stack, useRouter } from "expo-router";
import { Image, View,TouchableOpacity,Text } from "react-native";

export default function _layout() {

  const Router = useRouter();
  const LogoOgtic =require('../assets/Login/Capa_1 (7).png');

  return (
    <Stack>
        <Stack.Screen name="index" options={{
            header:()=>{
                return(
                    <View style={{
                        backgroundColor:'white',
                        paddingHorizontal:0,
                        paddingTop:150,
                        alignItems:'center'
                    }}>
                        <Image source={LogoOgtic}  style={{
                            tintColor:'#023e8a',
                            height:40,
                            objectFit:'contain'
                        }}/>
                    </View>
                )
            },
        }}/>
        <Stack.Screen name="ForgetPassword/index" options={{
            header:()=>{
                return(
                    <View style={{
                        alignItems:'center',
                        height:100,
                        paddingHorizontal: 10,
                        justifyContent:'Flex-end',
                        backgroundColor:'white',
                        flexDirection:'row',
                        gap: 20,
                        }}>
                        <TouchableOpacity onPress={()=>{Router.navigate('../')}}>
                            <Image style={{height:50,width:50,tintColor:'#023e8a'}} 
                            source={require('../assets/IconNavegation/arrow-left-stroke.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:20,color:'#023e8a',fontWeight:'600'}}>
                            Recuperar cuenta
                        </Text>
                    </View>
                )
            },
            
        }}/>
        <Stack.Screen name="Home/index" options={{
            header:()=>{
                return(
                    <View style={{
                        // height:80,
                        // borderWidth:1,
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingTop:10,
                        // paddingBottom:10,
                        paddingHorizontal:20,
                        flexDirection:'row',
                        backgroundColor:'white',
                        boxShadow:'0px 0px 1px 0px gray'
                        }}>
                        <View>
                            <Image style={{height:100,width:100,objectFit:'contain',tintColor:'#023e8a'}} source={require('../assets/Login/Capa_1 (7).png')}/>
                        </View>
                        <TouchableOpacity>
                            <Image style={{height:50,width:50,borderRadius: 100}}
                                source={{uri:'https://i.pinimg.com/736x/17/fb/fe/17fbfe03a124f2abd5bae716cc753a6a.jpg'}}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        }} />
    </Stack>
  )
}
