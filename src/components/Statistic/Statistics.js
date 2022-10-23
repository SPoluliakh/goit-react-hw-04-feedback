import PropTypes from 'prop-types';
import { StatList, StatItemsText, StatItems } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  const feedbackVariants = Object.keys(options);
  return (
    <>
      <StatList>
        {feedbackVariants.map(key => (
          <StatItems key={key}>
            <StatItemsText>
              {key}: {options[key]}
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
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func,
  positivePercentage: PropTypes.number,
};

export default Statistics;
