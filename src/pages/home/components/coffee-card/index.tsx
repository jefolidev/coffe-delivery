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

import type { CoffeeCardsProps } from '../coffe-list'

export default function CoffeeCard({
  name,
  description,
  price,
  tags,
  image_path,
}: CoffeeCardsProps) {
  return (
    <CoffeeCardContainer>
      <img src={image_path} alt="" />
      <CoffeeTagContainer>
        {tags.map((tag) => {
          return <CoffeeTagContent key={tag}>{tag}</CoffeeTagContent>
        })}
      </CoffeeTagContainer>

      <CoffeeCardContent>
        <h3>{name}</h3>
        <CoffeeCardDescription>{description}</CoffeeCardDescription>
      </CoffeeCardContent>

      <CoffeeCardBuyContainer>
        <CoffeeCardPrice>
          <CoffeCardUnitValue>
            R$ <CoffeeCardPrice>{price}</CoffeeCardPrice>
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
