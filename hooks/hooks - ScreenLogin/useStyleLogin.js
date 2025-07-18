import { StyleLoginForm } from "../../style/Style - ScreenLogin/StyleLoginForm";
import { useState } from "react";

export const useStyleLogin = () => {
  const [StatusCredentialError, setStatusCredentialError] = useState(false);
  const [CredentialErrorStyle, setCredentialErrorStyle] = useState(
    StyleLoginForm.CredentialErrorNotShow
  );
  const [IconEyePassWord, setIconEyePassword] = useState(
    require("../../assets/IconInputs/eye-slash.png")
  );
  const [ShowPassword, setShowPassword] = useState(true);

  const [CamposVacios, setCamposVacios] = useState(
    StyleLoginForm.CamposVaciosNone
  );
  const [StatusCamposVacios, setStatusCamposVacios] = useState(false);

  const [CorreoInValido, setCorreoInValido] = useState(
    StyleLoginForm.CorreInvalidoNone
  );

  const camposVacios = ({ Status }) => {
    if (!Status) {
      // setStatusCamposVacios(true);
      setCamposVacios(StyleLoginForm.CamposVacios);
    } else {
      // setStatusCamposVacios(false);
      setCamposVacios(StyleLoginForm.CamposVaciosNone);
    }
  };

  const correoInvalido = ({ Status }) => {
    if (!Status) {
      setCorreoInValido(StyleLoginForm.CorreInvalido);
    } else {
      setCorreoInValido(StyleLoginForm.CamposVaciosNone);
    }
  };

  const CredentialShow = ({ Status }) => {
    if (!Status) {
      setCredentialErrorStyle(StyleLoginForm.CredentialErrorShow);
      // setStatusCredentialError(true);
    } else {
      setCredentialErrorStyle(StyleLoginForm.CredentialErrorNotShow);
      // setStatusCredentialError(true);
    }
  };

  const [ChangesColorEmail, setChangesColorEmail] = useState({
    InputEmail: StyleLoginForm.InputEmail,
    IconInputEmail: StyleLoginForm.IconInputEmail,
    TextInput_Email: StyleLoginForm.TextInput_Email,
  });

  const [ChangesColorPassword, setChangesColorPassword] = useState({
    InputPassword: StyleLoginForm.InputPassword,
    IconInputPassWord: StyleLoginForm.IconInputPassWord,
    TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
    PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
  });

  const ChangeColorInput = () => {
    setChangesColorEmail({
      InputEmail: StyleLoginForm.InputEmailBLue,
      IconInputEmail: StyleLoginForm.IconInputEmailBLue,
      TextInput_Email: StyleLoginForm.TextInput_EmailBLue,
    });
    setChangesColorPassword({
      InputPassword: StyleLoginForm.InputPassword,
      IconInputPassWord: StyleLoginForm.IconInputPassWord,
      TextInput_PassWord: StyleLoginForm.TextInput_PassWord,
      PressablePassWordIcon: StyleLoginForm.PressablePassWordIcon,
    });
  };

  const ChangeColorInputP2 = () => {
    setChangesColorPassword({
      InputPassword: StyleLoginForm.InputPasswordBLue,
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

  const ChangeVisibilidyPassword = () => {
    setShowPassword(!ShowPassword);
    if (ShowPassword) {
      setIconEyePassword(require("../../assets/IconInputs/eye-slash.png"));
    } else {
      setIconEyePassword(require("../../assets/IconInputs/eye.png"));
    }
  };

  return {
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
  };
};
