import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;

  margin-top: 7rem;
`
export const SuccessInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SuccessHeader = styled.header`
  h1 {
    color: ${(props) => props.theme['yellow-500']};
    font-size: var(--title-lg);
  }
`
export const SuccessContent = styled.div`
  border-radius: 0.375rem 2.25rem;
  border: 1px solid #dbac2c;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
`
export const Information = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 2rem;
  }

  span {
    font-size: var(--text-md);
  }
`
