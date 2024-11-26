import styled from 'styled-components'
import { DefaultInput } from '../../components/inputs/styles'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const AddressAndPaymentInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
const MainInformationContainerDefault = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 0.375rem;
  gap: 2rem;
`
export const AddressInformationContainer = styled(
  MainInformationContainerDefault
)`
  background-color: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 0.375rem;
`

const AdressAndPaymentHeaderDefault = styled.header`
  display: grid;
  grid-template-columns: 2rem 100%;
`
const AdressAndPaymentHeaderTextDefault = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressInformationHeader = styled(AdressAndPaymentHeaderDefault)``
export const AddressInformationHeaderText = styled(
  AdressAndPaymentHeaderTextDefault
)``

export const AddressInformationInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const AdressInformationInputRowDefault = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const HomeRowInformation = styled(AdressInformationInputRowDefault)``
export const LocationRowInformation = styled(AdressInformationInputRowDefault)``

export const PaymentMethodContainer = styled(MainInformationContainerDefault)``
export const PaymentMethodHeader = styled(AddressInformationHeader)``
export const PaymentMethodHeaderText = styled(
  AdressAndPaymentHeaderTextDefault
)``

export const PaymentMethodContent = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const PaymentMethodOption = styled.button`
  background-color: ${(props) => props.theme['purple-300']};
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border-radius: 0.375rem;

  flex: 1 0 0;
`

export const PaymentMethodCardIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`
export const PaymentMethodCardText = styled.span`
  color: ${(props) => props.theme['gray-700']};
  font-size: var(--text-sm);
  text-transform: uppercase;
`

export const OrderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const OrderInformationContent = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;
  gap: 1.5rem;
`
export const OrderCoffeeView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-height: 23rem;
  overflow-y: scroll;
`

export const OrderPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const OrderRowDefault = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextOrder = styled.span`
  font-size: var(--text-sm);
  color: ${(props) => props.theme['gray-700']};
`

export const ValueOrder = styled.span`
  font-size: var(--text-md);
  color: ${(props) => props.theme['gray-700']};
`
export const TotalOrderValue = styled.span`
  font-size: var(--text-lg);
  font-weight: 700;
`

export const TotalItensPriceRow = styled(OrderRowDefault)``
export const FretePriceRow = styled(OrderRowDefault)``
export const TotalPriceRow = styled(OrderRowDefault)``

export const OrderButtonContainer = styled.div`
  flex: 1;
`

export const InputTextContainer = styled(DefaultInput)`
  font-size: var(--text-sm);
  font-weight: 400;

  padding: 0.75rem;

  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-700']};
`

export const BigInputTextContainer = styled(InputTextContainer)`
  flex: 2;
`
export const CPFInputTextContainer = styled(InputTextContainer)`
  max-width: 40%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`
