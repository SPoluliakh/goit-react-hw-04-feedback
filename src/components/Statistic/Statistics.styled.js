import styled from 'styled-components';

export const StatList = styled.ul`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  list-style: none;
  padding: ${props => props.theme.space[0]}px;
  padding-left: ${props => props.theme.space[3]}px;
`;

export const StatItems = styled.li`
  margin-top: ${props => props.theme.space[2]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
  :first-child {
    margin-top: ${props => props.theme.space[0]}px;
  }
`;

export const StatItemsText = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m}px;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
  color: ${p => {
    if (p.children[0] === 'good') {
      return p.theme.colors.good;
    }
    if (p.children[0] === 'neutral') {
      return p.theme.colors.neutral;
    }
    if (p.children[0] === 'bad') {
      return p.theme.colors.bad;
    }
  }};
`;
