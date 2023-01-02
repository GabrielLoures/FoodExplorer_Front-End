import { Container, Logout } from './styles'
import { useAuth } from '../../hooks/auth'

import { Input } from '../Input'
import { Button } from '../Button'

import logo from "../../assets/blue-logo.svg"
import orderlogo from "../../assets/order-logo.svg"
import { FiSearch, FiLogOut } from "react-icons/fi";

import { Link } from "react-router-dom"

export function Header() {

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

      <Input icon={FiSearch} placeholder="Busque pelas opções de pratos"/>

      <Button className="order-button" icon={orderlogo} title="Meus pedidos"/>

      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  )

}