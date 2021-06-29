import React from 'react'
import { Button } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import ScreenContainer from './ScreenContainer'
import { HomeStackParamList } from '../@types'

interface DetailsProps
	extends StackScreenProps<HomeStackParamList, 'Details'> {}

const Details: React.FC<DetailsProps> = ({ route }) => (
	<ScreenContainer>
		<Text>Details!</Text>
		<Text>{route.params.name}</Text>
	</ScreenContainer>
)

export default Details
