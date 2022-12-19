import { Container, Content, ContentHeader, Form, ImageUpload, InputWrapper, InputIngredients } from './styles'

import { MdOutlineArrowBackIos, MdOutlineFileUpload } from "react-icons/md"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { IngredientItem } from "../../components/IngredientItem"

export function Create() {

  return(
    <Container>

      <Header/>

      <Content>

        <ContentHeader>
          <a href="#">
            <MdOutlineArrowBackIos/>
            <span>Voltar</span>
          </a>
        </ContentHeader>

        <Form>

          <header>
            <h1>Editar Prato</h1>
          </header>

          <div className="first-row">
            <ImageUpload>

            <p>Imagem do Prato</p>
            <label htmlFor="image-upload">
              <MdOutlineFileUpload />
              <h2>Selecione a Imagem</h2>
              <input id="image-upload" type="file" />
            </label>

            </ImageUpload>

            <InputWrapper>
              <label htmlFor="plate-name">Nome</label>
              <Input id="plate-name" className="bordered-input" type="text" placeholder="Ex: Salada Ceasar"/>
            </InputWrapper>
            
          </div>

          <div className="second-row">
            <InputWrapper>
              <label htmlFor="ingredients">Ingredientes</label>
              <InputIngredients>
                <IngredientItem value="Pão Naan"/>
                <IngredientItem isNew placeholder="Adicionar"/>
              </InputIngredients>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="price">Preço</label>
              <Input id="price" className="bordered-input" type="text" placeholder="R$ 00,00"/>
            </InputWrapper>
          </div>

          <InputWrapper>
            <label htmlFor="description">Descrição</label>
            <Textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
          </InputWrapper>

          <div className="button-row">
            <Button className="add-button" title="Adicionar Prato"/>
          </div>
            
        </Form>

      </Content>

      <Footer/>

    </Container>
  )

}