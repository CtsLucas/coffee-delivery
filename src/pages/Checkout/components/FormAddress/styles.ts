import styled from 'styled-components'

export const FormContainer = styled.div`
  & > h2 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    line-height: 23px;

    margin-bottom: 1rem;
  }
`

export const SectionAddress = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
`

export const SectionAddressHeader = styled.div`
  display: flex;
  gap: 8px;

  & > svg {
    color: ${({ theme }) => theme.colors.yellow.dark};
  }

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .header-content > .header-title {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 400;
    line-height: 21px;
  }

  .header-content > .header-subtitle {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.base.text};
    font-weight: 400;
    line-height: 18px;
  }
`

export const SectionAddressForm = styled.div`
  margin-top: 2rem;

  .form-row {
    display: flex;
    gap: 12px;
    position: relative;

    & + .form-row {
      margin-top: 1rem;
    }
  }

  .optional::after {
    content: 'Opcional';
    position: absolute;
    top: 13px;
    right: 12px;

    color: ${({ theme }) => theme.colors.base.label};
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    font-weight: 400;
    line-height: 18px;
    font-style: italic;
  }
`

interface InputProps {
  maxWidth?: number
}

export const Input = styled.input<InputProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || ''};
  height: 42px;
  background: ${({ theme }) => theme.colors.base.input};
  padding: 12px;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.base.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 400;
  line-height: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
  }
`
