import { AddCartButton } from '../buttons'
import {
  ActionsWrapper,
  HeaderContainer,
  LocationContainer,
  LocationText,
} from './styles'

import { Link, useNavigate } from 'react-router-dom'
import locationIcon from '../../assets/icons/location-pin.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>

      <ActionsWrapper>
        <LocationContainer>
          <img src={locationIcon} alt="Icone de Pino de Localização" />
          <LocationText>Fortaleza, CE</LocationText>
        </LocationContainer>
        <AddCartButton
          variant="secondary"
          onClick={() => navigate('/checkout')}
        />
      </ActionsWrapper>
    </HeaderContainer>
  )
}
