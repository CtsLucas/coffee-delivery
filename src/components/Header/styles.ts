import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  box-shadow: none;

  & > div {
    max-height: 2.5rem;
    display: flex;
    gap: 0.75rem;
  }

  & > a {
    box-shadow: none;
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
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.purple.main};
    color: ${({ theme }) => theme.colors.purple.light};
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.colors.purple.light};
    }
  }

  & > svg {
    color: ${({ theme }) => theme.colors.purple.main};
    transition: all 0.2s ease-in-out;
  }
`

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.yellow.light};
  padding: 10px 8px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  & > a {
    box-shadow: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.yellow.main};
    cursor: pointer;

    & > a > svg {
      color: ${({ theme }) => theme.colors.yellow.light};
    }
  }

  & > a > svg {
    color: ${({ theme }) => theme.colors.yellow.dark};
    transition: all 0.2s ease-in-out;
  }
`
