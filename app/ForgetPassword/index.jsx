import {  View,Image, TextInput,TouchableOpacity,Text} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { StyleForgetPassword } from "../../style/StyleForgetPassword";

export default function index() {

    const [ChangesColorEmail,setChangesColorEmail]= useState({
        InputEmail: StyleForgetPassword.InputEmail,
        IconInputEmail: StyleForgetPassword.IconInputEmail,
        TextInput_Email: StyleForgetPassword.TextInput_Email,
      });

    const ChangeColorInput = () =>{
          setChangesColorEmail({
            InputEmail:StyleForgetPassword.InputEmailBLue,
            IconInputEmail: StyleForgetPassword.IconInputEmailBLue,
            TextInput_Email: StyleForgetPassword.TextInput_EmailBLue,
          });
      };

  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <View style={{alignItems:'center',gap:10,height:'100%',paddingHorizontal:20}}>
            <View style={{alignItems:'center',justifyContent:'center'}} >
              <View style={{backgroundColor:'#ced4da',width:200,height:200,justifyContent:'center',alignItems:'center',padding:20,borderRadius:'100%'}}>
                <Image source={require('../../assets/ForgetPass/ImgCandado.png')} style={{height:100,width:100,objectFit:'contain'}} />
                <View style={{backgroundColor:'#669bbc',height:30,width:30,position:'absolute',marginTop:80,marginLeft:40,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'white',fontWeight:'600',fontSize:20}}>?</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{textAlign:'center',fontSize:16,color:'#023e8a',fontWeight:'500'}}>
                Introduzca su dirección de correo electrónico para recibir un código de verificación
              </Text>
            </View>
             <View style={ChangesColorEmail.InputEmail}> 
                <Image source={require('../../assets/IconInputs/envelope-alt (1).png')}
                    style={ChangesColorEmail.IconInputEmail}/>
                <TextInput placeholder="Email" placeholderTextColor={'#ced4da'}  
                    style={ChangesColorEmail.TextInput_Email} 
                        onPress={ChangeColorInput}/>
             </View>
             <View style={StyleForgetPassword.ContainerBtnSignIn}>
                  <TouchableOpacity style={StyleForgetPassword.BtnSignIn}>
                      <Text style={StyleForgetPassword.TextBtnSignIn}>Enviar</Text>
                </TouchableOpacity>
             </View>
        </View>
    </SafeAreaProvider>
  )
}
