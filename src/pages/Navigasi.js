import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Splash from '../components/Splash'
import Home from './Beranda'
import Riwayat from './Riwayat'
import Akun from './Akun'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()

function Tabbar () {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              if (route.name === 'Home') { return <Ionicons name={focused ? 'home' : 'home-outline'} size={30} color={color} /> }
              else if (route.name === 'Riwayat') { return <MaterialCommunityIcons name='history' size={30} color={color} /> }
              else if (route.name === 'Akun') { return <Ionicons name={focused ? 'person-circle-sharp' : 'md-person-circle-outline'} size={30} color={color} /> }
            },
            tabBarActiveTintColor: '#106AF0',
            tabBarInactiveTintColor: '#666666',
            tabBarLabelStyle: { fontSize: 16, paddingBottom: 3 },
            tabBarStyle: { height: 60, paddingVertical: 5 }
          })}
        >
            <Tab.Screen name="Home" component={Home} options={{
              headerShown: false
            }} />
            <Tab.Screen name="Riwayat" component={Riwayat} options={{
              headerShown: false
            }} />
            <Tab.Screen name="Akun" component={Akun} options={{
              headerShown: false
            }} />
        </Tab.Navigator>
  )
}

export default function Navigasi () {
  return (
    <NavigationContainer>
        <HomeStack.Navigator initialRouteName='Splash'>
            <HomeStack.Screen name='Splash' component={Splash} options={{
              headerShown: false
            }} />
            <HomeStack.Screen name='Beranda' component={Tabbar} options={{
              headerShown: false
            }} />
        </HomeStack.Navigator>
    </NavigationContainer>
  )
}
