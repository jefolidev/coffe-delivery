import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  margin-top: 6rem;
  margin-bottom: 6.75rem;

  @media (max-width: 480px) {
    & > img {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    & > img {
      width: 20rem;
    }
  }
`

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: var(--title-lg);
    }
    & > span {
      font-size: var(--text-lg);
    }
  }
`

export const HeroItensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  margin-top: 4rem;

  img {
    width: 2rem;
  }

  @media (max-width: 480px) {
    font-size: var(--text-xs);
  }
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
