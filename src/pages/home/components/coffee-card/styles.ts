import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.3rem;

  border-radius: 0.375rem 2.25rem;
  background-color: ${(props) => props.theme['gray-200']};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding: 0 1.25rem;
`

export const CoffeeTagContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const CoffeeTagContent = styled.p`
  border-radius: 1000px;

  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-800']};

  padding: 0.25rem 0.5rem;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0 0.5rem 1em;
`

export const CoffeeCardDescription = styled.p`
  margin: 0;
  text-align: center;
`

export const CoffeeCardBuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 1rem 1.25rem;

  width: 100%;
`

export const CoffeeCardAddToCartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeCardUnitValue = styled.span`
  font-size: var(--text-sm);
  font-weight: 400;
`

export const CoffeeCardPrice = styled.strong`
  font-family: 'Baloo 2', sans-serif;
  font-size: var(--title-md);
  font-weight: 800;
`
