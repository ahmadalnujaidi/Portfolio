import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';

const Resume = () => {
  return (
    <ResumeContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>My Resume</PageTitle>
        <PageDescription>
          A summary of my education, work experience, and qualifications.
        </PageDescription>
        <DownloadButton 
          href="/files/AhmadCV.pdf" 
          download="Ahmad_Alnujaidi_Resume.pdf"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload style={{ marginRight: '8px' }} /> Download CV
        </DownloadButton>
      </PageHeader>

      <ResumeContent>
        <ResumeSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeader>
            <SectionIcon>
              <FaGraduationCap />
            </SectionIcon>
            <SectionTitle>Education</SectionTitle>
          </SectionHeader>
          <Timeline>
            {educationData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDot />
                <TimelineContent>
                  <TimelineDate>{item.period}</TimelineDate>
                  <TimelineTitle>{item.degree}</TimelineTitle>
                  <TimelineSubtitle>{item.institution}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionHeader>
            <SectionIcon>
              <FaBriefcase />
            </SectionIcon>
            <SectionTitle>Work Experience</SectionTitle>
          </SectionHeader>
          <Timeline>
            {experienceData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDot />
                <TimelineContent>
                  <TimelineDate>{item.period}</TimelineDate>
                  <TimelineTitle>{item.position}</TimelineTitle>
                  <TimelineSubtitle>{item.company}</TimelineSubtitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                  <TimelineSkills>
                    {item.skills.map((skill, skillIndex) => (
                      <TimelineSkill key={skillIndex}>{skill}</TimelineSkill>
                    ))}
                  </TimelineSkills>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SectionHeader>
            <SectionIcon>
              <FaCode />
            </SectionIcon>
            <SectionTitle>Technical Skills</SectionTitle>
          </SectionHeader>
          <SkillsContainer>
            {skillCategories.map((category, index) => (
              <SkillCategory key={index}>
                <CategoryTitle>{category.name}</CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsContainer>
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionHeader>
            <SectionIcon>
              <FaAward />
            </SectionIcon>
            <SectionTitle>Certifications & Awards</SectionTitle>
          </SectionHeader>
          <CertificationsGrid>
            {certificationsData.map((item, index) => (
              <CertificationCard 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <CertificationTitle>{item.title}</CertificationTitle>
                <CertificationIssuer>{item.issuer}</CertificationIssuer>
                <CertificationDate>{item.date}</CertificationDate>
                {item.url && (
                  <CertificationLink href={item.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </CertificationLink>
                )}
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </ResumeSection>
      </ResumeContent>
    </ResumeContainer>
  );
};

// Resume data
const educationData = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Prince Mohammad bin Fahd University',
    period: '2020 - 2025',
    description: 'Recent Graduate'
  },
  {
    degree: 'IELTS Certification',
    institution: 'British Council',
    period: '2020',
    description: '7.5 / 9.0 Score'
  },
  {
    degree: 'High School Diploma',
    institution: 'Emirates American School',
    period: '2016 - 2020',
    description: ''
  }
];

const experienceData = [
  {
    position: 'Software Engineering Intern',
    company: 'Saudi Aramco',
    period: 'Sep 2024 - Oct 2024',
    description: 'Integrated LLMs into employee training and student education programs, that provide real-time,personalized feedback for training progress.',
    skills: ['HTML/CSS/JavaScript', 'Google Gemini API']
  },
  {
    position: 'Artificial Intelligence Center Intern',
    company: 'Prince Mohammad bin Fahd University',
    period: 'Sep 2024 - Dec 2024',
    description: "Trained an AI model for real-time object detection, focusing on speed, accuracy, and memory efficiency. Developed many Python scripts for data set manipulation and management. Created a web application for object detection, visualization, and storytelling.",
    skills: ['HTML/CSS/JS', 'Python', 'Flask', 'Computer Vision', 'YOLO']
  },
  {
    position: 'Head of the Web and App Development Team',
    company: 'Google Developer Groups',
    period: 'Oct 2024 - Present',
    description: '◦ Head of the Google’s Web and App Development Team, on Prince Mohammad bin Fahd Campus.',
    skills: ['Web Development', 'Mobile Development']
  }
];
// copy over from Skills.js
const skillCategories = [
  {
    name: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'HTML/CSS', 'C#']
  },
  {
    name: 'Frontend Development',
    skills: ['React', 'Tailwind', 'HTML/CSS/JS']
  },
  {
    name: 'Backend Development',
    skills: ['Node.js', 'Express.js','Nest.js', 'Django', 'Flask','ASP.NET', 'REST API']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', ]
  },
  {
    name: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jira', 'Figma', 'Postman']
  }
];

const certificationsData = [
  {
    title: 'Google Project Management Specialist',
    issuer: 'Google',
    date: 'Aug 2024',
    url: 'https://www.coursera.org/account/accomplishments/specialization/LFG7WPJ1NGRW'
  },
  // {
  //   title: 'Hackathon Winner - Best Web Application',
  //   issuer: 'TechFest 2022',
  //   date: 'March 2022',
  //   url: null
  // },
  // {
  //   title: 'Python for Data Science and Machine Learning',
  //   issuer: 'Coursera',
  //   date: 'January 2022',
  //   url: 'https://www.coursera.org/account/accomplishments/verify/12345'
  // }
];

// Styled Components
const ResumeContainer = styled.div`
  padding: 120px 5% 80px;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
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

const ResumeContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ResumeSection = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 3rem;
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.backgroundDark};
`;

const TimelineContent = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TimelineSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TimelineSkill = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 1.5px;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const CertificationIssuer = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1rem;
`;

const CertificationLink = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default Resume;
