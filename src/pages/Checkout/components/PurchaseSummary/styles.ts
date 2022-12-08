import styled from 'styled-components'

export const PurchaseSummaryContainer = styled.div`
  width: 100%;
  max-width: 28rem;

  @media screen and (max-width: 1000px) {
    max-width: 40rem;
  }

  & > h2 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    line-height: 23px;

    margin-bottom: 1rem;
  }
`

export const ShoppingCart = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`

export const ListShoppingCart = styled.div`
  max-height: 28.875rem;
  border-top: 1px solid ${({ theme }) => theme.colors.base.button};
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
  padding: 1.5rem 0.5rem 0;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.base.hover};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.base.label};
    border-radius: 20px;
  }
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 1.5rem;

  & > span {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
  }
`

export const SummaryPrice = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .summary-row {
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 400;
    line-height: 18px;
  }

  .summary-row-title {
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 700;
    line-height: 26px;
  }
`

export const ButtonConfirm = styled.div`
  margin-top: 1.5rem;

  button {
    background: ${({ theme }) => theme.colors.yellow.main};
    width: 100%;
    height: 48px;
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 700;
    line-height: 23px;
    text-transform: uppercase;

    &:hover {
      background: ${({ theme }) => theme.colors.yellow.dark};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.base.label};
      cursor: not-allowed;
    }
  }
`
