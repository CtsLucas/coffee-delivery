import styled from 'styled-components'

export const CatalogContainer = styled.div`
  padding-bottom: 2rem;

  & > h2 {
    font-family: ${({ theme }) => theme.fontFamily.header};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: 32px;
    font-weight: 800;
    line-height: 42px;
  }
`
export const CatalogContent = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 248px);
  grid-gap: 2.5rem 2rem;
  justify-content: space-evenly;
`
