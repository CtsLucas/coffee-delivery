import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HomeHeader = styled.div`
  display: flex;
  padding: 5.875rem 0;
  position: relative;

  @media screen and (max-width: 1100px) {
    padding: 3rem 0;
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    padding: 0 0 2rem 0;
  }
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  & > h1 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.base.title};
    line-height: 62px;

    @media screen and (max-width: 600px) {
      font-size: 2rem;
      line-height: 40px;
    }

    @media screen and (max-width: 410px) {
      font-size: 1.5rem;
      line-height: 30px;
    }
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-top: 1rem;
    line-height: 26px;

    @media screen and (max-width: 410px) {
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
  }

  & > div {
    display: flex;
    margin-top: 4.25rem;

    @media screen and (max-width: 900px) {
      margin-top: 2rem;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 1.25rem;
    }

    & + div {
      margin-top: 1.25rem;
    }
  }
`

export const Banner = styled.div`
  margin-left: 3.5rem;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }

  & > img {
    width: 100%;
    max-width: 476px;

    @media screen and (max-width: 1100px) {
      position: absolute;
      width: 30%;
      top: 200px;
      right: 0;
    }
  }
`
