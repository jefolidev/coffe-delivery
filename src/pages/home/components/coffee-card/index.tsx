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

import type { CoffeeItemProps } from '../coffe-list'

interface CoffeeCardProps extends CoffeeItemProps {
  quantity?: number
  handleAddItemToCart: (coffee: CoffeeItemProps, quantity: number) => void
  onInputAmountValueChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined
}

export default function CoffeeCard({
  id,
  name,
  description,
  price,
  quantity = 1,
  tags,
  image_path,
  handleAddItemToCart,
  onInputAmountValueChange,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img
        src={`./src/assets/coffees/${image_path}.svg`}
        alt={`Imagem do Café: ${name}`}
      />
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
        <CoffeCardUnitValue>
          R${' '}
          <CoffeeCardPrice>
            {price.toFixed(2).replace('.', ',')}
          </CoffeeCardPrice>
        </CoffeCardUnitValue>

        <CoffeeCardAddToCartContainer>
          <InputNumber placeholder="1" onChange={onInputAmountValueChange} />
          <AddCartButton
            onClick={() =>
              handleAddItemToCart(
                { id, name, price, description, tags, image_path },
                quantity
              )
            }
          />
        </CoffeeCardAddToCartContainer>
      </CoffeeCardBuyContainer>
    </CoffeeCardContainer>
  )
}
