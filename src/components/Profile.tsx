import React, { useState } from 'react'
import { ActivityIndicator, Button } from 'react-native'
import { Text } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'

import ScreenContainer from './ScreenContainer'
import { useAuth } from '../context/store'
import { DrawerStackScreen } from '../@types'

interface ProfileProps
	extends DrawerScreenProps<DrawerStackScreen, 'Profile'> {}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
	const [loading, setLoading] = useState(false)
	const { logOut } = useAuth()

	const handleLogOut = async () => {
		setLoading(true)
		await logOut()
	}

	if (loading) {
		if (loading) {
			return (
				<ScreenContainer>
					<ActivityIndicator color='#9d0208' />
				</ScreenContainer>
			)
		}
	}

	return (
		<ScreenContainer>
			<Text>Profile screen!</Text>
			<Button title='Open drawer' onPress={() => navigation.openDrawer()} />
			<Button title='Log out' onPress={handleLogOut} />
		</ScreenContainer>
	)
}

export default Profile
