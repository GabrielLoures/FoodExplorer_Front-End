import { Container, Logout } from './styles'
import { useAuth } from '../../hooks/auth'

import { Button } from '../Button'

import logo from "../../assets/blue-logo.svg"
import orderlogo from "../../assets/order-logo.svg"
import { FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom"

export function Header({ children }) {

  const { signOut, user } = useAuth()

  return (
    <Container>
      <a href="/" className="logo">
        <img src={logo} alt="blue logo" />
        <h1>food explorer</h1>
      </a>

      {user.isAdmin === 0 ?
        (<>
          <a href="#">Meus Favoritos</a>
        </>) :
        (<>
          <Link to="/create">Administrador</Link>
        </>)
      }

      {children}

      <Button className="order-button" icon={orderlogo} title="Meus pedidos"/>

      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  )

}