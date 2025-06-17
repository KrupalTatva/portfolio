import React from 'react';
import styled from 'styled-components';
import SkillChip from '../components//SkillChip';
import SocialButton from '../components/SocialButton';
import { Typewriter } from 'react-simple-typewriter';
import SmoothNetworkAnimation from '../components/SmoothNetworkAnimation';
import Navbar from '../components/NavBar';
import RoundImage from '../components/RoundImage';
import developer from '../assets/images/developer.png';
import GLBModelViewer from '../components/GLBModelViewer';
import GLBModelWithControls from '../components/GLBModelWithControls';
import GLBViewer from '../components/GLBSlider';

const Wrapper = styled.div`
  background: linear-gradient(var(--bg-black), var(--primary-color)),
              url('https://images.unsplash.com/photo-1522199873713-4c8e1b1497c5?auto=format&fit=crop&w=1740&q=80') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
`;

const Name = styled.h1`
  font-size: 3rem;
  color:var(--header-text-color);
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color:var(--header-text-color);
`;

const Role = styled.h2`
  font-size: 1.5rem;
  color: var(--title-text-color);
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color:var(--title-text-color);
`;

const Section = styled.div`
  margin-top: 20px;
`;

const ChipsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  max-width: 700px;
`;

const SocialRow = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '24px',
  padding: '20px',
};

const itemStyles = {
  background: '#FFFFFF00',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const labelStyles = {
  marginTop: '10px',
  fontSize: '14px',
  wordBreak: 'break-word',
  color: '#333',
};

const BioComponent = () => {
  const data = {
    name: "Krupal Patel",
    email: "bhuvakrupal03@gmail.com",
    phone: "+91-8530559043",
    location: "Ahmedabad, Gujarat, India",
    linkedIn: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    portfolio: "https://yourportfolio.com",
    facebook: "https://facebook.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    roles: [
      "Mobile App Developer",
      "Software Engineer",
      "Web Developer",
      "Full Stack Developer",
      "Cloud Engineer",
      "DevOps Engineer"
    ],
    skills: [
      "Flutter", "React Native", "Android Development", "iOS Development",
      "Firebase", "AWS", "GraphQL", "REST APIs", "CI/CD",
      "Agile Methodologies", "Version Control (Git)", "UI/UX Design",
      "App Security", "Performance Optimization"
    ]
  };

  return (
    <Wrapper>
      <SmoothNetworkAnimation />
      <Navbar />
       <div>
      <h2 style={{ textAlign: 'center' }}>3D Model Viewer</h2>
      <GLBViewer />
    </div>
      {/* info section */}
      {/* <Name>{data.name}</Name>
      <Role>
        I am a{' '}
        <Typewriter
          words={data.roles}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Role>
      <RoundImage src={developer} alt="Profile" /> */}
      {/* model viewer section */}
            {/* <GLBModelViewer
        modelUrl="/animation/robot.glb"
        scale={[2, 2, 2]}
        position={[0, -1, 0]}
        rotation={[0, 1 , 0]}
        background="#f0f0f0"
        cameraPosition={[0, 2, 6]}
      /> */}
       {/* info section */}
      {/* <Section>
        <Info>📍 {data.location}</Info>
        <Info>📧 {data.email}</Info>
        <Info>📞 {data.phone}</Info>
      </Section>

      <Section>
        <Title>Skills</Title>
        <ChipsWrapper>
          {data.skills.map((skill, idx) => (
            <SkillChip key={idx} label={skill} />
          ))}
        </ChipsWrapper>
      </Section>

      <Section>
        <h3>Socials</h3>
        <SocialRow>
          <SocialButton type="linkedin" url={data.linkedIn} />
          <SocialButton type="github" url={data.github} />
          <SocialButton type="portfolio" url={data.portfolio} />
          <SocialButton type="facebook" url={data.facebook} />
          <SocialButton type="instagram" url={data.instagram} />
          <SocialButton type="twitter" url={data.twitter} />
        </SocialRow>
      </Section> */}
    </Wrapper>
  );
};

export default BioComponent;
