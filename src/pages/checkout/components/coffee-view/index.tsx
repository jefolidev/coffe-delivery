import { useEffect, useState } from 'react'
import { RemoveButton } from '../../../../components/buttons'
import { InputNumber } from '../../../../components/inputs'
import type { CoffeeCartData } from '../../../../context/coffee-context'
import { useCoffee } from '../../../../hooks/useCoffe'
import {
  CoffeeOrderCardContainer,
  CoffeeOrderCardImage,
  CoffeeOrderCardInformationContainer,
  CoffeeOrderCardName,
  CoffeeOrderCardNameAndQuantitySection,
  CoffeeOrderCardQuantity,
  CoffeeOrderCardValue,
} from './styles'

export function CoffeeInOrderView({
  coffee_name,
  image_path,
  quantity,
  price,
  id,
}: CoffeeCartData) {
  const [amount, setNewAmount] = useState(quantity)
  const { setProductsInCart } = useCoffee()

  function handleInputAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewAmount(Number(e.target.value))
  }

  const singularOrderPrice = price * quantity

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(singularOrderPrice)

  function handleUpdateTheAmountValue(newValue: number) {
    setNewAmount(Math.max(0, newValue))
  }

  useEffect(() => {
    setProductsInCart((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...item, quantity: amount } : item
      })
    )
  }, [amount, id, setProductsInCart])

  return (
    <CoffeeOrderCardContainer>
      <CoffeeOrderCardInformationContainer>
        <CoffeeOrderCardImage
          src={`./src/assets/coffees/${image_path}.svg`}
          alt=""
        />
        <CoffeeOrderCardNameAndQuantitySection>
          <CoffeeOrderCardName>{coffee_name}</CoffeeOrderCardName>
          <CoffeeOrderCardQuantity>
            <InputNumber
              placeholder="0"
              quantity={quantity}
              handleAmountChange={handleInputAmountChange}
              setNewQuantityValue={handleUpdateTheAmountValue}
            />
            <RemoveButton content="Remover" />
          </CoffeeOrderCardQuantity>
        </CoffeeOrderCardNameAndQuantitySection>
      </CoffeeOrderCardInformationContainer>
      <CoffeeOrderCardValue>R$ {formattedPrice}</CoffeeOrderCardValue>
    </CoffeeOrderCardContainer>
  )
}
