import { Text, View,TouchableOpacity,Image,TextInput, TouchableNativeFeedback, ScrollView, FlatList, RefreshControl } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleParticipantes } from "../../style/StyleParticipantes";
import { useState } from "react";
import CardParticipante from "../../Components/CardParticipante";
import { DataPrueba } from "../../Data/DataPrueba";
import { useLocalSearchParams } from "expo-router";
import useRefresh from "../../hooks/useRefresh";

export default function ListaPart() {

    const [DeploySelect,setDeploySelect] = useState(StyleParticipantes.SelectContainerFilterHidden);
    const [RotateIconFilter,setRotateIconFilter] = useState(true);
    const [IconBtnFilter,setIconBtnFilter] = useState({
        Icon:require('../../assets/IconHome/ArrowDerecha.png')
    });
    const LocalData = useLocalSearchParams();
    const { ScreenRefresHome,StateRefresh} = useRefresh();



    const DeployFilter = () => {
            if(RotateIconFilter){
                setIconBtnFilter({
                    Icon:require('../../assets/IconHome/ArrowAbajo.png')
                });
                setDeploySelect(StyleParticipantes.SelectContainerFilter)
                setRotateIconFilter(!RotateIconFilter);
            }else{
                setIconBtnFilter({
                    Icon:require('../../assets/IconHome/ArrowDerecha.png')
                });
                setDeploySelect(StyleParticipantes.SelectContainerFilterHidden)
                setRotateIconFilter(!RotateIconFilter);
            }
  };


  return (
    <SafeAreaProvider style={StyleParticipantes.Body}>
        <ScrollView style={StyleParticipantes.MainContainer} 
            refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome} />}>
            <View style={StyleParticipantes.SearchContainer}>
                  <TouchableOpacity style={StyleParticipantes.BtnSearch}>
                      <Image style={StyleParticipantes.IconBtnSearch}
                        source={require('../../assets/IconParticipantes/search-big.png')}/>
                  </TouchableOpacity>
                  <TextInput style={StyleParticipantes.TextInputSearch} 
                    placeholder="Buscador" placeholderTextColor={'#adb5bd'}/>
            </View>
            <View style={StyleParticipantes.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantes.BtnDeployFilter} 
                onPress={DeployFilter}>
                <Text style={{color:'gray'}}>Filtrar busqueda por</Text>
                <Image style={StyleParticipantes.IconArrow} 
                  source={IconBtnFilter.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelect}>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter} onPress={()=>{console.log(LocalData)}}>
                  <Text>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilter}>
                  <Text>Nombre</Text>
                </TouchableOpacity>
              </View>
            </View>

          <FlatList 
            data={DataPrueba} 
            renderItem={({item})=>{
            return(   
            <CardParticipante 
            Nombre={item.Nombre}
            Apellido={item.Apellido}
            IdPersona={item.ID}
            Email={item.Email}
            ImgPerfil={item.ImgPerfil}
            CheckIn={LocalData.NameLista == 'Lista General' ? true : false}
            />
            )
          }}/>

        </ScrollView>
    </SafeAreaProvider>
  )
}
