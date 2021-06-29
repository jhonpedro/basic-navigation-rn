import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, Button } from 'react-native'
import { SearchStackScreenProps } from '../@types'

import ScreenContainer from './ScreenContainer'

interface SearchProps {
	navigation: SearchStackScreenProps
}

const Search2: React.FC<SearchProps> = ({ navigation }) => (
	<ScreenContainer>
		<Text>Profile screen!</Text>
		<Button
			title='React Native by Example'
			onPress={() => navigation.push('Search2')}
		/>
		<Button
			title='React Native School'
			onPress={() =>
				navigation.navigate('Home', {
					screen: 'Details',
					params: {
						name: 'React Native School',
					},
				})
			}
		/>
	</ScreenContainer>
)

export default Search2
