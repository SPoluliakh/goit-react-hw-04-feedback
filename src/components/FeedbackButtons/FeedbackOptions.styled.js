import styled from 'styled-components';

export const ButtonsWrapp = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
`;

export const FeedbackButtons = styled.button`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.buttonsShadow};
  background-color: ${p => {
    if (p.children === 'good') {
      return p.theme.colors.good;
    }
    if (p.children === 'neutral') {
      return p.theme.colors.neutral;
    }
    if (p.children === 'bad') {
      return p.theme.colors.bad;
    }
  }};
  padding: 5px 10px;
  cursor: pointer;
  transition: transform 150ms linear;

  :hover {
    transform: scale(1.2);
  }
`;
