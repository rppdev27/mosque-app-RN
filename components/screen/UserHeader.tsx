import { View, Text, Image } from 'react-native'
import useAppStore from '../../store'

const UserHeader = () => {

    const location = useAppStore((state) => state.userLocation)

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            width: '100%',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 0,
            marginTop: 15,
            alignItems: 'center',
          }}>
            <View>
              <Text style={{ fontSize: 10, color: 'gray', letterSpacing: 0.4 }}>Your Location</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{location} </Text>
            </View>
            <Image source={{ uri: 'https://images.unsplash.com/profile-1575218989160-92f21bab8317image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}} style={{ width: 30, height: 30, borderRadius: 15 }} />
        </View>
    )
}
export default UserHeader