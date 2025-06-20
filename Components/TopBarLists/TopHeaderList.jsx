
import { View,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import { StyleParticipantes } from '../../style/StyleParticipantes';


export default function TopHeaderList({
    TextSearch,IconBtnFilter,IconBtnFilterR,setFiltroBusqueda,
    setFiltroEstado,FiltroBusqueda,DeployFilterS,DeploySelectR,
    DeployFilterRegistro,FiltroEstado,DeploySelectS,setTextSearch
}) {
  return (
    <View>
        <View style={StyleParticipantes.SearchContainer}>
                  <TouchableOpacity style={StyleParticipantes.BtnSearch}>
                      <Image style={StyleParticipantes.IconBtnSearch}
                        source={require('../../assets/IconParticipantes/search-big.png')}/>
                  </TouchableOpacity>
                  <TextInput style={StyleParticipantes.TextInputSearch} 
                    placeholder={`Buscador con ${FiltroBusqueda}`} placeholderTextColor={'#adb5bd'} 
                      value={TextSearch} onChangeText={setTextSearch}/>
            </View>
            <View style={{flexDirection:'row',gap:5}}>
            <View style={StyleParticipantes.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantes.BtnDeployFilter} 
                onPress={DeployFilterS}>
                <Text style={{color:'gray'}}>Filtrar busqueda por</Text>
                <Image style={StyleParticipantes.IconArrow} 
                  source={IconBtnFilter.Icon}/>
              </TouchableOpacity>
              {/* Filtro por Email y Nombre del participante */}
              <View style={DeploySelectS}>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilterS} onPress={()=>{
                  setFiltroBusqueda('Email');
                  DeployFilterS();
                }}>
                  <Text style={{color:'gray'}}>Email</Text>
                  <Text>{FiltroBusqueda == 'Email' ? '✔️' : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilterS} onPress={()=>{
                  setFiltroBusqueda('Nombre');
                  DeployFilterS();
                }}>
                  <Text style={{color:'gray'}}>Nombre</Text>
                  <Text>{FiltroBusqueda == 'Nombre' ? '✔️' : ''}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Filtro por estado del participante */}
            <View style={StyleParticipantes.ContainerFilter}>
              <TouchableOpacity style={StyleParticipantes.BtnDeployFilter} 
                onPress={DeployFilterRegistro}>
                <Text style={{color:'gray'}}>Filtro por estados</Text>
                <Image style={StyleParticipantes.IconArrow} 
                  source={IconBtnFilterR.Icon}/>
              </TouchableOpacity>

              <View style={DeploySelectR}>

                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilterR} onPress={()=>{
                  setFiltroEstado('Registrados');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>Registrados</Text>
                  <Text>{FiltroEstado == 'Registrados' ? '✔️' : ''}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilterR} onPress={()=>{
                  setFiltroEstado('No registrados');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>No registrado</Text>
                  <Text>{FiltroEstado == 'No registrados' ? '✔️' : ''}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleParticipantes.SelectBtnForFilterR} onPress={()=>{
                  setFiltroEstado('Todos');
                  DeployFilterRegistro();
                }}>
                  <Text style={{color:'gray'}}>Todos</Text>
                  <Text>{FiltroEstado == 'Todos' ? '✔️' : ''}</Text>
                </TouchableOpacity>
              </View>
            </View>
            </View>
    </View>
  )
}
