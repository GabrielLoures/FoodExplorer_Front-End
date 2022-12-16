import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logo from "../../assets/blue-logo.svg"

import { Container, Content, Form } from './styles'

export function SignIn() {

  return (
    <Container>

      <Header />

      <Content>

        <div className="logo">
          <img src={logo} alt="blue logo" />
          <h1>food explorer</h1>
        </div>

        <Form>

          <h1>Faça seu Login</h1>

          <label htmlFor="user-email">E-mail</label>
          <Input 
            id="user-email"
            className="sign-input" 
            type="text" 
            placeholder="Exemplo:exemplo@exemplo.com.br"
          />

          <label htmlFor="user-password">Senha</label>
          <Input 
            id="user-password" 
            className="sign-input"
            type="password" 
            placeholder="No mínimo 6 caracteres"
          />

          <Button className="sign-btn" title="Entrar" />

          <a href="#">Crie sua conta</a>

        </Form>

      </Content>

      <Footer />

    </Container>
  )

}