import styled from 'styled-components'

export type AddCartButtonVariant = 'primary' | 'secondary'

interface AddCartButtonProps {
  variant: AddCartButtonVariant
}

const DefaultButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 6px;

  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubmitButtonContainer = styled(DefaultButton)`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  width: 100%;
  padding: 0.75rem 0.5rem;

  font-size: var(--text-sm);

  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme['yellow-800']};
  }
`

export const RemoveButtonContainer = styled(DefaultButton)`
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};

  height: 100%;
  padding: 0 0.5rem;

  font-size: var(--text-xs);

  font-weight: 400;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
`

const addCartButtonVariant = {
  primary: {
    default: 'purple-800',
    hover: 'purple-500',
  },
  secondary: {
    default: 'yellow-200',
    hover: 'yellow-100',
  },
}

export const AddCartButtonContainer = styled(DefaultButton)<AddCartButtonProps>`
  background-color: ${(props) =>
    props.theme[`${addCartButtonVariant[props.variant].default}`]};

  padding: 0.5rem;
  position: relative;

  &:hover {
    background-color: ${(props) =>
      props.theme[`${addCartButtonVariant[props.variant].hover}`]};
  }
`

export const CartButtonItensCounter = styled.p`
  position: absolute;
  background-color: ${(props) => props.theme['yellow-800']};
  color: white;
  display: flex;
  width: 1rem;
  height: 1rem;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 9999rem;
  font-size: 0.75rem;
  font-weight: 700;
  bottom: 1rem;
  left: 1.5rem;
`
