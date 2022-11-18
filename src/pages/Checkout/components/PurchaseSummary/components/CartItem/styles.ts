import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};

  & > img {
    width: 64px;
    height: 64px;
  }

  .cart-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .cart-header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > h3 {
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: 400;
      line-height: 21px;
      text-transform: capitalize;
    }

    & > span {
      color: ${({ theme }) => theme.colors.base.text};
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: 700;
      line-height: 21px;
    }
  }

  .cart-count {
    display: flex;
    gap: 0.5rem;
  }

  & + & {
    margin-top: 1.5rem;
  }
`

export const ButtonCounter = styled.div`
  background: ${({ theme }) => theme.colors.base.button};
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.base.hover};
  }

  & > span {
    padding: 0 4px;
    color: ${({ theme }) => theme.colors.base.title};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
    line-height: 21px;
  }

  & > button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    box-shadow: none;

    & > svg {
      color: ${({ theme }) => theme.colors.purple.main};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.purple.dark};
      }
    }

    & > span {
      color: ${({ theme }) => theme.colors.base.text};
      font-size: ${({ theme }) => theme.fontSize.xsmall};
      font-weight: 400;
      line-height: 19px;
      text-transform: uppercase;

      &:hover {
        color: ${({ theme }) => theme.colors.base.subtitle};
      }
    }
  }
`
