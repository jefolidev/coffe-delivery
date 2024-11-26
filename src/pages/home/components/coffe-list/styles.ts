import styled from 'styled-components'

export const CoffeeListWrapper = styled.div`
  margin-bottom: 9.8rem;

  @media (max-width: 480px) {
    margin: 0 5rem;
  }
`

export const CoffeeHeader = styled.header`
  padding: 2rem 0;

  @media (max-width: 480px) {
    text-align: center;
  }
`

export const CoffeeTitle = styled.h2`
  font-size: var(--title-lg);
  font-weight: 800;
  color: ${(props) => props.theme['gray-800']};
`

export const CoffeeListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
`
