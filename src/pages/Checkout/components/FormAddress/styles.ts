import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  & > h2 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    line-height: 23px;

    margin-bottom: 1rem;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

export const Section = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 12px;

  @media screen and (max-width: 500px) {
    padding: 1.25rem;
  }
`

const BaseSectionHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const SectionFormHeader = styled(BaseSectionHeader)`
  & > svg {
    color: ${({ theme }) => theme.colors.yellow.dark};
  }
`

export const SectionPaymentsHeader = styled(BaseSectionHeader)`
  & > svg {
    color: ${({ theme }) => theme.colors.purple.main};
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > .header-title {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 400;
    line-height: 21px;
  }

  & > .header-subtitle {
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

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

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

    @media screen and (max-width: 500px) {
      top: 65px;
    }
  }
`
interface InputProps {
  maxWidth?: number | string
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
export const SectionPayments = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2rem;
`
