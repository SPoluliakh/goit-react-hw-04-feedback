import styled from 'styled-components';

export const StatTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml}px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const StatText = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.ml}px;
`;
