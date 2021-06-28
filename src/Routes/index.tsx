import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../context/store'
import LoggedIn from '../pages/LoggedIn'

import SingIn from '../pages/SingIn'

export default function Routes() {
	const { isLoggedIn } = useAuth()

	return !isLoggedIn ? (
		<SingIn />
	) : (
		<NavigationContainer>
			<LoggedIn />
		</NavigationContainer>
	)
}
