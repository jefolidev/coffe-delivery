import { InputNumberButton, InputNumberContainer, InputWrapper } from './styles'

import { useState } from 'react'
import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function InputNumber({ ...rest }: InputProps) {
  const [amount, setAmount] = useState(0)

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const valueInput = Number(e.target.value)

    setAmount(valueInput >= 0 ? valueInput : 0)
  }

  function handleAddOneToAmount() {
    setAmount((prevState) => prevState + 1)
  }
  function handleRemoveOneToAmount() {
    setAmount((prevState) => (prevState > 0 ? prevState - 1 : 0))
  }

  return (
    <InputWrapper>
      <InputNumberButton type="button" onClick={handleRemoveOneToAmount}>
        <img src={minusIcon} alt="" />
      </InputNumberButton>

      <InputNumberContainer
        type="number"
        value={amount}
        min={0}
        {...rest}
        onChange={handleValueChange}
      />

      <InputNumberButton type="button" onClick={handleAddOneToAmount}>
        <img src={plusIcon} alt="" />
      </InputNumberButton>
    </InputWrapper>
  )
}
