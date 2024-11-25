import mainCartIcon from '../../assets/icons/cart-main.svg'
import secCartIcon from '../../assets/icons/cart-secondary.svg'
import trashIcon from '../../assets/icons/trash.svg'

import { useCoffee } from '../../hooks/useCoffe'
import {
  AddCartButtonContainer,
  type AddCartButtonVariant,
  CartButtonItensCounter,
  RemoveButtonContainer,
  SubmitButtonContainer,
} from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
}

interface AddCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AddCartButtonVariant
}

export function SubmitButton({ content, ...rest }: ButtonProps) {
  return (
    <SubmitButtonContainer type="submit" {...rest}>
      {content}
    </SubmitButtonContainer>
  )
}

export function RemoveButton({ content, ...rest }: ButtonProps) {
  return (
    <RemoveButtonContainer {...rest}>
      <img src={trashIcon} alt="Ícone de lixo roxo" /> {content}
    </RemoveButtonContainer>
  )
}

export function AddCartButton({
  variant = 'primary',
  ...rest
}: AddCartButtonProps) {
  const { productsInCart } = useCoffee()

  const amoutOfProductsInCart = productsInCart.length

  return (
    <AddCartButtonContainer {...rest} variant={variant}>
      {variant === 'primary' ? (
        <img src={mainCartIcon} alt="Ícone de lixo roxo" />
      ) : amoutOfProductsInCart > 0 ? (
        <>
          <img src={secCartIcon} alt="Ícone de lixo amarelo" />
          <CartButtonItensCounter>
            {amoutOfProductsInCart}
          </CartButtonItensCounter>
        </>
      ) : (
        <img src={secCartIcon} alt="Ícone de lixo amarelo" />
      )}
    </AddCartButtonContainer>
  )
}
