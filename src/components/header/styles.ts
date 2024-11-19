import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['purple-300']};

  padding: 0.5rem;
  border-radius: 6px;
`
export const LocationText = styled.span`
  color: ${(props) => props.theme['purple-800']};
  font-size: var(--text-sm);
  font-weight: 400;
`
