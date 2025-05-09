import React from 'react';
import styled from 'styled-components';

const Chip = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px 15px;
  border-radius: 20px;
  border: 1px solid #00ffc8;
  font-size: 0.85rem;
`;

const SkillChip = ({ label }) => {
  return <Chip>{label}</Chip>;
};

export default SkillChip;
