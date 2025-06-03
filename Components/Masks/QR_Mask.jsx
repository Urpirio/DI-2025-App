import { View } from "react-native";

export default function QR_Mask() {
  return (
    <View style={{flex:1,position:'absolute',height:'100%'}}>
        <View style={{height:'25%',backgroundColor:'black',opacity:0.1}}>
    
        </View>
        <View style={{flexDirection:'row',height:'30%'}}>
            <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}></View>
                <View style={{width:'70%',justifyContent:'space-between'}}>
                    <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{height:'50%',width:'25%',borderLeftWidth:5,borderTopWidth:5,borderColor:'#023e8a'}}></View>
                        <View style={{height:'50%',width:'25%',borderRightWidth:5,borderTopWidth:5,borderColor:'#023e8a'}}></View>
                    </View>
                    <View style={{height:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                        <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderLeftWidth:5,borderColor:'#023e8a'}}></View>
                        <View style={{height:'50%',width:'25%',borderBottomWidth:5,borderRightWidth:5,borderColor:'#023e8a'}}></View>
                    </View>
                </View>
                <View style={{width:'15%',backgroundColor:'black',opacity:0.1}}></View>
        </View>
        <View style={{height:'50%',backgroundColor:'black',opacity:0.1}}></View>
    </View>
  )
};
