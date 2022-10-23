import React, { Component } from 'react';
import Section from '../StatisticsSection';
import Statistics from '../Statistic';
import FeedbackOptions from '../FeedbackButtons';
import { Box } from '../../Box';
import { StatTitle, StatText } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedbackByClick = evt => {
    const selectedButton = evt.currentTarget.innerText;
    this.setState(prevState => ({
      [selectedButton]: prevState[selectedButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const fedbackValues = Object.values(this.state);
    const totalFeedback = fedbackValues.reduce(
      (acc, feedback) => acc + feedback,
      0
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const posotiveFeedback = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return posotiveFeedback || 0;
  };

  render() {
    const feedbackVariants = Object.keys(this.state);
    return (
      <Box display="flex">
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={feedbackVariants}
            onKlick={this.leaveFeedbackByClick}
          />
          <StatTitle>Statistics</StatTitle>
          {this.countTotalFeedback() === 0 ? (
            <StatText>"There is no feedback"</StatText>
          ) : (
            <Statistics
              options={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    );
  }
}
