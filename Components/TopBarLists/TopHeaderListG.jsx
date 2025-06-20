import { View , TouchableOpacity,Image,Text,TextInput} from "react-native";
import { StyleParticipantesGeneral } from "../../style/StyleParticipantesGeneral";

export default function TopHeaderListG({
    setTextSearch,
    DeployFilter,
    setFiltroBusqueda,
    FiltroBusqueda,
    TextSearch,
    DeploySelect,
    IconBtnFilter,
}) {
  return (
    <View>
         <View style={StyleParticipantesGeneral.SearchContainer}>
                  <TouchableOpacity style={StyleParticipantesGeneral.BtnSearch}>
                      <Image style={StyleParticipantesGeneral.IconBtnSearch}
                        source={require('../../assets/IconParticipantes/search-big.png')}/>
                  </TouchableOpacity>
                  <TextInput style={StyleParticipantesGeneral.TextInputSearch} 
                    placeholder={`Buscador por ${FiltroBusqueda}`} placeholderTextColor={'#adb5bd'} value={TextSearch} 
                    onChangeText={setTextSearch}/>
            </View>
            <View style={StyleParticipantesGeneral.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantesGeneral.BtnDeployFilter} 
                onPress={DeployFilter}>
                <Text style={{color:'gray'}}>Filtrar busqueda por</Text>
                <Image style={StyleParticipantesGeneral.IconArrow} 
                  source={IconBtnFilter.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelect}>
                <TouchableOpacity style={StyleParticipantesGeneral.SelectBtnForFilter} onPress={()=>{
                  setFiltroBusqueda('Email');
                  DeployFilter();
                  }}>
                  <Text>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleParticipantesGeneral.SelectBtnForFilter} onPress={()=>{
                  setFiltroBusqueda('Nombre');
                  DeployFilter();
                }}>
                  <Text>Nombre</Text>
                </TouchableOpacity>
              </View>
            </View>
    </View>
  )
}
