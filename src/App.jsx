import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MyNavbar } from './components/UI/navbar/MyNavbar'
import './styles/App.css'
import { AppRouter } from './components/AppRouter'
import { AuthContext } from './context'
import { useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}>
      <BrowserRouter>
        <MyNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
