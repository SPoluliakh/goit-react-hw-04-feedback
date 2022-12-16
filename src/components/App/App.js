import { useReducer } from 'react';
import Section from '../Section';
import Statistics from '../Statistic';
import FeedbackOptions from '../FeedbackOptions';
import { Box } from '../../Box';
import NoFeedbackTitle from 'components/NoFeedbackTitle/NoFeedbackTitle';

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
    dispatcher({ type: selectedButton });
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
    <Box
      border="normal"
      padding={3}
      marginLeft="auto"
      marginRight="auto"
      marginTop={6}
      display="flex"
      flexDirection="column"
      width="300px"
    >
      <Section title="Plese leave feedback">
        <FeedbackOptions
          onKlick={leaveFeedbackByClick}
          feedbackVariants={feedbackVariants}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <NoFeedbackTitle />
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
