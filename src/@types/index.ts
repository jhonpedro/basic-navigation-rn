import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import {
	CompositeNavigationProp,
	NavigatorScreenParams,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type TabsParamList = {
	Home: undefined
	Search: undefined
}

export type HomeStackParamList = {
	Home: { screen: string; params: { name: string } }
	Details: {
		name: string
	}
}

export type HomeStackScreenProps = CompositeNavigationProp<
	StackNavigationProp<HomeStackParamList, 'Home'>,
	CompositeNavigationProp<
		StackNavigationProp<SearchStackParamList>,
		DrawerNavigationProp<DrawerStackScreen>
	>
>

export type SearchStackScreenProps = CompositeNavigationProp<
	StackNavigationProp<SearchStackParamList, 'Search2'>,
	StackNavigationProp<HomeStackParamList, 'Home'>
>

export type DrawerStackScreen = { Home: undefined; Profile: undefined }

export type SearchStackParamList = {
	Search2: undefined
}

export type LoggedNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<TabsParamList, 'Home'>,
	CompositeNavigationProp<
		StackNavigationProp<HomeStackParamList>,
		StackNavigationProp<SearchStackParamList>
	>
>
