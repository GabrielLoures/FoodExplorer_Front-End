import { Container, Logout } from './styles'

import { Input } from '../Input'
import { Button } from '../Button'

import logo from "../../assets/blue-logo.svg"
import orderlogo from "../../assets/order-logo.svg"
import { FiSearch, FiLogOut } from "react-icons/fi";

export function Header() {

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="blue logo" />
        <h1>food explorer</h1>
      </div>

      <a href="#">Meus Favoritos</a>

      <Input icon={FiSearch} placeholder="Busque pelas opções de pratos"/>

      <Button className="order-button" icon={orderlogo} title="Meus pedidos"/>

      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  )

}