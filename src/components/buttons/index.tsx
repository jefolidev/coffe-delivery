import mainCartIcon from '../../assets/icons/cart-main.svg'
import secCartIcon from '../../assets/icons/cart-secondary.svg'
import trashIcon from '../../assets/icons/trash.svg'

import {
  AddCartButtonContainer,
  type AddCartButtonVariant,
  RemoveButtonContainer,
  SubmitButtonContainer,
} from './styles'

interface ButtonProps {
  content: string
}

interface AddCartButtonProps {
  variant?: AddCartButtonVariant
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

export function AddCartButton({ variant = 'primary' }: AddCartButtonProps) {
  return (
    <AddCartButtonContainer variant={variant}>
      {variant === 'primary' ? (
        <img src={mainCartIcon} alt="Ícone de lixo roxo" />
      ) : (
        <img src={secCartIcon} alt="Ícone de lixo amarelo" />
      )}
    </AddCartButtonContainer>
  )
}
