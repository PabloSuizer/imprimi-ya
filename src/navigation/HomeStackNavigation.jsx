
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../screens/Home"
import Detail from "../screens/Detail";



const Stack = createNativeStackNavigator()

export default function HomeStackNavigation() {
  return (

          <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Detail" component={Detail}/>
          </Stack.Navigator>

  );
}
