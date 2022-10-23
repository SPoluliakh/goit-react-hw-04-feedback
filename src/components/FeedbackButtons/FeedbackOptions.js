import PropTypes from 'prop-types';
import { FeedbackButtons, ButtonsWrapp } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onKlick }) => {
  return (
    <ButtonsWrapp>
      {options.map(key => (
        <FeedbackButtons key={key} onClick={onKlick}>
          {key}
        </FeedbackButtons>
      ))}
    </ButtonsWrapp>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onKlick: PropTypes.func,
};

export default FeedbackOptions;
