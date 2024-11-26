import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 10rem;

  @media (max-width: 480px) {
    margin: 0 2.5rem;
  }
  @media (max-width: 1024px) {
    margin: 0 5rem;
  }
`
