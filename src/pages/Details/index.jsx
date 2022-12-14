import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { MdOutlineArrowBackIos } from "react-icons/md"

import salad from "../../assets/ravanello.png"
import lettuce from "../../assets/alface.png"
import tomato from "../../assets/tomate.png"
import radish from "../../assets/rabanete.png"
import naan from "../../assets/naan.png"
import order from "../../assets/order-logo.svg"

import { Container, ContentHeader, Content, MainContent } from "./styles"

export function Details() {

  return (

    <Container>

      <Header/>

      <Content>

        <ContentHeader>
          <a href="#">
            <MdOutlineArrowBackIos/>
            <span>Voltar</span>
          </a>
        </ContentHeader>

        <MainContent>
          <img src={salad} alt="Salada Ravanello" />
          <div className="description">

            <div className="texts">
              <h1>Salada Ravanello</h1>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
            </div>

            <div className="products-list">
              <ul>
                <li>
                  <img src={lettuce} alt="Alface" />
                  <p>Alface</p>
                </li>
                <li>
                  <img src={tomato} alt="Tomate" />
                  <p>Tomate</p>
                </li>
                <li>
                  <img src={radish} alt="Rabante" />
                  <p>Rabante</p>
                </li>
                <li>
                  <img src={naan} alt="Pão Naan" />
                  <p>Pão Naan</p>
                </li>
              </ul>
            </div>

            <div className="payments-details">

              <div className="value">
                <h1>R$</h1> 
                <h1>25,97</h1>
              </div>

              <div className="plus-minus">
                <h5>-</h5>
                <h5>01</h5>
                <h5>+</h5>
              </div>
              
              <Button icon={order} title="Incluir"/>

            </div>

          </div>
        </MainContent>

      </Content>

      <Footer/>

    </Container>
    
  )

}