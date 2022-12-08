import styled from 'styled-components'

export const ToggleButtonContainer = styled.div`
  width: 100%;

  .toggle-group {
    display: flex;
    gap: 12px;
    box-shadow: none;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  .toggle-group-item {
    background-color: ${({ theme }) => theme.colors.base.button};
    flex: 1;
    height: 48px;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    box-shadow: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.base.hover};
    }

    &[data-state='on'] {
      background-color: ${({ theme }) => theme.colors.purple.light};
      border-color: ${({ theme }) => theme.colors.purple.main};
    }

    & > svg {
      color: ${({ theme }) => theme.colors.purple.main};
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
