import { View} from "react-native";
import { StyleHome } from "../../style/StyleHome";
import { Skeleton,LinearGradient } from "@rneui/base";

export default function CardSkeleton() {
  return (
    <View style={StyleHome.CardEvent}>
        <View style={{width:'70%',gap:5}}>
            <Skeleton LinearGradientComponent={LinearGradient} width={150} height={20}/>
            <Skeleton LinearGradientComponent={LinearGradient} width={100} height={20}/>
            <View style={{flexDirection:'row',gap:10}}>
                <Skeleton LinearGradientComponent={LinearGradient} width={50} height={20}/>
                <Skeleton LinearGradientComponent={LinearGradient} width={50} height={20}/>
            </View>
        </View>
        <View style={StyleHome.CardEventBtns}>
            <Skeleton LinearGradientComponent={LinearGradient} width={60} height={100}/>
        </View>
    </View>
  )
}
