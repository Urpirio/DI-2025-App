import { View } from "react-native";
import { TouchableOpacity } from "react-native";


export default function QR_Mask({
    Zoom_moreIN,Zoom_LessIN,Zoom_LessOUT,Zoom_moreOUT
}) {

    


  return (
    <View style={{flex:1,position:'absolute',height:'100%'}}>
        <TouchableOpacity style={{height:'25%',backgroundColor:'black',opacity:0.1}} onPressIn={Zoom_moreIN} onPressOut={Zoom_moreOUT}>
    
        </TouchableOpacity>
        <View style={{flexDirection:'row',height:'30%'}}>
            <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}></View>
                <View style={{width:'70%',justifyContent:'space-between'}}>
                    <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{height:'50%',width:'25%',borderLeftWidth:5,borderTopWidth:5,borderColor:'#007AFF',borderTopLeftRadius:10}}></View>
                        <View style={{height:'50%',width:'25%',borderRightWidth:5,borderTopWidth:5,borderColor:'#007AFF',borderTopRightRadius:10}}></View>
                    </View>
                    <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                        <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderLeftWidth:5,borderColor:'#007AFF',borderBottomLeftRadius:10}}></View>
                        <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderRightWidth:5,borderColor:'#007AFF',borderBottomRightRadius:10}}></View>
                    </View>
                </View>
            <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}></View>
        </View>
        <TouchableOpacity style={{height:'50%',backgroundColor:'black',opacity:0.1}} onPressIn={Zoom_LessIN} onPressOut={Zoom_LessOUT}>

        </TouchableOpacity>
    </View>
  )
};
