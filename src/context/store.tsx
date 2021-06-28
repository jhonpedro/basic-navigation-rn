import React, { createContext, useState, useContext } from 'react'

interface AuthContextType {
	isLoggedIn: boolean
	logIn: () => Promise<void>
	logOut: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider: React.FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const logIn = async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})
		setIsLoggedIn(true)
	}

	const logOut = async () => {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})
		setIsLoggedIn(false)
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const ctx = useContext(AuthContext)

	if (!ctx) {
		throw new Error('You must be inside a auth provider to use this hook')
	}

	return ctx
}
