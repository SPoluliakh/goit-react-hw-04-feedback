import { useReducer } from 'react';
import Section from '../StatisticsSection';
import Statistics from '../Statistic';
import FeedbackOptions from '../FeedbackButtons';
import { Box } from '../../Box';
import { StatTitle, StatText, ButtonsWrapp } from './App.styled';

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };

    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };

    case 'bad':
      return { ...state, bad: state.bad + 1 };
    default:
      return state;
  }
}

export const App = () => {
  const [state, dispatcher] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Responsible for updating the state
  const leaveFeedbackByClick = evt => {
    const selectedButton = evt.currentTarget.innerText;
    dispatcher({ type: selectedButton, payload: 1 });
  };

  // Responsible for counting feedbacks
  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    const totalFeedback = good + bad + neutral;
    return totalFeedback;
  };

  // Responsible for counting positive feedback
  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const posotiveFeedback = Math.ceil((good / countTotalFeedback()) * 100);
    return posotiveFeedback || 0;
  };

  const feedbackVariants = Object.keys(state);
  return (
    <Box display="flex">
      <Section title="Plese leave feedback">
        <ButtonsWrapp>
          {feedbackVariants.map(variant => (
            <FeedbackOptions
              key={variant}
              option={variant}
              onKlick={leaveFeedbackByClick}
            />
          ))}
        </ButtonsWrapp>

        <StatTitle>Statistics</StatTitle>
        {countTotalFeedback() === 0 ? (
          <StatText>"There is no feedback"</StatText>
        ) : (
          <Statistics
            feedbackVariants={state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Box>
  );
};
