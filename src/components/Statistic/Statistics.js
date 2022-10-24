import PropTypes from 'prop-types';
import { StatList, StatItemsText, StatItems } from './Statistics.styled';

const Statistics = ({ total, positivePercentage, feedbackVariants }) => {
  const options = Object.keys(feedbackVariants);

  return (
    <>
      <StatList>
        {options.map(option => (
          <StatItems key={option}>
            <StatItemsText>
              {option}: {feedbackVariants[option]}
            </StatItemsText>
          </StatItems>
        ))}

        <StatItems>
          <StatItemsText>Total: {total()}</StatItemsText>
        </StatItems>
        <StatItems>
          <StatItemsText>
            Positive feedback:
            {positivePercentage}%
          </StatItemsText>
        </StatItems>
      </StatList>
    </>
  );
};
Statistics.propTypes = {
  total: PropTypes.func,
  positivePercentage: PropTypes.number,
};

export default Statistics;

// const Statistics = ({ total, positivePercentage, good, neutral, bad }) => {
//   return (
//     <>
//       <StatList>
//         <StatItems>
//           <StatItemsText>good: {good}</StatItemsText>
//         </StatItems>
//         <StatItems>
//           <StatItemsText>neutral: {neutral}</StatItemsText>
//         </StatItems>
//         <StatItems>
//           <StatItemsText>bad: {bad}</StatItemsText>
//         </StatItems>
//         <StatItems>
//           <StatItemsText>Total: {total()}</StatItemsText>
//         </StatItems>
//         <StatItems>
//           <StatItemsText>
//             Positive feedback:
//             {positivePercentage}%
//           </StatItemsText>
//         </StatItems>
//       </StatList>
//     </>
//   );
// };
// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.func,
//   positivePercentage: PropTypes.number,
// };

// export default Statistics;
