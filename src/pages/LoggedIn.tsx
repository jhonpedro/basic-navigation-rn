import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import Details from '../components/Details'
import Search2 from '../components/Search2'
import Profile from '../components/Profile'
import {
	DrawerStackScreen,
	HomeStackParamList,
	SearchStackParamList,
	TabsParamList,
} from '../@types'

const Tabs = createBottomTabNavigator<TabsParamList>()

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

const Drawer = createDrawerNavigator<DrawerStackScreen>()

const TabsScreen = () => (
	<Tabs.Navigator>
		<Tabs.Screen name='Home' component={HomeStackScreen} />
		<Tabs.Screen name='Search' component={SearchStackScreen} />
	</Tabs.Navigator>
)

const ProfileStack = createStackNavigator<SearchStackParamList>()
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
