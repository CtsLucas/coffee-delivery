import styled from 'styled-components'

export const PurchaseSummaryContainer = styled.div`
  width: 100%;
  max-width: 28rem;

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
`

export const ListShoppingCart = styled.div`
  max-height: 27.313rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
  padding-right: 1rem;
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
  }
`
