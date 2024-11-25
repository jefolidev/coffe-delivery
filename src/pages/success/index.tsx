import { useCoffee } from '../../hooks/useCoffe'
import {
  Information,
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
  SuccessInformations,
} from './styles'

import clockIcon from '../../assets/icons/hero-icons/clock.svg'
import moneyIcon from '../../assets/icons/method.svg'
import locationIcon from '../../assets/icons/success-location.svg'

import brand from '../../assets/success-brand.svg'

export function SuccessPage() {
  const { deliveryInformations } = useCoffee()
  return (
    <SuccessContainer>
      <SuccessInformations>
        <SuccessHeader>
          <h1> Uhu! Pedido confirmado </h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessHeader>
        <SuccessContent>
          <Information>
            <img src={locationIcon} alt="" />
            <div>
              <span>
                Entrega em{' '}
                <strong> {`Rua ${deliveryInformations?.street} `}</strong>
              </span>
              <span>{`${deliveryInformations?.neighborhood} - ${deliveryInformations?.city}, ${deliveryInformations?.federal_unity}`}</span>
            </div>
          </Information>
          <Information>
            <img src={clockIcon} alt="" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </Information>
          <Information>
            <img src={moneyIcon} alt="" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{deliveryInformations?.payment_method}</strong>
              </span>
            </div>
          </Information>
        </SuccessContent>
      </SuccessInformations>
      <img src={brand} alt="" />
    </SuccessContainer>
  )
}
