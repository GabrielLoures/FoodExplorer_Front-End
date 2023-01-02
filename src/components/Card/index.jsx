import { useNavigate } from 'react-router-dom'
import { BiHeart } from "react-icons/bi";
import plate1 from "../../assets/ravanello.png"
import { Button } from "../Button"

import { Container } from './styles'

export function Card() {

  const navigate = useNavigate()

  function goToEdit() {
    navigate("/edit")
  }

  return (
    <Container onClick={goToEdit}>

      <BiHeart className="favorite-svg"/>

      <img src={plate1} alt="Prato 1" />

      <h2>Torradas de Parma</h2>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

      <h1>R$ 25,97</h1>

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