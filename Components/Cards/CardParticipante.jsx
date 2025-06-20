import { View,Image,Text, TouchableOpacity,ActivityIndicator, FlatList,RefreshControl } from "react-native";
import { StyleCardParticipantes } from "../../style/StyleCardParticipantes";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useSendPart } from "../../func/ListaPart/useSendPart";
import TopHeaderList from "../TopBarLists/TopHeaderList";


export default function CardParticipante({
    DataParticipantes,funcionRefresh,
    TextSearch,IconBtnFilter,IconBtnFilterR,setFiltroBusqueda,
    setFiltroEstado,FiltroBusqueda,FiltroEstado,DeployFilterRegistro,
    DeployFilterS,DeploySelectR,DeploySelectS,setTextSearch,ScreenRefresHome,
    StateRefresh
}) {
    
    const { ConfirmarAsistencia } = useSendPart();
    
    const LocalData = useLocalSearchParams();
    const [Loading2,setLoading2] = useState(false);
      

    return(
        <FlatList
        ListHeaderComponentStyle={{zIndex:20}}
        ListHeaderComponent={<TopHeaderList
        TextSearch={TextSearch}
        IconBtnFilter={IconBtnFilter}
        IconBtnFilterR={IconBtnFilterR}
        setFiltroBusqueda={setFiltroBusqueda}
        setFiltroEstado={setFiltroEstado}
        FiltroBusqueda={FiltroBusqueda}
        FiltroEstado={FiltroEstado}
        DeployFilterRegistro={DeployFilterRegistro}
        DeployFilterS={DeployFilterS}
        DeploySelectR={DeploySelectR}
        DeploySelectS={DeploySelectS}  
        setTextSearch={setTextSearch} 
        />}
        refreshControl={<RefreshControl 
            refreshing={StateRefresh} 
            onRefresh={ScreenRefresHome} 
        />}
        initialNumToRender={5}
        data={DataParticipantes}
        renderItem={({item})=>{

            const FirstName = item.first_name ? item.first_name.split(" ")[0] : '';
            const LastName = item.last_name ? item.last_name.split(" ")[0] : '';
            const IdPersona = item.id.slice(30,36);
            const Email = item.email;
            const ImageProfile = item.profile_picture 
            ? `https://directus-prueba.dominicanainnova.gob.do/assets/${item.profile_picture}` 
            :   `https://i.pinimg.com/736x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg`;
    

            return(
                <View key={IdPersona} style={StyleCardParticipantes.BodyCard}>
                <View style={StyleCardParticipantes.ImageContainer}>
                    <Image style={StyleCardParticipantes.PerfilImg} 
                        source={{uri:ImageProfile}}
                        />
                </View>
                <View style={StyleCardParticipantes.MainContainer}>
                    <View style={StyleCardParticipantes.Section1C}>
                        <Text style={StyleCardParticipantes.TextNombre}>{FirstName} {LastName}</Text>
                        <Text style={StyleCardParticipantes.TextId}>ID {IdPersona ? IdPersona : 'No disponible'}</Text>
                    </View>
                    <View style={StyleCardParticipantes.Section2C}>
                         <Text>{Email ? Email : 'No disponible'}</Text>
                         <Text style={item.checkin ? StyleCardParticipantes.TextInscrito :  StyleCardParticipantes.TextNotInscrito}>{item.checkin ? 'Registrado' : 'No registrado'}</Text>
                    </View>
                    {item.checkin ? <View/> : <View style={StyleCardParticipantes.Section3C}>
                        <TouchableOpacity style={StyleCardParticipantes.BtnConfirmarAsistencia} onPress={()=>{ConfirmarAsistencia({TokenAccess:LocalData.TokenAccess,userEventId:item.userEventI})}} >
                           { Loading2 ? <ActivityIndicator size={'small'}/> :
                            <Text style={StyleCardParticipantes.TextBtns}>Confirmar Asistencia</Text>
                            }
                        </TouchableOpacity>
                    </View>}
              </View>
            
            </View>
            )
        }}
        />
    )
  
};
