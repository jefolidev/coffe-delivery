import { AddCartButton } from '../../../../components/buttons'
import { InputNumber } from '../../../../components/inputs'
import {
  CoffeCardUnitValue,
  CoffeeCardAddToCartContainer,
  CoffeeCardBuyContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  CoffeeCardDescription,
  CoffeeCardPrice,
  CoffeeTagContainer,
  CoffeeTagContent,
} from './styles'

import CoffeeExpress from '../../../../assets/coffees/Coffee-1.svg'

export default function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeExpress} alt="" />
      <CoffeeTagContainer>
        <CoffeeTagContent>Gelado</CoffeeTagContent>
        <CoffeeTagContent>Tradicional</CoffeeTagContent>
      </CoffeeTagContainer>

      <CoffeeCardContent>
        <h3>Café Preto</h3>
        <CoffeeCardDescription>
          Tradicional Expresso Tradicional O tradicional café feito com água
          quente e grãos moídos.
        </CoffeeCardDescription>
      </CoffeeCardContent>

      <CoffeeCardBuyContainer>
        <CoffeeCardPrice>
          <CoffeCardUnitValue>
            R$ <CoffeeCardPrice>9,90</CoffeeCardPrice>
          </CoffeCardUnitValue>
        </CoffeeCardPrice>

        <CoffeeCardAddToCartContainer>
          <InputNumber placeholder="1" />
          <AddCartButton />
        </CoffeeCardAddToCartContainer>
      </CoffeeCardBuyContainer>
    </CoffeeCardContainer>
  )
}
