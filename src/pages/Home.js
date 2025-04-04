import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>Your Name</Name>
          <Title>Software Engineering Student</Title>
          <Description>
            I'm passionate about building innovative solutions and creating meaningful user experiences.
            Specializing in full-stack development with expertise in modern technologies.
          </Description>
          <ButtonGroup>
            <PrimaryButton 
              to="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <FaArrowRight style={{ marginLeft: '8px' }} />
            </PrimaryButton>
            <SecondaryButton 
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProfileImage src="/images/profile-placeholder.jpg" alt="Your Name" />
        </HeroImage>
      </HeroSection>

      <AboutSection>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>
            <p>
            I bridge imagination and functionality, crafting sleek interfaces on the surface while maintaining rock-solid code behind the scenes.
            I'm a digital architect, building the full journey of software - from pixels to packets, and everything in between.
            I take ideas from wireframes to databases, stitching together front and back ends to create elegant, functional solutions. 
            Whether I'm navigating the front-end forest or tackling back-end dungeons, 
            I thrive in turning complexity into seamless user experiences that truly come to life.
            </p>
            <p>
              I enjoy tackling complex problems and turning them into simple, beautiful solutions. 
              When I'm not coding, you can find me exploring new technologies,
              or expanding my knowledge through online courses and tech conferences.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest industry trends and best practices. 
              My goal is to create software that makes a positive impact on people's lives.
            </p>
          </AboutText>
          <StatsContainer>
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
          </StatsContainer>
        </AboutContent>
      </AboutSection>

      <SkillsPreviewSection>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsPreviewContent>
          <SkillCategory>
            <CategoryTitle>Frontend</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillName>React</SkillName>
                <SkillBar>
                  <SkillProgress width="90%" />
                </SkillBar>
              </SkillItem>
              <SkillItem>
                <SkillName>JavaScript</SkillName>
                <SkillBar>
                  <SkillProgress width="100%" />
                </SkillBar>
              </SkillItem>
              <SkillItem>
                <SkillName>HTML/CSS</SkillName>
                <SkillBar>
                  <SkillProgress width="95%" />
                </SkillBar>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
          
          <SkillCategory>
            <CategoryTitle>Backend</CategoryTitle>
            <SkillsList>
              <SkillItem>
                <SkillName>Node.js</SkillName>
                <SkillBar>
                  <SkillProgress width="95%" />
                </SkillBar>
              </SkillItem>
              <SkillItem>
                <SkillName>Python</SkillName>
                <SkillBar>
                  <SkillProgress width="75%" />
                </SkillBar>
              </SkillItem>
              <SkillItem>
                <SkillName>Databases</SkillName>
                <SkillBar>
                  <SkillProgress width="90%" />
                </SkillBar>
              </SkillItem>
            </SkillsList>
          </SkillCategory>
        </SkillsPreviewContent>
        <ViewMoreContainer>
          <ViewMoreButton 
            to="/skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Skills <FaArrowRight style={{ marginLeft: '8px' }} />
          </ViewMoreButton>
        </ViewMoreContainer>
      </SkillsPreviewSection>

      <ProjectsPreviewSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          <ProjectCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src="/images/project1-placeholder.jpg" alt="Project 1" />
            <ProjectContent>
              <ProjectTitle>Project One</ProjectTitle>
              <ProjectDescription>
                A web application built with React and Node.js that helps users manage their tasks efficiently.
              </ProjectDescription>
              <ProjectTags>
                <ProjectTag>React</ProjectTag>
                <ProjectTag>Node.js</ProjectTag>
                <ProjectTag>MongoDB</ProjectTag>
              </ProjectTags>
              <ProjectLinks>
                <ProjectLink href="#" target="_blank" rel="noopener noreferrer">Demo</ProjectLink>
                <ProjectLink href="#" target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>

          <ProjectCard
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src="/images/project2-placeholder.jpg" alt="Project 2" />
            <ProjectContent>
              <ProjectTitle>Project Two</ProjectTitle>
              <ProjectDescription>
                An e-commerce platform with a responsive design, user authentication, and payment integration.
              </ProjectDescription>
              <ProjectTags>
                <ProjectTag>React</ProjectTag>
                <ProjectTag>Express</ProjectTag>
                <ProjectTag>Stripe</ProjectTag>
              </ProjectTags>
              <ProjectLinks>
                <ProjectLink href="#" target="_blank" rel="noopener noreferrer">Demo</ProjectLink>
                <ProjectLink href="#" target="_blank" rel="noopener noreferrer">GitHub</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
        <ViewMoreContainer>
          <ViewMoreButton 
            to="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects <FaArrowRight style={{ marginLeft: '8px' }} />
          </ViewMoreButton>
        </ViewMoreContainer>
      </ProjectsPreviewSection>

      <CTASection>
        <CTAContent>
          <CTATitle>Interested in working together?</CTATitle>
          <CTADescription>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </CTADescription>
          <CTAButton 
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </CTAButton>
        </CTAContent>
      </CTASection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding-top: 2rem;
    gap: 3rem;
  }
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  
  @media screen and (max-width: 992px) {
    max-width: 100%;
    order: 2;
  }
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const SecondaryButton = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 992px) {
    order: 1;
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const AboutSection = styled.section`
  padding: 5rem 5%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const AboutText = styled.div`
  flex: 2;
  
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 992px) {
    padding: 1.5rem;
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const SkillsPreviewSection = styled.section`
  padding: 5rem 5%;
`;

const SkillsPreviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const SkillCategory = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillItem = styled.div``;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.width};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const ViewMoreButton = styled(motion(Link))`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const ProjectsPreviewSection = styled.section`
  padding: 5rem 5%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: underline;
  }
`;

const CTASection = styled.section`
  padding: 5rem 5%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export default Home;
