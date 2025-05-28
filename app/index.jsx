import { Text, View,TouchableOpacity,Image, TextInput, Pressable, ActivityIndicator} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleLoginForm } from "../style/StyleLoginForm";
import { router, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GetLogin } from "../func/Login/useLogin";
import { useStyleLogin } from "../func/Login/useStyleLogin";
import { CerrarSesion, funcionCSesion } from "./_layout";


export default function LoginForm() {

  const Router = useRouter();

  const [TextEmail,setTextEmail] = useState(String);
  const [TextPassword,setTextPassword] = useState(String);

  const {PostUserCredential, LoadingLOGIN,Token} = GetLogin();

 const {
   ChangeVisibilidyPassword,
   ChangeColorInput,
   ChangeColorInputP2,
   CredentialShow,
   ChangesColorPassword,
   ChangesColorEmail,
   IconEyePassWord, 
   ShowPassword,
   CredentialErrorStyle,
  } = useStyleLogin();

 
  const SignIn = ()=>{
    PostUserCredential({Email:TextEmail,Password:TextPassword,ErrorFunction: CredentialShow})

    if(!CerrarSesion){
      funcionCSesion();
    };
  
  }

 

  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <View>
          <View style={StyleLoginForm.Section1}>
            {/* <Text style={StyleLoginForm.TextSection1}>Inicie sesión en su cuenta de staff</Text> */}
          </View>
          <View style={StyleLoginForm.SectionForm}>
            <View style={{gap:20}}>
              <View style={ChangesColorEmail.InputEmail}> 
              <Image source={require('../assets/IconInputs/envelope-alt (1).png')}
                style={ChangesColorEmail.IconInputEmail}/>
              <TextInput placeholder="Email" placeholderTextColor={'#ced4da'}  
                style={ChangesColorEmail.TextInput_Email} 
                onPress={ChangeColorInput} onChangeText={setTextEmail} value={TextEmail}/>
                
              </View>

              <View style={ChangesColorPassword.InputPassword}>
                <Image source={require('../assets/IconInputs/lock.png')}
                  style={ChangesColorPassword.IconInputPassWord}/>
                <TextInput placeholder="Password" placeholderTextColor={'#ced4da'} 
                  secureTextEntry={ShowPassword} style={ChangesColorPassword.TextInput_PassWord} 
                    onPress={ChangeColorInputP2} onChangeText={setTextPassword} value={TextPassword}/>
                  <Pressable onPress={ChangeVisibilidyPassword}>
                    <Image source={IconEyePassWord}
                      style={ChangesColorPassword.PressablePassWordIcon}/>
                  </Pressable>
              </View>
            </View>
            <View style={CredentialErrorStyle}>
              <Text style={{color:'red',fontWeight:'600'}}>Credenciales incorrectas</Text>
            </View>
            <View style={{gap:20,paddingVertical:10}}>
              <View style={StyleLoginForm.ContainerForgetPassword}>
                <TouchableOpacity onPress={()=>{Router.navigate('/ForgetPassword')}}>
                    <Text style={{color:'#023e8a',fontWeight:'600'}}>Forget the password?</Text>
                </TouchableOpacity>
              </View>
              <View style={StyleLoginForm.ContainerBtnSignIn}>
                <TouchableOpacity style={StyleLoginForm.BtnSignIn} 
                  onPress={SignIn}>
                  {LoadingLOGIN ? <ActivityIndicator size={'small'} color={"white"}/> : <Text style={StyleLoginForm.TextBtnSignIn}>Sign In</Text>}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
       <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
};
