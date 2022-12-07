import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  max-width: 16rem;
  background: ${({ theme }) => theme.colors.base.card};
  padding: 1.25rem;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 120px;
    height: 120px;
    margin-top: -40px;
  }

  & > div {
    display: flex;
    gap: 4px;

    & > span {
      background: ${({ theme }) => theme.colors.yellow.light};
      padding: 4px 8px;
      border-radius: 100px;

      font-size: ${({ theme }) => theme.fontSize.xxsmall};
      color: ${({ theme }) => theme.colors.yellow.dark};
      font-weight: 700;
      line-height: 13px;
      text-transform: uppercase;

      margin-top: 1rem;
    }
  }

  & > h3 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    line-height: 26px;
    text-transform: capitalize;

    margin-top: 1rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.base.label};
    font-weight: 400;
    line-height: 18px;
    text-align: center;

    margin-top: 0.5rem;
  }
`
export const PurchaseField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.125rem;

  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.base.text};
    line-height: 18px;
    font-weight: 400;

    & > span {
      font-family: ${({ theme }) => theme.fontFamily.header};
      font-size: ${({ theme }) => theme.fontSize.xxlarge};
      line-height: 32px;
      font-weight: 700;
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;
  }

  & > strong {
    display: flex;
    width: 100%;
    height: 38px;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.danger};
    line-height: 32px;
    font-weight: 700;
  }
`

export const PurchaseButton = styled.button`
  background: ${({ theme }) => theme.colors.purple.dark};
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.purple.main};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple.dark};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Counter = styled.div`
  background: ${({ theme }) => theme.colors.base.button};
  padding: 8px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  & > button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;

    &:disabled {
      & > svg {
        color: ${({ theme }) => theme.colors.base.text};
        cursor: pointer;
      }
    }

    & > svg {
      color: ${({ theme }) => theme.colors.purple.main};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.purple.dark};
      }
    }
  }

  & > span {
    width: 18px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.title};
    font-weight: 400;
    line-height: 21px;
    text-align: center;
  }
`
