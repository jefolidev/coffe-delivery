import styled from 'styled-components'

export const RadioContainer = styled.label`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['purple-300']};

  flex-wrap: wrap;
  font-size: 1rem;

  transition: all 0.1s;

  flex: 1;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-300']};
    border-color: ${(props) => props.theme['purple-500']};
  }

  input {
    display: none;
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    text-transform: uppercase;
    font-size: var(--text-xs);
  }
`
