import { RemoveButton } from '../../../../components/buttons'
import { InputNumber } from '../../../../components/inputs'
import type { CoffeeCartData } from '../../../../context/coffee-context'
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
}: CoffeeCartData) {
  const singularOrderPrice = String(price * quantity)

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
            <InputNumber placeholder="0" value={quantity} />
            <RemoveButton content="Remover" />
          </CoffeeOrderCardQuantity>
        </CoffeeOrderCardNameAndQuantitySection>
      </CoffeeOrderCardInformationContainer>
      <CoffeeOrderCardValue>
        R$ {singularOrderPrice.slice(0, 5)}
      </CoffeeOrderCardValue>
    </CoffeeOrderCardContainer>
  )
}
