import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'

import { FiSearch } from "react-icons/fi"

import { api } from '../../services/api'

import mainImage from '../../assets/principal.png'

import { Container, FirstSection, Content } from './styles'

export function Home() {

  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {

    async function fetchDish() {      
      const res = await api.get(`/dishes?title=${search}&ingredient=${search}`)
      setDishes(res.data)
    }

    fetchDish()

  }, [search])

  return (
    <Container>

      <Header>
        <Input 
          icon={FiSearch} 
          placeholder="Busque pelas opções de pratos"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <Content>

        <FirstSection>
          <img src={mainImage} alt="Imagem de ingredientes caindo" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </FirstSection>

        <Section title="Pratos Principais">
          {
            dishes.filter(dishes => dishes.category == "main-dish").map(dish => (
              <Card 
                key={String(dish.id)}
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))            
          }
                                  
        </Section>

        <Section title="Sobremesas">
          
          {
            dishes.filter(dishes => dishes.category == "dessert").map(dish => (
              <Card 
                key={String(dish.id)}
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))            
          }
                      
        </Section>

        <Section title="Bebidas">
          
          {
            dishes.filter(dishes => dishes.category == "drink").map(dish => (
              <Card 
                key={String(dish.id)}
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))            
          }

        </Section>
      
      </Content>

      <Footer />

    </Container>
  )

}