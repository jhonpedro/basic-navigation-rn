import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, Button } from 'react-native'
import { RootStackParamList } from '../../App'

import ScreenContainer from './ScreenContainer'

interface CreateAccountProps
	extends StackScreenProps<RootStackParamList, 'CreateAccount'> {}

const CreateAccount: React.FC<CreateAccountProps> = ({ navigation }) => (
	<ScreenContainer>
		<Text>This is the create account screen</Text>
		<Button title='Sing in' onPress={() => navigation.push('SingIn')} />
	</ScreenContainer>
)

export default CreateAccount
