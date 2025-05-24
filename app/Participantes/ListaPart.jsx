import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ListaPart() {
  return (
    <SafeAreaProvider>
        <View>
            <Text>Lista participantes</Text>
        </View>
    </SafeAreaProvider>
  )
}
