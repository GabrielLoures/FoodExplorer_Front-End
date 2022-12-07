import { Container } from './styles'

import logo from '../../assets/gray-logo.svg'

export function Footer() {

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Gray Logo" />
        <h1>food explorer</h1>
      </div>

      <p>© 2022 - Todos os direitos reservados.</p>
    </Container>
  )

}