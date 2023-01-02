import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Content, ContentHeader, Form, ImageUpload, InputWrapper, InputIngredients } from './styles'

import { MdOutlineArrowBackIos, MdOutlineFileUpload } from "react-icons/md"

import { api } from '../../services/api'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { IngredientItem } from "../../components/IngredientItem"

export function Create() {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)

  const navigate = useNavigate()

  function handleAddIngredients() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredients(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleImage(e) {
    const file = e.target.files[0]
    setImage(file)
  }

  async function handleNewDish(e) {
    
    e.preventDefault()

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.post("/dishes", formData, { headers: {'Content-Type': 'multipart/form-data'}})
      .then(() => {
        alert("Prato criado com sucesso!")
        navigate("/")
      })
  }

  return(
    <Container>

      <Header/>

      <Content>

        <ContentHeader>
          <Link to='/'>
            <MdOutlineArrowBackIos/>
            <span>Voltar</span>
          </Link>
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
                <input 
                  id="image-upload" 
                  type="file"
                  onChange={handleImage}
                />
              </label>

            </ImageUpload>

            <InputWrapper className="plateName">
              <label htmlFor="plate-name">Nome</label>
              <Input 
                id="plate-name" 
                className="bordered-input" 
                type="text" 
                placeholder="Ex: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="plate-category">Categoria</label>
              <Input 
                id="plate-category" 
                className="bordered-input" 
                type="text" 
                placeholder="Ex: Brasileira"
                onChange={e => setCategory(e.target.value)}
              />
            </InputWrapper>
            
          </div>

          <div className="second-row">
            <InputWrapper>
              <label htmlFor="ingredients">Ingredientes</label>
              <InputIngredients>

                {
                  ingredients.map((ingredient, index) => (
                    <IngredientItem 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredients(ingredient)}
                    />
                  ))
                }
                
                <IngredientItem 
                  isNew 
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredients}
                />

              </InputIngredients>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="price">Preço</label>
              <Input 
                id="price" 
                className="bordered-input" 
                type="text" 
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}  
              />
            </InputWrapper>
          </div>

          <InputWrapper>
            <label htmlFor="description">Descrição</label>
            <Textarea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </InputWrapper>

          <div className="button-row">
            <Button 
              className="add-button" 
              title="Adicionar Prato"
              onClick={handleNewDish}
            />
          </div>
            
        </Form>

      </Content>

      <Footer/>

    </Container>
  )

}