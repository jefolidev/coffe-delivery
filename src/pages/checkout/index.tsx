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
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodHeader,
  PaymentMethodHeaderText,
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

import { useNavigate } from 'react-router-dom'
import { addressInformationsSchema } from '../../context/coffee-context'
import { Radio } from './components/radio'

type PaymentMethods = 'credit' | 'debit' | 'cash'

interface FormInputs {
  cep: string
  street: string
  number: number
  complement: string
  neighborhood: string
  city: string
  federal_unity: string
  payment_method: PaymentMethods
}

export function Checkout() {
  const {
    productsInCart,
    deliveryInformations,
    handleSendOrderToDelivery,
    setProductsInCart,
  } = useCoffee()

  const { register, handleSubmit, watch } = useForm<FormInputs>({
    resolver: zodResolver(addressInformationsSchema),
  })

  const navigate = useNavigate()

  const selectedPaymentMethod = watch('payment_method')

  const valueOfEachProductInCart = productsInCart.map((item) => {
    return item.price * item.quantity
  })

  const totalValueOfAllProductsInCart = valueOfEachProductInCart.reduce(
    (total, item) => total + item,
    0
  )

  function formatValueForBRModel(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(price)
  }

  function handleCheckoutOrder(data: FormInputs) {
    handleSendOrderToDelivery(data)
    navigate('/success')
    setProductsInCart([])
  }

  const fretePrice = 3.5
  const totalValueOfProductsAndFrete =
    totalValueOfAllProductsInCart + fretePrice

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCheckoutOrder)}>
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
            <Radio
              isSelected={selectedPaymentMethod === 'credit'}
              {...register('payment_method')}
              value="credit"
            >
              <PaymentMethodCardIcon src={creditIcon} />
              <span>Cartão de Crédito</span>
            </Radio>
            <Radio
              isSelected={selectedPaymentMethod === 'debit'}
              {...register('payment_method')}
              value="debit"
            >
              <PaymentMethodCardIcon src={debitIcon} />
              <span>Cartão de Débito</span>
            </Radio>
            <Radio
              isSelected={selectedPaymentMethod === 'cash'}
              {...register('payment_method')}
              value="cash"
            >
              <PaymentMethodCardIcon src={moneyIcon} /> <span>Dinheiro</span>
            </Radio>
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
                <SubmitButton content="Confirmar Pedido" type="submit" />
              </OrderPriceWrapper>
            </>
          )}
        </OrderInformationContent>
      </OrderInformationContainer>
    </CheckoutContainer>
  )
}
