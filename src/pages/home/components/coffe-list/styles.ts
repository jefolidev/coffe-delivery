import styled from 'styled-components'

export const CoffeeListWrapper = styled.div`
  margin-bottom: 9.8rem;
`

export const CoffeeHeader = styled.header`
  padding: 2rem 0;
`

export const CoffeeTitle = styled.h2`
  font-size: var(--title-lg);
  font-weight: 800;
  color: ${(props) => props.theme['gray-800']};
`

export const CoffeeListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
