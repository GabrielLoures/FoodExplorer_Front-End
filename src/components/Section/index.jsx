import { Container, Scroll } from './styles'
import { useState, useEffect, useRef } from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"

export function Section({ title, children }) {

  const [isVisible, setIsVisible] = useState(true);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  
  let cardLenght = children.length * 300;
  let scrl = useRef(null);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  useEffect(() => {
    if(cardLenght < 1640) {
    setIsVisible(false)
  } else {
    setIsVisible(true)
  }
  }, [cardLenght])
  
  
  return(
    <Container>

      <h2>{title}</h2>

      <Scroll>

      {scrollX !== 0 && (

        <button 
          className={isVisible ? "btn-left" : "hidden"}
          onClick={() => slide(-150)}
        >
          <MdOutlineArrowBackIos/>
        </button>

      )}

        <div ref={scrl} onScroll={scrollCheck}>
          {children}
        </div>

      {!scrolEnd && (

        <button 
          className={isVisible ? "btn-right" : "hidden"}
          onClick={() => slide(+150)}
        >
          <MdOutlineArrowForwardIos/>
        </button>

      )}

      </Scroll>

    </Container>
  )

}