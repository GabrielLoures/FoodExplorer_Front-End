import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logo from "../../assets/blue-logo.svg"

import { Container, Content, Form } from './styles'

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){

    if(!name || !email || !password) {
      return alert("Preencha todos os campos para realizar o cadastro")
    }

    if(password.length < 6) {
      return alert("A senha deve conter no mínimo 6 caracteres")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível realizar o cadastro")
        }
      })

  }

  return (
    <Container>
      
      <Content>

        <div className="logo">
          <img src={logo} alt="blue logo" />
          <h1>food explorer</h1>
        </div>

        <Form>

          <h1>Crie sua conta</h1>

          <label htmlFor="user-name">Seu Nome</label>
          <Input 
            id="user-name"
            className="sign-input" 
            type="text" 
            placeholder="Exemplo: João da Silva"
            onChange={e => setName(e.target.value)}
          />

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

          <Button className="sign-btn" title="Criar conta" onClick={handleSignUp}/>

          <Link to="/">Já tenho uma conta</Link>

        </Form>

      </Content>

      <Footer />

    </Container>
  )

}