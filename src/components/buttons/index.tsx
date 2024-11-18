import cartIcon from '../../assets/icons/cart.svg'
import trashIcon from '../../assets/icons/trash.svg'

import {
  AddCartButtonContainer,
  RemoveButtonContainer,
  SubmitButtonContainer,
} from './styles'

export interface ButtonProps {
  content: string
}

export function SubmitButton({ content }: ButtonProps) {
  return <SubmitButtonContainer>{content}</SubmitButtonContainer>
}

export function RemoveButton({ content }: ButtonProps) {
  return (
    <RemoveButtonContainer>
      <img src={trashIcon} alt="Ícone de lixo roxo" /> {content}
    </RemoveButtonContainer>
  )
}

export function AddCartButton() {
  return (
    <AddCartButtonContainer>
      <img src={cartIcon} alt="Ícone de lixo roxo" />
    </AddCartButtonContainer>
  )
}
