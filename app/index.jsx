import { Text, View,TouchableOpacity,Image, TextInput, Pressable, StatusBar} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { StyleLoginForm } from "../style/StyleLoginForm";
import { router, useRouter } from "expo-router";

export default function LoginForm() {

  const Router = useRouter();

  const [isCheck,setIsCheck] = useState(false);
  const [ShowPassword,setShowPassword] = useState(true);
  const [IconEyePassWord,setIconEyePassword] = useState(require('../assets/IconInputs/eye-slash.png'));

  const [ChangesColorEmail,setChangesColorEmail]= useState({
    InputEmail: StyleLoginForm.InputEmail,
    IconInputEmail: StyleLoginForm.IconInputEmail,
    TextInput_Email: StyleLoginForm.TextInput_Email,
  });

  const [ChangesColorPassword,setChangesColorPassword] = useState({
    InputPassword:StyleLoginForm.InputPassword,
    IconInputPassWord: StyleLoginForm.IconInputPassWord,
    TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
    PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
  })

  const [StatusColorInputs,setStatusColorInputs] = useState(null);

  const ChangeColorInput = () =>{
    
      setChangesColorEmail({
        InputEmail:StyleLoginForm.InputEmailBLue,
        IconInputEmail: StyleLoginForm.IconInputEmailBLue,
        TextInput_Email: StyleLoginForm.TextInput_EmailBLue,
      });
      setChangesColorPassword({
        InputPassword:StyleLoginForm.InputPassword,
        IconInputPassWord: StyleLoginForm.IconInputPassWord,
        TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
        PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
      });
  };

  const ChangeColorInputP2 = () =>{
      setChangesColorPassword({
        InputPassword:StyleLoginForm.InputPasswordBLue,
        IconInputPassWord: StyleLoginForm.IconInputPassWordBLue,
        TextInput_PassWord: StyleLoginForm.TextInput_PassWordBLue,
        PressablePassWordIcon: StyleLoginForm.PressablePassWordIconBLue,
      });
      setChangesColorEmail({
        InputEmail: StyleLoginForm.InputEmail,
        IconInputEmail: StyleLoginForm.IconInputEmail,
        TextInput_Email: StyleLoginForm.TextInput_Email,
      });
  };

  const ChangeVisibilidyPassword = () =>{
    setShowPassword(!ShowPassword);
    if(ShowPassword){
      setIconEyePassword(require('../assets/IconInputs/eye-slash.png'))
    }else{
      setIconEyePassword(require('../assets/IconInputs/eye.png'))
    }
  };

  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
        <View>
          <View style={StyleLoginForm.Section1}>
            {/* <Text style={StyleLoginForm.TextSection1}>Inicie sesión en su cuenta de staff</Text> */}
          </View>
          <View style={StyleLoginForm.SectionForm}>
            <View style={ChangesColorEmail.InputEmail}> 
              <Image source={require('../assets/IconInputs/envelope-alt (1).png')}
                style={ChangesColorEmail.IconInputEmail}/>
              <TextInput placeholder="Email" placeholderTextColor={'#ced4da'}  
                style={ChangesColorEmail.TextInput_Email} 
                onPress={ChangeColorInput}/>
            </View>

            <View style={ChangesColorPassword.InputPassword}>
              <Image source={require('../assets/IconInputs/lock.png')}
                style={ChangesColorPassword.IconInputPassWord}/>
              <TextInput placeholder="Password" placeholderTextColor={'#ced4da'} 
                secureTextEntry={ShowPassword} style={ChangesColorPassword.TextInput_PassWord} 
                  onPress={ChangeColorInputP2}/>
                <Pressable onPress={ChangeVisibilidyPassword}>
                 <Image source={IconEyePassWord}
                  style={ChangesColorPassword.PressablePassWordIcon}/>
                </Pressable>
            </View>
            <View style={StyleLoginForm.ContainerForgetPassword}>
                <TouchableOpacity onPress={()=>{Router.navigate('/ForgetPassword')}}>
                    <Text style={{color:'#023e8a',fontWeight:'600'}}>Forget the password?</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleLoginForm.ContainerBtnSignIn}>
              <TouchableOpacity style={StyleLoginForm.BtnSignIn} 
                onPress={()=>{router.navigate('/Home')}}>
                <Text style={StyleLoginForm.TextBtnSignIn}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar barStyle={'default'}/>
    </SafeAreaProvider>
  )
};
