import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../App'
import ScreenContainer from './ScreenContainer'

interface SingInProps extends StackScreenProps<RootStackParamList, 'SingIn'> {}

const SingIn: React.FC<SingInProps> = ({ navigation }) => (
	<ScreenContainer>
		<Text>Sing in</Text>
		<Button title='Sing in' onPress={() => navigation.push('SingIn')} />
		<Button
			title='Create Account'
			onPress={() => navigation.push('CreateAccount')}
		/>
	</ScreenContainer>
)

export default SingIn
