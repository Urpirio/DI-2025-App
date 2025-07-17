import { Text, View,TouchableOpacity,Image, TextInput, Pressable, ActivityIndicator, Keyboard} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback, useEffect} from "react";
import { StyleLoginForm } from "../style/Style - ScreenLogin/StyleLoginForm";
import { StatusBar } from "expo-status-bar";
import { useStyleLogin } from "../hooks/hooks - ScreenLogin/useStyleLogin";
import ModalConnectRed from "../Components/components - Login/Modales/ModalConnectRed";
import { BlurView } from "expo-blur";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from "expo-checkbox";
import { useLogin_SignIn } from "../hooks/hooks - ScreenLogin/useLogin_SignIn";
import * as Crypto from 'expo-crypto';
import CryptoJS from "crypto-js";
import { useFocusEffect } from "expo-router";

export default function LoginForm() {

 const {SignIn,ValidarInformacion,LoadingLOGIN,
 setTextEmail,setTextPassword,setStatusConnect,
 TextEmail,TextPassword,setCheckBoxSave,CheckboxSave,StatusConnect} = useLogin_SignIn();

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

  useFocusEffect(useCallback(()=>{
    const DatosUsuario = async () =>{
      const Email = await AsyncStorage.getItem('Email');
      if(Email){
      setTextEmail(Email);
      }
    };
    DatosUsuario()
  },[]))



  const BtnSignIn = ({Bio}) =>{
    if(Bio){
      ValidarInformacion({
      CredentialShow:CredentialShow,
      camposVacios:camposVacios,
      correoInvalido:correoInvalido
      })
    }else{
      SignIn({
      CredentialShow:CredentialShow,
      camposVacios:camposVacios,
      correoInvalido:correoInvalido
      });Keyboard.dismiss();
    }
  };

  const ContentBtnSignIn = () =>{
   switch(LoadingLOGIN){
    case true: 
      return <ActivityIndicator size={'small'} color={"white"}/>
    case false:
      return  <Text style={StyleLoginForm.TextBtnSignIn}>Iniciar sesion</Text>
 }}
 


  return (
    <SafeAreaProvider style={{backgroundColor: 'white',paddingTop:40}}>
        <View>
          <View style={StyleLoginForm.SectionForm}>
            <View style={{gap:20}}>
              <View>
                <BlurView intensity={ChangesColorEmail.InputEmail.intensity} style={ChangesColorEmail.InputEmail}> 
              <Image source={require('../assets/IconInputs/envelope-alt (1).png')}
                style={ChangesColorEmail.IconInputEmail}/>
              <TextInput placeholder="Email" placeholderTextColor={ChangesColorEmail.IconInputEmail.tintColor}  
                style={ChangesColorEmail.TextInput_Email} 
                onPress={ChangeColorInput} onChangeText={setTextEmail} value={TextEmail}/>
                
              </BlurView>
              <View style={CorreoInValido}>
                  <Text style={{fontSize:12,color:'red'}}>Ingrese una dirección de correo electrónico válida.</Text>
              </View>
              </View>

              <BlurView intensity={ChangesColorPassword.InputPassword.intensity} style={ChangesColorPassword.InputPassword}>
                <Image source={require('../assets/IconInputs/lock.png')}
                  style={ChangesColorPassword.IconInputPassWord}/>
                <TextInput placeholder="Password" placeholderTextColor={ChangesColorPassword.IconInputPassWord.tintColor} 
                  secureTextEntry={ShowPassword} style={ChangesColorPassword.TextInput_PassWord} 
                    onPress={ChangeColorInputP2} onChangeText={setTextPassword} value={TextPassword}/>
                  <Pressable onPress={()=>{
                    ChangeVisibilidyPassword();
                    Keyboard.dismiss();
                  }}>
                    <Image source={IconEyePassWord}
                      style={ChangesColorPassword.PressablePassWordIcon}/>
                  </Pressable>
              </BlurView>

              {/* Check Box para guardas las credenciales o datos del usuario */}
              <View style={{flexDirection:'row',gap:10,}}>
                <Checkbox value={CheckboxSave} onValueChange={setCheckBoxSave}/>
                <Text style={{fontSize:15}}>Recordar credenciales</Text>
              </View>

            </View>

            <View style={CredentialErrorStyle}>
              <Text style={{color:'red',fontWeight:'600'}}>Credenciales incorrectas</Text>
            </View>

            <View style={CamposVacios}>
              <Text style={{color:'#ffba08',fontWeight:'500'}}>Los campos no pueden estar vacíos.</Text>
            </View>

            <View style={{gap:20,paddingVertical:30}}>
              <View style={StyleLoginForm.ContainerBtnSignIn}>

                <TouchableOpacity style={StyleLoginForm.BtnSignIn} 
                  onPress={()=>BtnSignIn({Bio:false})}>

                  <ContentBtnSignIn/>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>BtnSignIn({Bio:true})} >
                  <Text style={{color:'#033E8A'}}>Iniciar con datos biometricos</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
        
        <ModalConnectRed
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
