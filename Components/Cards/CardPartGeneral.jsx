import { View,Image,Text, TouchableOpacity, ActivityIndicator, FlatList,VirtualizedList } from "react-native";
import { StyleCardParticipantes } from "../../style/StyleCardParticipantes";
import { useSendPart } from "../../func/ListaPart/useSendPart";
import { useState } from "react";
import { RefreshControl } from "react-native";
import TopHeaderListG from "../TopBarLists/TopHeaderListG";

export default function CardPartGeneral({
    ListaParticipantes,
    funcionRefresh,
    StateRefresh,
    ScreenRefresHome,
    setTextSearch,
    DeployFilter,
    setFiltroBusqueda,
    FiltroBusqueda,
    DeploySelect,
    TextSearch,
    IconBtnFilter,
}) {

    
  const {AsistenciaStaff} = useSendPart();
  //Esto no se usara temporalmente.
  const [Loading,setLoading] = useState(false);

  return(
  <FlatList 
    refreshControl={<RefreshControl 
        refreshing={StateRefresh} 
        onRefresh={ScreenRefresHome}/>}
    initialNumToRender={5}
    // Eso viene de un componente el continue el fitrado y 
    // buscador y al mismo tiempo pide los siguientes datos.
    ListHeaderComponent={
    <TopHeaderListG
    setTextSearch={setTextSearch}
    DeployFilter={DeployFilter}
    setFiltroBusqueda={setFiltroBusqueda}
    FiltroBusqueda={FiltroBusqueda}
    DeploySelect={DeploySelect}
    TextSearch={TextSearch}
    IconBtnFilter={IconBtnFilter}
    />}
    ListHeaderComponentStyle={{zIndex:20}}

    data={ListaParticipantes}
    renderItem={({item})=>{
    
    
    const ImageProfile = item.profile_picture
    ? `https://directus-prueba.dominicanainnova.gob.do/assets/${item.profile_picture}` 
    : `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;

    const FirstName = item.first_name ?  item.first_name.split(" ")[0] : '';

    const LastName = item.last_name ? item.last_name.split(" ")[0] : '';

    const Email = item.email;

    const IdPersona = item.id.slice(30,36);

    const userID = item.id;


     return (
        //Cards de los participantes.
        <View key={item.id} style={StyleCardParticipantes.BodyCard}>
                <View style={StyleCardParticipantes.ImageContainer}>
                    <Image style={StyleCardParticipantes.PerfilImg} 
                        source={{uri:ImageProfile}}
                        />
                </View>
                <View style={StyleCardParticipantes.MainContainer}>
                    <View style={StyleCardParticipantes.Section1C}>
                        <Text style={StyleCardParticipantes.TextNombre}>{FirstName} {LastName}</Text>
                        <Text style={StyleCardParticipantes.TextId}>ID 
                            {IdPersona ?  IdPersona : 'No disponible'}
                        </Text>
                    </View>
                    <View style={StyleCardParticipantes.Section2C}>
                         <Text>{Email ? Email : 'No disponible'}</Text>
                         <Text style={item.checkin ? StyleCardParticipantes.TextInscrito :  StyleCardParticipantes.TextNotInscrito}>{item.checkin ? 'Inscrito' : 'No Inscrito'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={StyleCardParticipantes.btnAgregar} onPress={()=>{
                            AsistenciaStaff({userID:userID,FuncLoading:setLoading,FuncionAutoR:funcionRefresh});
                        }}>
                            <Text style={StyleCardParticipantes.TextBtns}>Agregar a Evento</Text>
                        </TouchableOpacity>
                    </View>
              </View> 
         </View>
  )}}/>)

}
