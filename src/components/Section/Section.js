import PropTypes from 'prop-types';
import { Box } from '../../Box';

import { StatisticSectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box as="section">
      <StatisticSectionTitle>{title}</StatisticSectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
