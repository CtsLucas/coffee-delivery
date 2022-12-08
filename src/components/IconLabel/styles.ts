import styled, { css } from 'styled-components'

export const IconLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  width: 100%;
  max-width: 18.75rem;
  white-space: nowrap;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.text};
    font-weight: 400;
    line-height: 21px;
  }
`

interface IconLabelProps {
  type:
    | 'coffee'
    | 'package'
    | 'shoppingCart'
    | 'timer'
    | 'mapPin'
    | 'currencyDollar'
}

const iconLabelVariants = {
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
  mapPin: css`
    background: ${({ theme }) => theme.colors.purple.main};
  `,
  currencyDollar: css`
    background: ${({ theme }) => theme.colors.yellow.dark};
  `,
}

export const IconContainer = styled.div<IconLabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${({ type }) => iconLabelVariants[type]}

  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
