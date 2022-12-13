import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'

import mainImage from '../../assets/principal.png'

import { Container, FirstSection, Content } from './styles'

export function Home() {

  return (
    <Container>

      <Header />

      <Content>

        <FirstSection>
          <img src={mainImage} alt="Imagem de ingredientes caindo" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </FirstSection>

        <Section title="Pratos Principais">
          
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>            

        </Section>

        <Section title="Sobremesas">
          
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          
        </Section>

        <Section title="Bebidas">
          
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          
        </Section>
      
      </Content>

      <Footer />

    </Container>
  )

}