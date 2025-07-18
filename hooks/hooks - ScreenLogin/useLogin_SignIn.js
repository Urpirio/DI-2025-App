import { useState, useCallback, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { useLogin } from "./useLogin";
import { Keyboard } from "react-native";

export const useLogin_SignIn = () => {
  //Esto e un Hook personalizado para enviar los datos.
  const { PostUserCredential, LoadingLOGIN } = useLogin();

  const [TextEmail, setTextEmail] = useState();
  const [TextPassword, setTextPassword] = useState();
  const [StatusConnect, setStatusConnect] = useState(false);
  const [CheckboxSave, setCheckBoxSave] = useState(false);
  const HaveInternet = useNetInfo();

  const ValidarInformacion = async ({
    CredentialShow,
    camposVacios,
    correoInvalido,
  }) => {
    LocalAuthentication.authenticateAsync();
    if ((await LocalAuthentication.authenticateAsync()).success) {
      await AsyncStorage.getItem("Password").then(async (D) => {
        console.log(D);
        SignIn({
          CredentialShow: CredentialShow,
          camposVacios: camposVacios,
          correoInvalido: correoInvalido,
          Password: D,
        });
        Keyboard.dismiss();
        setTextPassword("");
      });
    }
  };

  const SignIn = async ({
    CredentialShow,
    camposVacios,
    correoInvalido,
    Password,
  }) => {
    //condicional de error
    if (!TextEmail.includes("@") && TextEmail != "" && TextPassword != "") {
      CredentialShow({ Status: true });
      camposVacios({ Status: true });
      correoInvalido({ Status: false });

      //condicional de todo correcto
    } else if (
      HaveInternet.isConnected &&
      TextEmail != "" &&
      TextPassword != ""
    ) {
      camposVacios({ Status: true });
      correoInvalido({ Status: true });
      if (Password) {
        PostUserCredential({
          Email: TextEmail,
          Password: Password,
          ErrorFunction: CredentialShow,
        });
      } else {
        PostUserCredential({
          Email: TextEmail,
          Password: TextPassword,
          ErrorFunction: CredentialShow,
        });
      }

      if (CheckboxSave) {
        await AsyncStorage.setItem("Email", TextEmail);
        await AsyncStorage.setItem("Password", `${TextPassword}`);
      }

      //Condicional de error
    } else if (
      !HaveInternet.isConnected &&
      TextEmail != "" &&
      TextPassword != ""
    ) {
      if (!StatusConnect) {
        setStatusConnect(true);
      } else {
        setStatusConnect(false);
        setTimeout(() => {
          setStatusConnect(true);
        }, 2000);
      }
      //Condicional de error
    } else if (
      HaveInternet.isConnected &&
      TextEmail == "" &&
      TextPassword == ""
    ) {
      camposVacios({ Status: false });
      CredentialShow({ Status: true });
      correoInvalido({ Status: true });
    }
  };

  return {
    SignIn,
    ValidarInformacion,
    LoadingLOGIN,
    setTextEmail,
    setStatusConnect,
    setTextPassword,
    setCheckBoxSave,
    CheckboxSave,
    TextEmail,
    TextPassword,
    StatusConnect,
  };
};
