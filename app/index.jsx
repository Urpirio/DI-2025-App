import { Text, View,TouchableOpacity,Image, TextInput, Pressable, ActivityIndicator, Keyboard} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {useState } from "react";
import { StyleLoginForm } from "../style/StyleLoginForm";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GetLogin } from "../func/Login/useLogin";
import { useStyleLogin } from "../func/Login/useStyleLogin";
import { useNetInfo } from "@react-native-community/netinfo";
import ModalConectRed from "../Components/Modales/ModalConectRed";

export default function LoginForm() {

  const Router = useRouter();

  const HaveInternet = useNetInfo();
  const [StatusConnect,setStatusConnect] = useState(false);

  const [TextEmail,setTextEmail] = useState('urpiriojunior@gmail.com');
  const [TextPassword,setTextPassword] = useState('1234');

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
   CamposVacios,
   camposVacios,
   correoInvalido,
   CorreoInValido,
  } = useStyleLogin();

 
  const SignIn = ()=>{

    if(!TextEmail.includes('@') && (TextEmail != '' && TextPassword != '')){
      CredentialShow({Status:true});
      camposVacios({Status:true});
      correoInvalido({Status:false});
    }else if(HaveInternet.isConnected && (TextEmail != '' && TextPassword != '') ){
        camposVacios({Status:true});
        correoInvalido({Status:true});
        PostUserCredential({Email:TextEmail,Password:TextPassword,ErrorFunction: CredentialShow});
      }else if(!HaveInternet.isConnected &&(TextEmail != '' && TextPassword != '')){
        if(!StatusConnect){
          setStatusConnect(true);
        }else{
          setStatusConnect(false)
          setTimeout(()=>{
            setStatusConnect(true)
          },2000)
        }
      }else if(HaveInternet.isConnected && (TextEmail == '' && TextPassword == '')){
        camposVacios({Status:false});
        CredentialShow({Status:true});
        correoInvalido({Status:true});
      }
  };

 

  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <View>
          <View style={StyleLoginForm.Section1}>
            {/* <Text style={StyleLoginForm.TextSection1}>Inicie sesión en su cuenta de staff</Text> */}
          </View>
          <View style={StyleLoginForm.SectionForm}>
            <View style={{gap:20}}>
              <View>
                <View style={ChangesColorEmail.InputEmail}> 
              <Image source={require('../assets/IconInputs/envelope-alt (1).png')}
                style={ChangesColorEmail.IconInputEmail}/>
              <TextInput placeholder="Email" placeholderTextColor={'#ced4da'}  
                style={ChangesColorEmail.TextInput_Email} 
                onPress={ChangeColorInput} onChangeText={setTextEmail} value={TextEmail}/>
                
              </View>
              <View style={CorreoInValido}>
                  <Text style={{fontSize:12,color:'red'}}>Ingrese una dirección de correo electrónico válida.</Text>
              </View>
              </View>
              <View style={ChangesColorPassword.InputPassword}>
                <Image source={require('../assets/IconInputs/lock.png')}
                  style={ChangesColorPassword.IconInputPassWord}/>
                <TextInput placeholder="Password" placeholderTextColor={'#ced4da'} 
                  secureTextEntry={ShowPassword} style={ChangesColorPassword.TextInput_PassWord} 
                    onPress={ChangeColorInputP2} onChangeText={setTextPassword} value={TextPassword}/>
                  <Pressable onPress={()=>{
                    ChangeVisibilidyPassword();
                    Keyboard.dismiss();
                  }}>
                    <Image source={IconEyePassWord}
                      style={ChangesColorPassword.PressablePassWordIcon}/>
                  </Pressable>
              </View>
            </View>
            <View style={CredentialErrorStyle}>
              <Text style={{color:'red',fontWeight:'600'}}>Credenciales incorrectas</Text>
            </View>
            <View style={CamposVacios}>
              <Text style={{color:'#ffba08',fontWeight:'500'}}>Los campos no pueden estar vacíos.</Text>
            </View>
            <View style={{gap:20,paddingVertical:10}}>
              <View style={StyleLoginForm.ContainerForgetPassword}>
                <TouchableOpacity onPress={()=>{
                  Router.navigate('/ForgetPassword');
                }}>
                    <Text style={{color:'#023e8a',fontWeight:'600'}}>Forget the password?</Text>
                </TouchableOpacity>
              </View>
              <View style={StyleLoginForm.ContainerBtnSignIn}>
                <TouchableOpacity style={StyleLoginForm.BtnSignIn} 
                  onPress={()=>{
                    SignIn();
                    Keyboard.dismiss();
                  }}>
                  {LoadingLOGIN ? 
                  <ActivityIndicator size={'small'} color={"white"}/> 
                  : 
                  <Text style={StyleLoginForm.TextBtnSignIn}>Sign In</Text>
                  }
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ModalConectRed
        StatusModal={StatusConnect}
        OnPress={()=>{
          setStatusConnect(false);
          if(TextEmail != '' && TextPassword != ''){
            SignIn();
          }
        }}
        OnCancel={()=>{
          setStatusConnect(false);
        }}
        />
       <StatusBar style="auto"/>
    </SafeAreaProvider>
  )
};
