import {
  HeroItem,
  HeroItensContainer,
  HeroText,
  HeroTextWrapper,
  HeroWrapper,
} from './styles'

import heroImg from '../../assets/brand.svg'

import cartIcon from '../../assets/icons/hero-icons/cart.svg'
import clockIcon from '../../assets/icons/hero-icons/clock.svg'
import coffeeIcon from '../../assets/icons/hero-icons/coffee.svg'
import packetIcon from '../../assets/icons/hero-icons/packet.svg'
import { CoffeeList } from './components/coffe-list'

export function Home() {
  return (
    <>
      <HeroWrapper>
        <HeroTextWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <HeroItensContainer>
            <HeroItem>
              <img src={cartIcon} alt="" />
              <HeroText>Compra simples e segura</HeroText>
            </HeroItem>
            <HeroItem>
              <img src={packetIcon} alt="" />
              <HeroText>Embalagem mantém o café intacto</HeroText>
            </HeroItem>
            <HeroItem>
              <img src={clockIcon} alt="" />
              <HeroText>Entrega rápida e rastreada</HeroText>
            </HeroItem>
            <HeroItem>
              <img src={coffeeIcon} alt="" />
              <HeroText>O café chega fresquinho até você</HeroText>
            </HeroItem>
          </HeroItensContainer>
        </HeroTextWrapper>
        <img
          src={heroImg}
          alt="Copo de café de plástico na frente de uma onde amarela ao lado de café moídos"
        />
      </HeroWrapper>

      <CoffeeList />
    </>
  )
}
