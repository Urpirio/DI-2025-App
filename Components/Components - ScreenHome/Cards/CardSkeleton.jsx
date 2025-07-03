import { View} from "react-native";
import { Skeleton,LinearGradient } from "@rneui/base";

export default function CardSkeleton() {
  return (
     <View style={{
        borderWidth:1,
        justifyContent:'space-between',
        padding:10,
        marginBottom:10,
        borderRadius:10,
        boxShadow:'0px 0px 1px 0px gray',
        borderColor:'#adb5bd',
        flexGrow: 1,
        flexBasis:0, 
     }}>
            <View style={{width:'100%',gap:5,height:'60%',justifyContent:'space-between'}}>
                <Skeleton style={{height:20}}/>
                
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center',width:'30%'}}>
                        <Skeleton style={{height:20}} />
                    </View>
                    
                    <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center',width:'30%'}}>
                        <Skeleton style={{height:20}} />
                    </View>
                    
                    <View style={{gap:5, padding:5,flexDirection:'row',borderRadius:10,alignItems:'center',width:'30%'}}>
                        <Skeleton style={{height:20}} />
                    </View>
                </View>
            </View>
            <View style={{
              width:'100%',
              justifyContent:'center',
              alignItems:'center',
            }}>
                <Skeleton style={{height:30,borderRadius:10}}/>
            </View>
        </View>
  )
}
