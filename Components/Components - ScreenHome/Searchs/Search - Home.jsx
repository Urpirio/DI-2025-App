import SwitchHome from "../Btn/SwitchHome";
import { StyleHome } from "../../../style/Style - ScreenHome/StyleHome";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { BlurView } from "expo-blur";
import { useHome } from "../../../hooks/hooks - ScreenHome/useFilterHome";
import { router, useLocalSearchParams } from "expo-router";

// Este es el componente de filtro y buscador de la pantalla de evento o home.
export default function SearchHome({
  SearchText,
  setSearchText,
  GetSalaEvent,
  DataSala,
  SelectName,
  ChangeSelected,
  setEventosHoy,
}) {

  const LocalData = useLocalSearchParams();
  const ImageP = LocalData?.profile_picture ? 
  {uri:`https://directus-prueba.dominicanainnova.gob.do/assets/${LocalData?.profile_picture}`} : 
  {uri:'https://i.pinimg.com/736x/1a/a8/d7/1aa8d75f3498784bcd2617b3e3d1e0c4.jpg'};

  const {
    DeployFilter,
    IconBtnFilter,
    StyleFiltros,
    IconSearch,
    RotateIconFilter,
    SwitchStyle,
    StyleBtnHoy,
    StyleBtnTodos,
  } = useHome();

  return (
    <View style={{ paddingVertical: 5 }}>

      <View>
        <View style={StyleHome.Header}>
          <View>
            <Text style={StyleHome.TitlesHeader}>Eventos</Text>
          </View>
          <TouchableOpacity onPress={()=>router.navigate({pathname:'Screens/Modals/ModalCerrarSesion',params:{
            FirstName:LocalData?.FirstName,
            LastName:LocalData?.LastName,
            profile_picture: LocalData?.profile_picture
          }})}>
            <Image style={StyleHome.ImgProfile} source={ImageP} />
          </TouchableOpacity>
        </View>
      </View>


      <BlurView intensity={80} style={StyleHome.ContainerSearch}>
        <Image style={StyleHome.IconSearch} source={IconSearch} />
        <TextInput
          style={StyleHome.InputSearch}
          placeholder="Buscador"
          value={SearchText}
          onChangeText={setSearchText}
          placeholderTextColor={"#adb5bd"}
          onPress={() => {
            if (!RotateIconFilter) {
              DeployFilter();
            }
          }}
        />
      </BlurView>
      <View style={StyleHome.ConatinerFilter}>
        <View style={StyleHome.SubContainerFilter}>
          <TouchableOpacity
            style={StyleHome.BtnFilterDeploy}
            onPress={() => {
              DeployFilter();
              GetSalaEvent();
            }}
          >
            <Text style={{ color: "gray", fontWeight: "300" }}>
              Filtrar por sala
            </Text>
            <Image
              style={StyleHome.IconBtnFilter}
              source={IconBtnFilter.Icon}
            />
          </TouchableOpacity>
          <View style={StyleFiltros}>
            {/* Cambiar esto y colocar un componente a parte para que sea con un Switch */}

            <FlatList
              data={DataSala}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={StyleHome.BtnSelectFilter}
                    onPress={() => {
                      ChangeSelected({ Selected: item });
                      if (!RotateIconFilter) {
                        DeployFilter();
                      }
                    }}
                  >
                    <Text style={StyleHome.TextBtnSelectFilter}>{item}</Text>
                    <Text>{SelectName == item ? "✔️" : ""}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <SwitchHome
          StyleBtnTodos={StyleBtnTodos}
          FTodos={() => {
            setEventosHoy(false);
            SwitchStyle({ StatusStyle: false });
            if (!RotateIconFilter) {
              DeployFilter();
            }
          }}
          StyleBtnHoy={StyleBtnHoy}
          Fhoy={() => {
            setEventosHoy(true);
            SwitchStyle({ StatusStyle: true });
            if (!RotateIconFilter) {
              DeployFilter();
            }
          }}
        />
      </View>
    </View>
  );
}
