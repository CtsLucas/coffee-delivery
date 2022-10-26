import styled, { css } from 'styled-components'

export const ItemServiceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.text};
    font-weight: 400;
    line-height: 21px;
  }
`

interface ItensServiceProps {
  type: 'coffee' | 'package' | 'shoppingCart' | 'timer'
}

const iconServiceVariants = {
  coffee: css`
    background: ${({ theme }) => theme.colors.purple.main};
  `,
  package: css`
    background: ${({ theme }) => theme.colors.base.text};
  `,
  shoppingCart: css`
    background: ${({ theme }) => theme.colors.yellow.dark};
  `,
  timer: css`
    background: ${({ theme }) => theme.colors.yellow.main};
  `,
}

export const IconService = styled.div<ItensServiceProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${({ type }) => iconServiceVariants[type]}

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
