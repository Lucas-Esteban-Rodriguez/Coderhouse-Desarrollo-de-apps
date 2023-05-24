import AuthNavigator from './AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import { useState } from 'react'

const MainNavigator = ({ }) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  return (
    <NavigationContainer>
      {isLoggedIn
          ? <TabNavigator />
          :  <AuthNavigator isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      }
    </NavigationContainer>
  )
}

export default MainNavigator