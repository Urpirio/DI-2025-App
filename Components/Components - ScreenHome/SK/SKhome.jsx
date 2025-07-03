
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardSkeleton from "../Cards/CardSkeleton";
import SearchHome from "../../Searchs/Search - Home";
import { ScrollView } from "react-native";

export default function SKhome({
    SearchText,
    setSearchText,
    RotateIconFilter,
    DeployFilter,
    GetSalaEvent,
    StyleFiltros,
    LoadingF,
    DataSala,
    SelectName,
    ChangeSelected,
    IconBtnFilter,
    StyleBtnTodos,
    StyleBtnHoy,
    SwitchStyle,
    setEventosHoy,
    IconSearch

}) {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
            <ScrollView style={{padding:10}}>
                <SearchHome
                SearchText={SearchText}
                setSearchText={setSearchText}
                setEventosHoy={setEventosHoy}
                RotateIconFilter={RotateIconFilter}
                DeployFilter={DeployFilter}
                DataSala={DataSala}
                GetSalaEvent={GetSalaEvent}
                SelectName={SelectName}
                StyleBtnHoy={StyleBtnHoy}
                StyleBtnTodos={StyleBtnTodos}
                StyleFiltros={StyleFiltros}
                SwitchStyle={SwitchStyle}
                ChangeSelected={ChangeSelected}
                IconBtnFilter={IconBtnFilter}
                IconSearch={IconSearch}
                LoadingF={LoadingF}/>
                
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
            </ScrollView>
</SafeAreaProvider>
  )
}
