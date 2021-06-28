import React from 'react'
import { Button } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import ScreenContainer from './ScreenContainer'
import { HomeStackParamList, TabsParamList } from '../../App'

interface HomeProps extends StackScreenProps<HomeStackParamList, 'Home'> {}

const Home: React.FC<HomeProps> = ({ navigation }) => (
	<ScreenContainer>
		<Text>Home!</Text>
		<Button
			title='React Native by Example'
			onPress={() =>
				navigation.push('Details', { name: 'React Native by Example ' })
			}
		/>
		<Button
			title='React Native School'
			onPress={() =>
				navigation.push('Details', { name: 'React Native School' })
			}
		/>
	</ScreenContainer>
)

export default Home
