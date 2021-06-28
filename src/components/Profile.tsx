import React from 'react'
import { Button } from 'react-native'
import { Text } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import { DrawerStackScreen } from '../../App'
import ScreenContainer from './ScreenContainer'

interface ProfileProps
	extends DrawerScreenProps<DrawerStackScreen, 'Profile'> {}

const Profile: React.FC<ProfileProps> = ({ navigation }) => (
	<ScreenContainer>
		<Text>Profile screen!</Text>
		<Button title='Open drawer' onPress={() => navigation.openDrawer()} />
	</ScreenContainer>
)

export default Profile
