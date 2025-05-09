import React from 'react';
import styled from 'styled-components';
import SkillChip from '../components//SkillChip';
import SocialButton from '../components/SocialButton';
import { Typewriter } from 'react-simple-typewriter';
import NetworkAnimation from '../components/NetworkAnimation';
import SmoothNetworkAnimation from '../components/SmoothNetworkAnimation';

const Wrapper = styled.div`
  padding: 60px 30px;
  background: linear-gradient(rgb(0, 0, 0), rgba(0, 142, 2, 0.7)),
              url('https://images.unsplash.com/photo-1522199873713-4c8e1b1497c5?auto=format&fit=crop&w=1740&q=80') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
`;

const Name = styled.h1`
  font-size: 3rem;
  color:rgb(0, 255, 76);
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 1rem;
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
            <Name>{data.name}</Name>
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

            <Section>
                <Info>📍 {data.location}</Info>
                <Info>📧 {data.email}</Info>
                <Info>📞 {data.phone}</Info>
            </Section>

            <Section>
                <h3>Skills</h3>
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
            </Section>
        </Wrapper>
    );
};

export default BioComponent;
