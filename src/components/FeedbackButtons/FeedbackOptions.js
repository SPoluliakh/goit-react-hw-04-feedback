import PropTypes from 'prop-types';
import { FeedbackButtons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onKlick, option }) => {
  return <FeedbackButtons onClick={onKlick}>{option}</FeedbackButtons>;
};

FeedbackOptions.propTypes = {
  option: PropTypes.string.isRequired,
  onKlick: PropTypes.func,
};

export default FeedbackOptions;
