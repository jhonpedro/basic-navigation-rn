import React from 'react'
import { useState } from 'react'
import { Button, ActivityIndicator } from 'react-native'

import ScreenContainer from '../components/ScreenContainer'
import { useAuth } from '../context/store'

export default function SingIn() {
	const [loading, setLoading] = useState(false)
	const { logIn } = useAuth()

	const handleLogIn = async () => {
		setLoading(true)
		await logIn()
	}

	if (loading) {
		return (
			<ScreenContainer>
				<ActivityIndicator color='#9d0208' />
			</ScreenContainer>
		)
	}

	return (
		<ScreenContainer>
			<Button title='Log in' onPress={handleLogIn} />
		</ScreenContainer>
	)
}
