import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logo from "../../assets/blue-logo.svg"

import { Container, Content, Form } from './styles'

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      
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
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="user-password">Senha</label>
          <Input 
            id="user-password" 
            className="sign-input"
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />

          <Button className="sign-btn" title="Entrar" onClick={handleSignIn}/>

          <Link to="/register">Crie sua conta</Link>

        </Form>

      </Content>

      <Footer />

    </Container>
  )

}