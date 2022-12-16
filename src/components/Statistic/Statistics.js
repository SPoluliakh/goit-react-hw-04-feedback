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
  feedbackVariants: PropTypes.exact({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default Statistics;
