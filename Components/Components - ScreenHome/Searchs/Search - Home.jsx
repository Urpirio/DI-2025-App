import SwitchHome from "../Btn/SwitchHome";
import { StyleHome } from "../../../style/Style - ScreenHome/StyleHome";
import { Image,Text, TouchableOpacity, View, TextInput,ActivityIndicator, FlatList} from "react-native";
import { BlurView } from "expo-blur";

export default function SearchHome({
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
    
<View>
                <BlurView intensity={180} style={{
                        borderRadius:10,
                        height:50,
                        flexDirection:'row',
                        borderColor:'#ced4da',
                        width:`100%`,
                        marginBottom: 10,
                        backgroundColor:'gray',
                        justifyContent:'center',
                        alignItems:'center',
                        // boxShadow:'0px 0px 60px 1px gray'
                    }}>
                        {/* <TouchableOpacity style={{padding:5,justifyContent:'center',alignItems:'center'}} > */}
                            <Image style={{height:30,width:30,objectFit:'contain',tintColor:'#023e7d'}} source={IconSearch}/>
                        {/* </TouchableOpacity> */}
                        <TextInput style={{
                            fontSize:16,
                            width:`90%`,
                            }} placeholder="Buscador" value={SearchText} onChangeText={setSearchText} placeholderTextColor={'#adb5bd'} 
                            onPress={()=>{
                                if(!RotateIconFilter){
                                    DeployFilter();
                                };
                            }}/>
                </BlurView>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
                 <View style={StyleHome.ContainerFilter}>
                    <TouchableOpacity  style={StyleHome.BtnFilterDeploy} 
                        onPress={()=>{DeployFilter(); GetSalaEvent();}}>
                        <Text style={{color:'gray'}}>Filtrar por sala</Text>
                        <Image style={StyleHome.IconBtnFilter} source={IconBtnFilter.Icon}/>
                    </TouchableOpacity>
                    <View style={StyleFiltros}>
    
                        {LoadingF ? <FlatList 
                        data={DataSala}
                        renderItem={({item})=>{
                            return(
                            <TouchableOpacity style={StyleHome.BtnSelectFilter} onPress={()=>{
                                ChangeSelected({Selected: item});
                                if(!RotateIconFilter){
                                    DeployFilter();
                                };
                            }}>
                                <Text style={StyleHome.TextBtnSelectFilter}>{item}</Text>
                                <Text>{SelectName == item ? "✔️" : ""}</Text>
                            </TouchableOpacity>
                            )
                        }}
                        /> : <ActivityIndicator size={'small'}/>}
    
                    </View>
                </View>
                <SwitchHome
                        StyleBtnTodos={StyleBtnTodos}
                        FTodos={()=>{
                           
                        setEventosHoy(false);
                        SwitchStyle({StatusStyle: false});
                        if(!RotateIconFilter){
                            DeployFilter();
                        };
                        }}
                        StyleBtnHoy={StyleBtnHoy}
                        Fhoy={()=>{
                        setEventosHoy(true);
                        SwitchStyle({StatusStyle: true});
                        if(!RotateIconFilter){
                            DeployFilter();
                        };
                        }}
                    />
               </View>
    </View>
  )
}
