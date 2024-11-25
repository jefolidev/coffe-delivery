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

import { useState } from 'react'
import { useCoffee } from '../../../../hooks/useCoffe'
import type { CoffeeItemProps } from '../coffe-list'

export default function CoffeeCard(coffee: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(1)
  const { handleAddProductInCart } = useCoffee()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity >= 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeeCardContainer>
      <img
        src={`./src/assets/coffees/${coffee.image_path}.svg`}
        alt={`Imagem do Café: ${coffee.name}`}
      />
      <CoffeeTagContainer>
        {coffee.tags.map((tag) => {
          return <CoffeeTagContent key={tag}>{tag}</CoffeeTagContent>
        })}
      </CoffeeTagContainer>

      <CoffeeCardContent>
        <h3>{coffee.name}</h3>
        <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>
      </CoffeeCardContent>

      <CoffeeCardBuyContainer>
        <CoffeCardUnitValue>
          R$
          <CoffeeCardPrice>
            {coffee.price.toFixed(2).replace('.', ',')}
          </CoffeeCardPrice>
        </CoffeCardUnitValue>

        <CoffeeCardAddToCartContainer>
          <InputNumber
            quantity={quantity}
            handleAddOneToAmount={incrementQuantity}
            handleRemoveOneToAmount={decrementQuantity}
          />
          <AddCartButton
            onClick={() => handleAddProductInCart(coffee, quantity)}
          />
        </CoffeeCardAddToCartContainer>
      </CoffeeCardBuyContainer>
    </CoffeeCardContainer>
  )
}
