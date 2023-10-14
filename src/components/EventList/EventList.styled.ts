import styled from 'styled-components';

export const EventListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;

  margin-top: 40px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;

    margin-top: 24px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 40px;

    margin-top: 40px;
  }
`;
