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
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 1rem 0;
    }

    & > img {
      width: 100%;
      max-width: 492px;

      @media screen and (max-width: 1050px) {
        width: 340px;
        height: 202px;
      }

      @media screen and (max-width: 500px) {
        display: none;
      }
    }
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

  @media screen and (max-width: 500px) {
    padding: 1.25rem;
  }

  .info {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
    line-height: 21px;

    & > p {
      display: block;
      width: 100%;
    }
  }
`
