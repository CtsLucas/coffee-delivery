import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: ${({ theme }) => theme.colors.purple.light};
  padding: 10px 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.purple.main};
`

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.yellow.light};
  padding: 10px 8px;
  border-radius: 6px;
`
