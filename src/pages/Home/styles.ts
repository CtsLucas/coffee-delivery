import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  padding: 5.875rem 0;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;

  & > h1 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    font-size: 48px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.base.title};
    line-height: 62px;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-top: 1rem;
    line-height: 26px;
  }

  & > div {
    display: flex;
    margin-top: 4.25rem;

    & + div {
      margin-top: 1.25rem;
    }
  }
`

export const Banner = styled.div`
  margin-left: 3.5rem;

  & > img {
    width: 100%;
    max-width: 476px;
  }
`
