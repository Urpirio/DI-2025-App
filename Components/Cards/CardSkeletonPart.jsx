import { View } from "react-native";
import { StyleCardSkeletonPart } from "../../style/StyleCardSkeletonPart";
import { Skeleton } from "@rneui/base";

export default function CardSkeletonPart() {
  return (
    <View style={StyleCardSkeletonPart.BodyCard}>
        <View style={StyleCardSkeletonPart.ImageContainer}>
          <Skeleton style={{height:100,width:100,}}/>
        </View>
        <View style={StyleCardSkeletonPart.MainContainer}>
            <View style={StyleCardSkeletonPart.Section1C}>
                <Skeleton style={{width:'30%'}}/>
                <Skeleton style={{width:'30%'}}/>
            </View>
            <View style={StyleCardSkeletonPart.Section2C}>
               <Skeleton />
               <Skeleton style={{width:'30%'}}/>
            </View>
            <View style={StyleCardSkeletonPart.Section3C}>
              <Skeleton/>
            </View>
        </View>            
  </View>
  )
}
