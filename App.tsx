import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from './src/context/store'
import Routes from './src/Routes'

function App() {
	return (
		<AuthProvider>
			<Routes />
			<StatusBar style='auto' />
		</AuthProvider>
	)
}

export default App
