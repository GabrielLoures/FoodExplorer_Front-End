import { BiHeart } from "react-icons/bi";
import { Button } from "../Button"

import { api } from '../../services/api'

import { Container } from './styles'

export function Card({ data, ...rest }) {

  const imageURl = `${api.defaults.baseURL}/files/${data.image}`

  return (
    <Container {...rest}>

      <BiHeart className="favorite-svg"/>

      <img src={imageURl} alt={`Imagem do prato ${data.title}`} />

      <h2>{data.title}</h2>

      <p>{data.description}</p>

      <h1>R$ {data.price}</h1>

      <div className="bottom-card">
        
        <div className="plus-minus">
          <h5>-</h5>
          <h5>01</h5>
          <h5>+</h5>
        </div>
        
        <Button title="Incluir"/>

      </div>

    </Container>
  )

}