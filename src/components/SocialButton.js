import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  &:hover {
    color:rgb(43, 255, 0);
  }
`;

const iconMap = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  portfolio: <FaGlobe />,
  facebook: <FaFacebook />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />
};

const SocialButton = ({ type, url }) => {
  return (
    <IconLink href={url} target="_blank" rel="noopener noreferrer">
      {iconMap[type]}
    </IconLink>
  );
};

export default SocialButton;
