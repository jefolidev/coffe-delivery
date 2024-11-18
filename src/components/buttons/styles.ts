import styled from 'styled-components'

const DefaultButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 6px;

  text-transform: uppercase;
`

export const SubmitButtonContainer = styled(DefaultButton)`
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};

  width: 8.25rem;
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

  height: 2rem;
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

export const AddCartButtonContainer = styled(DefaultButton)`
  background-color: ${(props) => props.theme['purple-800']};

  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
