import PropTypes from 'prop-types';

import { FeedbackButtons, ButtonsWrapp } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onKlick, feedbackVariants }) => {
  return (
    <ButtonsWrapp>
      {feedbackVariants.map(variant => (
        <FeedbackButtons key={variant} onClick={onKlick}>
          {variant}
        </FeedbackButtons>
        // <FeedbackOptions
        //   key={variant}
        //   option={variant}
        //   onKlick={leaveFeedbackByClick}
        // />
      ))}
    </ButtonsWrapp>
  );
};

FeedbackOptions.propTypes = {
  feedbackVariants: PropTypes.arrayOf(PropTypes.string),
  onKlick: PropTypes.func,
};

export default FeedbackOptions;
