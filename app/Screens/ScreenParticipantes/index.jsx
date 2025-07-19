import { Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalApis } from "../../../Apis/GlobalApis";
import { useCallback, useEffect, useState } from "react";
import { StyleScreenEventos } from "../../../style/Style - ScreenParticipantes/StyleScreen - Evento";
import { useRenderTodos } from "../../../hooks/hooks - ScreenParticipantes/useRenderTodos";
import { useSendPart } from "../../../hooks/hooks - ScreenParticipantes/useSendPart";
import { useSendPartG } from "../../../hooks/hooks - ScreenParticipantes/useSendPartG";
import { router, useLocalSearchParams } from "expo-router";
import useRefresh from "../../../hooks/hooks - Globales/useRefresh";
import { RefreshControl } from "react-native";
import { useFocusEffect } from "expo-router";
import { BlurView } from "expo-blur";
import TopBar1 from "../../../Components/components - ScreenParticipantes/TopBars/TopBar1";
import CardParticipantes from "../../../Components/components - ScreenParticipantes/Cards/CardParticipantes";


export default function index() {



    const { GetTodosUsuarios, DatosParticipantes, setTextSearch, TextSearch, FiltroBuscador, setFiltroBuscador, FiltroEstado, setFiltroEstado } = useRenderTodos();

    const LocalData = useLocalSearchParams();
    const [RefreshbtnCard, setRefreshbtnCard] = useState(false);
    const { ScreenRefresHome, StateRefresh } = useRefresh();




    useFocusEffect(useCallback(() => {
        GetTodosUsuarios();
    }, [TextSearch, FiltroEstado, RefreshbtnCard, StateRefresh]));

    const ChangeFiltroBusqueda = () => {
        if (FiltroBuscador === 'Nombre') {
            setFiltroBuscador('Email')
        } else {
            setFiltroBuscador('Nombre')
        }
    }




    return (
        <SafeAreaProvider style={StyleScreenEventos.BodyScreen}>
            

            <FlatList data={DatosParticipantes}

                refreshControl={<RefreshControl refreshing={StateRefresh} onRefresh={ScreenRefresHome} />}

                style={{ paddingHorizontal: 5 }}

                ListHeaderComponentStyle={{ zIndex: 50 }}

                ListEmptyComponent={
                    <View style={StyleScreenEventos.NoElementoslista}>
                        <Text style={StyleScreenEventos.TextNoElementos}>No hay coincidencia</Text>
                    </View>}

                ListHeaderComponent={
                    <View style={StyleScreenEventos.ContenedorFiltros}>
                        
                        <TopBar1/>

                        <View style={{ width: '100%' }}>
                            <BlurView intensity={80} style={StyleScreenEventos.ContenedorBuscador} >
                                <Image style={StyleScreenEventos.IconoBuscar}
                                    source={require('../../../assets/IconParticipantes/search-big.png')} />
                                <TextInput
                                    placeholderTextColor={'#adb5bd'}
                                    value={TextSearch}
                                    onChangeText={setTextSearch}
                                    placeholder={`Buscador por ${FiltroBuscador}`}
                                    style={StyleScreenEventos.InputBuscador} />
                                <TouchableOpacity onPress={ChangeFiltroBusqueda}>
                                    <Image
                                        style={{ height: 25, width: 25, objectFit: 'contain', tintColor: '#007AFF' }}
                                        source={require('../../../assets/IconParticipantes/menu-filter.png')} />
                                </TouchableOpacity>
                            </BlurView>
                        </View>

                        <View horizontal
                            style={StyleScreenEventos.ContainerFiltros}>
                            <TouchableOpacity
                                onPress={() => { setFiltroEstado('Todos los usuarios') }}
                                style={FiltroEstado === 'Todos los usuarios' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                                <Text style={FiltroEstado === 'Todos los usuarios' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros}>
                                    Todos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setFiltroEstado('Usuarios no inscritos') }}
                                style={FiltroEstado === 'Usuarios no inscritos' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                                <Text style={FiltroEstado === 'Usuarios no inscritos' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros}>No inscritos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setFiltroEstado('Usuarios Inscritos') }}
                                style={FiltroEstado === 'Usuarios Inscritos' ? StyleScreenEventos.BtnSeleccionadoFiltros : StyleScreenEventos.BtnNoSeleccionadoFiltros}>
                                <Text style={FiltroEstado === 'Usuarios Inscritos' ? StyleScreenEventos.TextBtnSeleccionadoFiltros : StyleScreenEventos.TextBtnNoSeleccionadoFiltros}>Inscritos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}

                renderItem={({ item }) => {

                    return (
                        <CardParticipantes item={item} setRefreshbtnCard={ScreenRefresHome} RefreshbtnCard={StateRefresh}/>
                    )
                }} />




            <TouchableOpacity onPress={() => {
                router.navigate({
                    pathname: 'Screens/ScreenCheckIn/CheckIn',
                    params: {
                        TokenAccess: LocalData.TokenAccess,
                        IDEvents: LocalData.IDEvents,
                        StaffId: LocalData.StaffId
                    }
                })
            }} style={StyleScreenEventos.BtnQr}>
                <Image
                    style={StyleScreenEventos.IconQr}
                    source={require('../../../assets/IconParticipantes/IconQR.png')} />
            </TouchableOpacity>

        </SafeAreaProvider>
    )
}
