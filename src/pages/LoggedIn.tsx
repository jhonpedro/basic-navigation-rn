import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import Details from '../components/Details'
import Search2 from '../components/Search2'
import Profile from '../components/Profile'

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
export type DrawerStackScreen = { Home: undefined; Profile: undefined }
const Drawer = createDrawerNavigator<DrawerStackScreen>()

const TabsScreen = () => (
	<Tabs.Navigator>
		<Tabs.Screen name='Home' component={HomeStackScreen} />
		<Tabs.Screen name='Search' component={SearchStackScreen} />
	</Tabs.Navigator>
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

export default function LoggedIn() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Home' component={TabsScreen} />
			<Drawer.Screen name='Profile' component={Profile} />
		</Drawer.Navigator>
	)
}
