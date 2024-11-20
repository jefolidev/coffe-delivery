import styled from 'styled-components'

export const MainContainer = styled.main``

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  margin-top: 6rem;
  margin-bottom: 6.75rem;
`

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 36.75rem;
`

export const HeroItensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 4rem;
`

export const HeroItem = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const HeroText = styled.span`
  font-size: var(--text-md);
  color: ${(props) => props.theme['gray-700']};
  margin: auto 0;
`
