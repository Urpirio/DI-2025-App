import { View,TouchableOpacity,Image,Text } from 'react-native';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function TopBar1(){

  const LocalData = useLocalSearchParams();

  return (
    <View style={{ width: '100%',backgroundColor: 'white',paddingVertical: 5}}>
        <View style={{
            width: '100%',
            justifyContent: 'space-between',                     
            alignItems:'center',
            flexDirection: 'row',              
            zIndex: 10,
            paddingRight:10,
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
                <Image 
                style={{
                height:50,
                width:50,
                tintColor:'#007AFF'
                }}
                source={require('../../../assets/IconNavegation/arrow-left-stroke.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>router.navigate({pathname:'Screens/Modals/ModalsAboutEvents',params:{
                    TokenAccess:LocalData.TokenAccess,
                    IDEvents:LocalData.IDEvents,
                }})}
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    width: 40, height: 40,
                    backgroundColor: '#007AFF',
                    borderColor: '#007AFF',
                    padding: 5,
                    alignItems:'center',
                    justifyContent:'center'
            }}>
                <Image
                style={{ height: '60%', width: '60%', tintColor: 'white', objectFit: 'contain' }}
                source={require('../../../assets/IconParticipantes/information-2-line.png')} />

            </TouchableOpacity>
                        
        </View>
        <View style={{paddingHorizontal:5}}>
            <Text style={{fontSize:20,fontWeight:'500',color:'#003876'}}>{LocalData.NombreEvento}</Text>
        </View>
    </View>
  )
}
