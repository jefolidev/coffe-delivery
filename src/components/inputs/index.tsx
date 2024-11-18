import {
  InputNumberButton,
  InputNumberContainer,
  InputTextContainer,
  InputWrapper,
} from './styles'

import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

interface InputProps {
  placeholder: string
}

export function InputText({ placeholder }: InputProps) {
  return <InputTextContainer type="text" placeholder={placeholder} />
}

export function InputNumber({ placeholder }: InputProps) {
  return (
    <InputWrapper>
      <InputNumberButton type="button">
        <img src={minusIcon} alt="" />
      </InputNumberButton>

      <InputNumberContainer type="number" min={0} placeholder={placeholder} />

      <InputNumberButton type="button">
        <img src={plusIcon} alt="" />
      </InputNumberButton>
    </InputWrapper>
  )
}
