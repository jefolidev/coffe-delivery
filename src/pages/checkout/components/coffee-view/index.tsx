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
  const { productsInCart, setProductsInCart } = useCoffee()

  const singularOrderPrice = price * quantity
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(singularOrderPrice)

  function incrementQuantity() {
    setNewAmount((state) => state + 1)
  }

  function decrementQuantity() {
    if (amount >= 1) {
      setNewAmount((state) => state - 1)
    }
    if (amount === 1) {
      setProductsInCart(productsInCart.filter((item) => item.id !== id))
    }
  }

  function handleRemoveItemOfCart() {
    const productsInCartWithoutCurrentItem = productsInCart.filter(
      (item) => item.id !== id
    )
    setProductsInCart(productsInCartWithoutCurrentItem)
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
              quantity={amount}
              handleAddOneToAmount={incrementQuantity}
              handleRemoveOneToAmount={decrementQuantity}
            />
            <RemoveButton content="Remover" onClick={handleRemoveItemOfCart} />
          </CoffeeOrderCardQuantity>
        </CoffeeOrderCardNameAndQuantitySection>
      </CoffeeOrderCardInformationContainer>
      <CoffeeOrderCardValue>R$ {formattedPrice}</CoffeeOrderCardValue>
    </CoffeeOrderCardContainer>
  )
}
