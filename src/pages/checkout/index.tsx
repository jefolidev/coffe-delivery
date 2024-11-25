import { Divisor } from './components/coffee-view/styles'
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
  PaymentMethodCardIcon,
  PaymentMethodCardText,
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodHeader,
  PaymentMethodHeaderText,
  PaymentMethodOption,
  TextOrder,
  TotalItensPriceRow,
  TotalOrderValue,
  TotalPriceRow,
  ValueOrder,
} from './styles'

import { SubmitButton } from '../../components/buttons'
import { CoffeeInOrderView } from './components/coffee-view'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import { useCoffee } from '../../hooks/useCoffe'

import paymentIcon from '../../assets/icons/dollar.svg'
import pinIcon from '../../assets/icons/location-pin-checkout.svg'

import creditIcon from '../../assets/icons/payment-methods/cc.svg'
import debitIcon from '../../assets/icons/payment-methods/dc.svg'
import moneyIcon from '../../assets/icons/payment-methods/money.svg'

import {
  type AddressProps,
  addressInformationsSchema,
} from '../../context/coffee-context'

export function Checkout() {
  const { productsInCart, handleSendOrderToDelivery, deliveryInformations } =
    useCoffee()
  const { register, handleSubmit } = useForm<AddressProps>({
    resolver: zodResolver(addressInformationsSchema),
  })

  const valueOfEachProductInCart = productsInCart.map((item) => {
    return item.price * item.quantity
  })

  const totalValueOfAllProductsInCart = valueOfEachProductInCart.reduce(
    (total, item) => total + item,
    0
  )

  const fretePrice = 3.5
  const totalValueOfProductsAndFrete =
    totalValueOfAllProductsInCart + fretePrice

  function formatValueForBRModel(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(price)
  }
  console.log(deliveryInformations)

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSendOrderToDelivery)}>
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
            <CPFInputTextContainer placeholder="CEP" {...register('cep')} />
            <InputTextContainer placeholder="Rua" {...register('street')} />
            <HomeRowInformation>
              <InputTextContainer
                placeholder="Número"
                {...register('number', { valueAsNumber: true })}
              />
              <BigInputTextContainer
                placeholder="Complemento"
                {...register('complement')}
              />
            </HomeRowInformation>
            <LocationRowInformation>
              <InputTextContainer
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <BigInputTextContainer
                placeholder="Cidade"
                {...register('city')}
              />
              <BigInputTextContainer
                placeholder="UF"
                {...register('federal_unity')}
              />
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
          <PaymentMethodContent>
            <PaymentMethodOption>
              <PaymentMethodCardIcon src={creditIcon} />
              <PaymentMethodCardText>Cartão de Crédito</PaymentMethodCardText>
            </PaymentMethodOption>
            <PaymentMethodOption>
              <PaymentMethodCardIcon src={debitIcon} />
              <PaymentMethodCardText>Cartão de Débito</PaymentMethodCardText>
            </PaymentMethodOption>
            <PaymentMethodOption>
              <PaymentMethodCardIcon src={moneyIcon} />
              <PaymentMethodCardText>Dinheiro</PaymentMethodCardText>
            </PaymentMethodOption>
          </PaymentMethodContent>
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
                    {`R$ ${formatValueForBRModel(
                      totalValueOfAllProductsInCart
                    )}`}
                  </ValueOrder>
                </TotalItensPriceRow>
                <FretePriceRow>
                  <TextOrder>Entrega</TextOrder>
                  <ValueOrder>R$ 3,50</ValueOrder>
                </FretePriceRow>
                <TotalPriceRow>
                  <TotalOrderValue>Total</TotalOrderValue>
                  <TotalOrderValue>
                    {`R$ ${formatValueForBRModel(
                      totalValueOfProductsAndFrete
                    )}`}
                  </TotalOrderValue>
                </TotalPriceRow>
                <SubmitButton content="Confirmar Pedido" />
              </OrderPriceWrapper>
            </>
          )}
        </OrderInformationContent>
      </OrderInformationContainer>
    </CheckoutContainer>
  )
}
