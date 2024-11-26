import styled from 'styled-components'

export const DefaultInput = styled.input`
  display: flex;
  align-items: center;

  border: 1px solid transparent;
  outline: 1px solid transparent;
  border-radius: 0.25rem;

  &:active,
  &:focus {
    border: 0.5px solid ${(props) => props.theme['yellow-500']};
  }
`

export const InputWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  max-width: 9rem;
  /* width: 4.5rem; */
  height: 2rem;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
`

export const InputNumberContainer = styled.span`
  font-size: var(--text-md);
  font-weight: 400;

  color: ${(props) => props.theme['gray-900']};

  background-color: transparent;

  text-align: center;
  width: 1rem;
  -moz-appearance: none;
  appearance: none;

  &:-webkit-inner-spin-button,
  &:-webkit-outer-spin-button {
    display: none;
  }
`

export const InputNumberButton = styled.button`
  background-color: transparent;
`
