import PropTypes from 'prop-types';
import { Box } from '../../Box';

import { StatisticSectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box
      as="section"
      padding={3}
      marginLeft="auto"
      marginRight="auto"
      marginTop={6}
      border="normal"
    >
      <StatisticSectionTitle>{title}</StatisticSectionTitle>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
