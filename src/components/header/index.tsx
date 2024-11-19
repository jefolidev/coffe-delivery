import { AddCartButton } from '../buttons'
import {
  ActionsWrapper,
  HeaderContainer,
  LocationContainer,
  LocationText,
} from './styles'

import locationIcon from '../../assets/icons/location-pin.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <ActionsWrapper>
        <LocationContainer>
          <img src={locationIcon} alt="Icone de Pino de Localização" />
          <LocationText>Fortaleza, CE</LocationText>
        </LocationContainer>
        <AddCartButton variant="secondary" />
      </ActionsWrapper>
    </HeaderContainer>
  )
}
