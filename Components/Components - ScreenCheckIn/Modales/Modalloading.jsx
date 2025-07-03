import { ActivityIndicator, Modal, Pressable, View } from "react-native";

export default function Modalloading({
    StatusLoading
}) {
  return (
   <Modal visible={StatusLoading} transparent={true}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Pressable style={{
                flex:1,
                filter:'blur(50px)',
                backgroundColor:'black',
                width:'100%',
                opacity:0.1
            }}>

            </Pressable>
            <View style={{
                backgroundColor:'white',
                padding:10,
                borderRadius:10,
                position:'absolute'
                }}>
                <ActivityIndicator size="large"/>
            </View>
        </View>
   </Modal>
  )
};
