import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;

  & > h1 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    color: ${({ theme }) => theme.colors.yellow.dark};
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
  }

  & > span {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 400;
    line-height: 26px;
  }

  & > div {
    display: flex;
    gap: 6.375rem;
  }
`
export const OrderInfo = styled.div`
  width: 100%;
  max-width: 33rem;
  padding: 2.5rem;
  margin-top: 2.5rem;

  border: solid 1px transparent;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .info {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
    line-height: 21px;
  }
`
