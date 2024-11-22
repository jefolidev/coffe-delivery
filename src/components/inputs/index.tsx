import { InputNumberButton, InputNumberContainer, InputWrapper } from './styles'

import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  quantity: number
  placeholder?: string
  handleAmountChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  setNewQuantityValue: (newValue: number) => void
}

export function InputNumber({
  quantity,
  setNewQuantityValue,
  handleAmountChange,
  ...rest
}: InputProps) {
  function handleAddOneToAmount() {
    setNewQuantityValue(quantity + 1)
  }
  function handleRemoveOneToAmount() {
    setNewQuantityValue(quantity - 1)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (handleAmountChange) {
      handleAmountChange(e)
    }
  }

  return (
    <InputWrapper>
      <InputNumberButton type="button" onClick={handleRemoveOneToAmount}>
        <img src={minusIcon} alt="" />
      </InputNumberButton>

      <InputNumberContainer
        type="number"
        value={quantity}
        min={0}
        {...rest}
        onChange={handleChange}
      />

      <InputNumberButton type="button" onClick={handleAddOneToAmount}>
        <img src={plusIcon} alt="" />
      </InputNumberButton>
    </InputWrapper>
  )
}
