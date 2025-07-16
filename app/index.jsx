import { Text, View,TouchableOpacity,Image, TextInput, Pressable, ActivityIndicator, Keyboard} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {useState ,useCallback, useEffect} from "react";
import { StyleLoginForm } from "../style/Style - ScreenLogin/StyleLoginForm";
import { StatusBar } from "expo-status-bar";
import { useLogin } from "../hooks/hooks - ScreenLogin/useLogin";
import { useStyleLogin } from "../hooks/hooks - ScreenLogin/useStyleLogin";
import { useNetInfo } from "@react-native-community/netinfo";
import ModalConnectRed from "../Components/components - Login/Modales/ModalConnectRed";
import { BlurView } from "expo-blur";
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from "expo-checkbox";
import { useFocusEffect } from "expo-router";

export default function LoginForm() {


  const HaveInternet = useNetInfo();
  const [StatusConnect,setStatusConnect] = useState(false);
  const [CheckboxSave,setCheckBoxSave] = useState(false);

  const [TextEmail,setTextEmail] = useState();
  const [TextPassword,setTextPassword] = useState();

  const {PostUserCredential, LoadingLOGIN,Token} = useLogin();

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

  useEffect(()=>{
    const DatosUsuario = async () =>{
      const Email = await AsyncStorage.getItem('Email');
      const Password = await  AsyncStorage.getItem('Password')
      if(Email){
      setTextEmail(Email);
      setTextPassword(Password)
      }
    };
    DatosUsuario();
  },[])
 
  const SignIn = async ()=>{

    
    //condicional de error
    if(!TextEmail.includes('@') && (TextEmail != '' && TextPassword != '')){
      CredentialShow({Status:true});
      camposVacios({Status:true});
      correoInvalido({Status:false});




      //condicional de todo correcto
    }else if(HaveInternet.isConnected && (TextEmail != '' && TextPassword != '') ){
        camposVacios({Status:true});
        correoInvalido({Status:true});
        PostUserCredential({Email:TextEmail,Password:TextPassword,ErrorFunction: CredentialShow});

        if(CheckboxSave){
          await AsyncStorage.setItem('Email',TextEmail);
          await AsyncStorage.setItem('Password',TextPassword);
        };


        //Condicional de error
    }else if(!HaveInternet.isConnected &&(TextEmail != '' && TextPassword != '')){
        if(!StatusConnect){
          setStatusConnect(true);
        }else{
          setStatusConnect(false)
          setTimeout(()=>{
            setStatusConnect(true)
          },2000)
        }
        //Condicional de error
    }else if(HaveInternet.isConnected && (TextEmail == '' && TextPassword == '')){
        camposVacios({Status:false});
        CredentialShow({Status:true});
        correoInvalido({Status:true});
    }
  };


  const ValidarInformacion = async () =>{


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
                  onPress={()=>{SignIn();Keyboard.dismiss();}}>
                  {LoadingLOGIN ? 
                  <ActivityIndicator size={'small'} color={"white"}/> 
                  : 
                  <Text style={StyleLoginForm.TextBtnSignIn}>Iniciar sesion</Text>
                  }
                </TouchableOpacity>
                <TouchableOpacity onPress={ValidarInformacion} >
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
