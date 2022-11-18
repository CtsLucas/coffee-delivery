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
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.yellow.main};
    cursor: pointer;

    & > a > svg {
      color: ${({ theme }) => theme.colors.yellow.light};
    }
  }

  & > a {
    box-shadow: none;
  }

  & > a > svg {
    color: ${({ theme }) => theme.colors.yellow.dark};
    transition: all 0.2s ease-in-out;
  }

  & > span {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.yellow.dark};
    border-radius: 50%;

    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;
  }
`
