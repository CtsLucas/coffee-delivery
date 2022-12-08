import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`
