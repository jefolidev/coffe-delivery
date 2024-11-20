import {
  InputNumberButton,
  InputNumberContainer,
  InputTextContainer,
  InputWrapper,
} from './styles'

import minusIcon from '../../assets/icons/minus.svg'
import plusIcon from '../../assets/icons/plus.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function InputText({ ...rest }: InputProps) {
  return <InputTextContainer type="text" {...rest} />
}

export function InputNumber({ ...rest }: InputProps) {
  return (
    <InputWrapper>
      <InputNumberButton type="button">
        <img src={minusIcon} alt="" />
      </InputNumberButton>

      <InputNumberContainer type="number" min={0} {...rest} />

      <InputNumberButton type="button">
        <img src={plusIcon} alt="" />
      </InputNumberButton>
    </InputWrapper>
  )
}
