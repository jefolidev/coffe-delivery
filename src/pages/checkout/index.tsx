import {
  AddressAndPaymentInformationContainer,
  AddressInformationContainer,
  AddressInformationHeader,
  AddressInformationHeaderText,
  AddressInformationInputWrapper,
  BigInputTextContainer,
  CPFInputTextContainer,
  CheckoutContainer,
  FretePriceRow,
  HomeRowInformation,
  InputTextContainer,
  LocationRowInformation,
  OrderCoffeeView,
  OrderInformationContainer,
  OrderInformationContent,
  OrderPriceWrapper,
  PaymentMethodContainer,
  PaymentMethodHeader,
  PaymentMethodHeaderText,
  TextOrder,
  TotalItensPriceRow,
  TotalOrderValue,
  TotalPriceRow,
  ValueOrder,
} from './styles'

import { SubmitButton } from '../../components/buttons'

import paymentIcon from '../../assets/icons/dollar.svg'
import pinIcon from '../../assets/icons/location-pin-checkout.svg'
import { useCoffee } from '../../hooks/useCoffe'
import { CoffeeInOrderView } from './components/coffee-view'
import { Divisor } from './components/coffee-view/styles'

export function Checkout() {
  const { productsInCart } = useCoffee()

  console.log(productsInCart)
  const totalValueOfEachProductInCart = productsInCart.map((item) => {
    return item.price * item.quantity
  })

  const totalValueOfAllProductsInCart = totalValueOfEachProductInCart.reduce(
    (total, item) => total + item,
    0
  )

  const stringTotalValueOfAllProductsInCart = String(
    totalValueOfAllProductsInCart.toFixed(2)
  ).replace('.', ',')

  const totalValueOfProductsAndFrete = (
    totalValueOfAllProductsInCart + 3.5
  ).toFixed(2)
  const stringTotalValueOfProductsAndFrete = String(
    totalValueOfProductsAndFrete
  ).replace('.', ',')

  return (
    <CheckoutContainer>
      <AddressAndPaymentInformationContainer>
        <h3>Complete seu Pedido</h3>
        <AddressInformationContainer>
          <AddressInformationHeader>
            <img src={pinIcon} alt="" />
            <AddressInformationHeaderText>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressInformationHeaderText>
          </AddressInformationHeader>

          <AddressInformationInputWrapper>
            <CPFInputTextContainer placeholder="CPF" />
            <InputTextContainer placeholder="Rua" />
            <HomeRowInformation>
              <InputTextContainer placeholder="Número" />
              <BigInputTextContainer placeholder="Complemento" />
            </HomeRowInformation>
            <LocationRowInformation>
              <InputTextContainer placeholder="Bairro" />
              <BigInputTextContainer placeholder="Cidade" />
              <BigInputTextContainer placeholder="UF" />
            </LocationRowInformation>
          </AddressInformationInputWrapper>
        </AddressInformationContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeader>
            <img src={paymentIcon} alt="" />
            <PaymentMethodHeaderText>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </PaymentMethodHeaderText>
          </PaymentMethodHeader>
        </PaymentMethodContainer>
      </AddressAndPaymentInformationContainer>
      <OrderInformationContainer>
        <h3>Cafés Selecionados</h3>

        <OrderInformationContent>
          {productsInCart.length < 1 ? (
            <h3>Nada adicionado ao carrinho</h3>
          ) : (
            <>
              <OrderCoffeeView>
                {productsInCart.map((item) => {
                  return (
                    <div key={item.id}>
                      <CoffeeInOrderView {...item} />
                      <Divisor />
                    </div>
                  )
                })}
              </OrderCoffeeView>
              <OrderPriceWrapper>
                <TotalItensPriceRow>
                  <TextOrder>Total de itens</TextOrder>
                  <ValueOrder>
                    {`R$ ${stringTotalValueOfAllProductsInCart}`}
                  </ValueOrder>
                </TotalItensPriceRow>
                <FretePriceRow>
                  <TextOrder>Entrega</TextOrder>
                  <ValueOrder>R$ 3,50</ValueOrder>
                </FretePriceRow>
                <TotalPriceRow>
                  <TotalOrderValue>Total</TotalOrderValue>
                  <TotalOrderValue>
                    R$ {stringTotalValueOfProductsAndFrete}
                  </TotalOrderValue>
                </TotalPriceRow>
                <SubmitButton
                  content="Confirmar Pedido"
                  disabled={productsInCart.length < 1}
                />
              </OrderPriceWrapper>
            </>
          )}
        </OrderInformationContent>
      </OrderInformationContainer>
    </CheckoutContainer>
  )
}
