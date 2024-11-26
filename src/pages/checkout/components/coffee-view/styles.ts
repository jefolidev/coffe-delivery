import styled from 'styled-components'

export const CoffeeOrderCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CoffeeOrderCardInformationContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`
export const CoffeeOrderCardImage = styled.img`
  max-width: 4.5rem;
  max-height: 4.5rem;

  @media (max-width: 480px) {
    width: 3.5rem;
  }
`

export const CoffeeOrderCardNameAndQuantitySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const CoffeeOrderCardName = styled.span`
  color: ${(props) => props.theme['gray-800']};
  font-size: var(--text-md);

  @media (max-width: 480px) {
    font-size: var(--text-sm);
  }
`

export const CoffeeOrderCardQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const CoffeeOrderCardValue = styled.span`
  font-size: var(--text-md);
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};

  @media (max-width: 480px) {
    font-size: var(--text-sm);
    text-wrap: nowrap;
  }
`

export const Divisor = styled.div`
  background-color: ${(props) => props.theme['gray-500']};
  width: 100%;
  height: 1px;

  margin-top: 1rem;
`
