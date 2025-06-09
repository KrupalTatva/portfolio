import React from 'react';
import styled from 'styled-components';

const Chip = styled.span`
  background-color: var(--bg-chip);
  padding: 6px 15px;
  border-radius: 20px;
  border: 1px solid var(--primary-color);
  font-size: 0.85rem;
`;

const SkillChip = ({ label }) => {
  return <Chip>{label}</Chip>;
};

export default SkillChip;
