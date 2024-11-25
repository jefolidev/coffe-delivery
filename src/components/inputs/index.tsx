import { InputNumberButton, InputNumberContainer, InputWrapper } from './styles'

import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  quantity: number
  handleRemoveOneToAmount: () => void
  handleAddOneToAmount: () => void
}

export function InputNumber({
  quantity,
  handleRemoveOneToAmount,
  handleAddOneToAmount,
}: InputProps) {
  return (
    <InputWrapper>
      <InputNumberButton type="button" onClick={handleRemoveOneToAmount}>
        <img src={minusIcon} alt="" />
      </InputNumberButton>

      <InputNumberContainer> {quantity} </InputNumberContainer>

      <InputNumberButton type="button" onClick={handleAddOneToAmount}>
        <img src={plusIcon} alt="" />
      </InputNumberButton>
    </InputWrapper>
  )
}
