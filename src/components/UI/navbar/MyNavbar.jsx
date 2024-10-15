import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../button/MyButton'
import { AuthContext } from '../../../context'

export const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      {isAuth && <MyButton onClick={handleLogout}>Выйти</MyButton>}
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  )
}
