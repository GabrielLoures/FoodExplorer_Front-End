import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { Link, useParams } from 'react-router-dom'

import { MdOutlineArrowBackIos } from "react-icons/md"

import order from "../../assets/order-logo.svg"

import { Container, ContentHeader, Content, MainContent } from "./styles"
import { api } from '../../services/api'

export function Details() {

  const { user } = useAuth()

  const [data, setData] = useState(null)
  const params = useParams()

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`)
      setData(res.data)
    }

    fetchDish()
  }, [])

  return (

    <Container>

      <Header/>

      <Content>

        <ContentHeader>

          <Link to="/">
            <MdOutlineArrowBackIos/>
            <span>Voltar</span>
          </Link>

          {
            user.isAdmin === 1 ?
            (
              <>
              <Link 
                to={`/edit/${params.id}`}                
              >
                <span>Editar Prato</span>
              </Link>
              </>
            ) : null
          }
          
        </ContentHeader>

        { data &&

          <MainContent>
            <img src={imageURL} alt={`Imagem do prato ${data.title}`} />
            <div className="description">

              <div className="texts">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>

              <div className="products-list">
                <ul>
                  {data.ingredients.map(ingredient => (
                    <li key={ingredient.id}>
                      <img src={`${api.defaults.baseURL}/${ingredient.image}`}  alt={`Imagem do ingrediente ${ingredient.name}`} />
                      <p>{ingredient.name}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="payments-details">

                <div className="value">
                  <h1>R$</h1> 
                  <h1>{data.price}</h1>
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

        }

      </Content>

      <Footer/>

    </Container>
    
  )

}