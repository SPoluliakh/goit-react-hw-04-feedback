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

  const leaveFeedbackByClick = evt => {
    const selectedButton = evt.currentTarget.innerText;
    dispatcher({ type: selectedButton, payload: 1 });
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    const totalFeedback = good + bad + neutral;
    return totalFeedback;
  };

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

// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const leaveFeedbackByClick = evt => {
//     const selectedButton = evt.currentTarget.innerText;
//     switch (selectedButton) {
//       case 'good':
//         setGood(prevState => prevState + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevState => prevState + 1);
//         break;
//       case 'bad':
//         setBad(prevState => prevState + 1);
//         break;
//       default:
//         return;
//     }
//   };

//   const countTotalFeedback = () => {
//     const totalFeedback = good + bad + neutral;
//     return totalFeedback;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const posotiveFeedback = Math.ceil((good / countTotalFeedback()) * 100);
//     return posotiveFeedback || 0;
//   };

//   const feedbackVariants = ['good', 'neutral', 'bad'];
//   return (
//     <Box display="flex">
//       <Section title="Plese leave feedback">
//         <FeedbackOptions
//           options={feedbackVariants}
//           onKlick={leaveFeedbackByClick}
//         />
//         <StatTitle>Statistics</StatTitle>
//         {countTotalFeedback() === 0 ? (
//           <StatText>"There is no feedback"</StatText>
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     </Box>
//   );
// };
