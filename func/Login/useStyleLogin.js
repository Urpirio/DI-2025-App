import { StyleLoginForm } from "../../style/StyleLoginForm";
import { useState } from "react";

export const useStyleLogin = () =>{


  const [StatusCredentialError, setStatusCredentialError] = useState(false);
  const [CredentialErrorStyle,setCredentialErrorStyle] = useState(StyleLoginForm.CredentialErrorNotShow);
 const [IconEyePassWord,setIconEyePassword] = useState(require('../../assets/IconInputs/eye-slash.png'));
 const [ShowPassword,setShowPassword] = useState(true);

 const CredentialShow = () => {
  if(StatusCredentialError === false){
    setCredentialErrorStyle(StyleLoginForm.CredentialErrorShow);
    setStatusCredentialError(true);
  }
 };

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
  });


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
        setIconEyePassword(require('../../assets/IconInputs/eye-slash.png'))
      }else{
        setIconEyePassword(require('../../assets/IconInputs/eye.png'))
      }
    };

  return({
    ChangeVisibilidyPassword: ChangeVisibilidyPassword,
    ChangeColorInput: ChangeColorInput,
    ChangeColorInputP2: ChangeColorInputP2,
    CredentialShow:  CredentialShow,
    ChangesColorPassword: ChangesColorPassword,
    ChangesColorEmail: ChangesColorEmail,
    IconEyePassWord: IconEyePassWord,
    ShowPassword: ShowPassword,
    CredentialErrorStyle: CredentialErrorStyle,
  })
};