import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar } from 'expo-status-bar'

import SingIn from './src/components/SingIn'
import CreateAccount from './src/components/CreateAccount'
import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Details from './src/components/Details'
import { Button } from 'react-native'
import Search2 from './src/components/Search2'

export type RootStackParamList = { SingIn: undefined; CreateAccount: undefined }
const AuthStack = createStackNavigator<RootStackParamList>()

export type TabsParamList = { Home: undefined; Search: undefined }
const Tabs = createBottomTabNavigator<TabsParamList>()

interface DetailsProps {
	name: string
}
export type HomeStackParamList = { Home: {}; Details: DetailsProps }
const HomeStack = createStackNavigator<HomeStackParamList>()
const HomeStackScreen = () => (
	<HomeStack.Navigator
		screenOptions={{
			headerTitleContainerStyle: {
				alignItems: 'center',
			},
			headerLeft: () => null,
		}}
	>
		<HomeStack.Screen name='Home' component={Home} />
		<HomeStack.Screen
			name='Details'
			component={Details}
			options={({ route }) => ({ title: route.params.name })}
		/>
	</HomeStack.Navigator>
)

export type ProfileStackParamList = {
	Search2: undefined
	Home: { screen: 'Details'; params: { name: string } }
}
const ProfileStack = createStackNavigator<ProfileStackParamList>()
const SearchStackScreen = () => (
	<ProfileStack.Navigator
		screenOptions={{
			headerTitleContainerStyle: {
				alignItems: 'center',
			},
		}}
	>
		<ProfileStack.Screen name='Search2' component={Search2} />
	</ProfileStack.Navigator>
)

const TabsScreen = () => (
	<Tabs.Navigator>
		<Tabs.Screen name='Home' component={HomeStackScreen} />
		<Tabs.Screen name='Search' component={SearchStackScreen} />
	</Tabs.Navigator>
)

export type DrawerStackScreen = { Home: undefined; Profile: undefined }
const Drawer = createDrawerNavigator<DrawerStackScreen>()

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name='Home' component={TabsScreen} />
				<Drawer.Screen name='Profile' component={Profile} />
			</Drawer.Navigator>
			<StatusBar style='auto' />
		</NavigationContainer>
	)
}

export default App
