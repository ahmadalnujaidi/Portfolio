import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const Skills = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <SkillsContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>My Skills</PageTitle>
        <PageDescription>
          A comprehensive overview of my technical skills and proficiencies as a software engineer.
        </PageDescription>
      </PageHeader>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaCode /></SectionIcon>
          <span>Programming Languages</span>
        </SectionTitle>
        <SkillsGrid>
          {programmingLanguages.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaLaptopCode /></SectionIcon>
          <span>Frontend Development</span>
        </SectionTitle>
        <SkillsGrid>
          {frontendSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaServer /></SectionIcon>
          <span>Backend Development</span>
        </SectionTitle>
        <SkillsGrid>
          {backendSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaDatabase /></SectionIcon>
          <span>Databases</span>
        </SectionTitle>
        <SkillsGrid>
          {databaseSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaTools /></SectionIcon>
          <span>Tools & Technologies</span>
        </SectionTitle>
        <SkillsGrid>
          {toolsSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <SkillsSection>
        <SectionTitle>
          <SectionIcon><FaMobileAlt /></SectionIcon>
          <span>Mobile Development</span>
        </SectionTitle>
        <SkillsGrid>
          {mobileSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillHeader>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillHeader>
              <SkillLevel>
                <SkillBar>
                  <SkillProgress width={skill.level} />
                </SkillBar>
                <SkillPercentage>{skill.level}</SkillPercentage>
              </SkillLevel>
              <SkillDescription>{skill.description}</SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <OtherSkillsSection>
        <SectionTitle>Other Skills</SectionTitle>
        <OtherSkillsGrid>
          {otherSkills.map((skill, index) => (
            <OtherSkillItem 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {skill}
            </OtherSkillItem>
          ))}
        </OtherSkillsGrid>
      </OtherSkillsSection>
    </SkillsContainer>
  );
};

// Skill data
const programmingLanguages = [
  {
    name: 'JavaScript',
    icon: '/images/skills/javascript.png',
    level: '90%',
    description: 'Proficient in modern JavaScript (ES6+), async programming, and functional concepts.'
  },
  {
    name: 'Python',
    icon: '/images/skills/python.png',
    level: '85%',
    description: 'Experienced in Python development including data analysis, automation, and web applications.'
  },
  {
    name: 'Java',
    icon: '/images/skills/java.png',
    level: '75%',
    description: 'Strong understanding of Java fundamentals, OOP principles, and application development.'
  },
  {
    name: 'TypeScript',
    icon: '/images/skills/typescript.png',
    level: '80%',
    description: 'Skilled in TypeScript for building type-safe applications with improved developer experience.'
  },
  {
    name: 'C/C++',
    icon: '/images/skills/cpp.png',
    level: '70%',
    description: 'Familiar with C/C++ for system programming and performance-critical applications.'
  },
  {
    name: 'HTML/CSS',
    icon: '/images/skills/html-css.png',
    level: '95%',
    description: 'Expert in creating semantic HTML and responsive CSS layouts with modern techniques.'
  }
];

const frontendSkills = [
  {
    name: 'React',
    icon: '/images/skills/react.png',
    level: '90%',
    description: 'Extensive experience building single-page applications with React, Redux, and hooks.'
  },
  {
    name: 'Vue.js',
    icon: '/images/skills/vue.png',
    level: '75%',
    description: 'Proficient in Vue.js for building interactive user interfaces and single-page applications.'
  },
  {
    name: 'Angular',
    icon: '/images/skills/angular.png',
    level: '70%',
    description: 'Familiar with Angular framework for building robust enterprise applications.'
  },
  {
    name: 'SASS/SCSS',
    icon: '/images/skills/sass.png',
    level: '85%',
    description: 'Skilled in writing maintainable CSS with SASS/SCSS preprocessors.'
  },
  {
    name: 'Styled Components',
    icon: '/images/skills/styled-components.png',
    level: '85%',
    description: 'Experienced with CSS-in-JS solutions for component-based styling.'
  },
  {
    name: 'Webpack',
    icon: '/images/skills/webpack.png',
    level: '80%',
    description: 'Proficient in configuring and optimizing Webpack for modern web applications.'
  }
];

const backendSkills = [
  {
    name: 'Node.js',
    icon: '/images/skills/nodejs.png',
    level: '85%',
    description: 'Strong experience building RESTful APIs and microservices with Node.js and Express.'
  },
  {
    name: 'Express.js',
    icon: '/images/skills/express.png',
    level: '85%',
    description: 'Skilled in creating robust server-side applications with Express.js framework.'
  },
  {
    name: 'Django',
    icon: '/images/skills/django.png',
    level: '75%',
    description: 'Experienced in building full-stack applications with Django and Python.'
  },
  {
    name: 'Spring Boot',
    icon: '/images/skills/spring.png',
    level: '70%',
    description: 'Familiar with Java Spring Boot for building enterprise-grade applications.'
  },
  {
    name: 'GraphQL',
    icon: '/images/skills/graphql.png',
    level: '80%',
    description: 'Proficient in designing and implementing GraphQL APIs for efficient data fetching.'
  },
  {
    name: 'REST API',
    icon: '/images/skills/rest.png',
    level: '90%',
    description: 'Expert in designing and implementing RESTful APIs following best practices.'
  }
];

const databaseSkills = [
  {
    name: 'MongoDB',
    icon: '/images/skills/mongodb.png',
    level: '85%',
    description: 'Experienced in designing and working with NoSQL databases using MongoDB.'
  },
  {
    name: 'PostgreSQL',
    icon: '/images/skills/postgresql.png',
    level: '80%',
    description: 'Proficient in relational database design and optimization with PostgreSQL.'
  },
  {
    name: 'MySQL',
    icon: '/images/skills/mysql.png',
    level: '80%',
    description: 'Strong skills in MySQL database administration, optimization, and query design.'
  },
  {
    name: 'Firebase',
    icon: '/images/skills/firebase.png',
    level: '85%',
    description: 'Skilled in using Firebase for real-time databases, authentication, and cloud functions.'
  }
];

const toolsSkills = [
  {
    name: 'Git',
    icon: '/images/skills/git.png',
    level: '90%',
    description: 'Expert in version control with Git, including branching strategies and collaborative workflows.'
  },
  {
    name: 'Docker',
    icon: '/images/skills/docker.png',
    level: '80%',
    description: 'Proficient in containerizing applications and managing multi-container environments.'
  },
  {
    name: 'AWS',
    icon: '/images/skills/aws.png',
    level: '75%',
    description: 'Experienced with various AWS services for cloud deployment and infrastructure.'
  },
  {
    name: 'CI/CD',
    icon: '/images/skills/cicd.png',
    level: '85%',
    description: 'Skilled in setting up continuous integration and deployment pipelines.'
  },
  {
    name: 'Jest',
    icon: '/images/skills/jest.png',
    level: '85%',
    description: 'Proficient in writing unit and integration tests with Jest testing framework.'
  }
];

const mobileSkills = [
  {
    name: 'React Native',
    icon: '/images/skills/react-native.png',
    level: '80%',
    description: 'Experienced in building cross-platform mobile applications with React Native.'
  },
  {
    name: 'Flutter',
    icon: '/images/skills/flutter.png',
    level: '70%',
    description: 'Familiar with Flutter framework for building beautiful native applications.'
  }
];

const otherSkills = [
  'Agile Methodologies',
  'UI/UX Design',
  'RESTful API Design',
  'System Architecture',
  'Technical Documentation',
  'Problem Solving',
  'Team Collaboration',
  'Project Management',
  'Code Review',
  'Mentoring',
  'Performance Optimization',
  'Responsive Design',
  'Cross-browser Compatibility',
  'Accessibility (WCAG)',
  'SEO Best Practices'
];

// Styled Components
const SkillsContainer = styled.div`
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
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsSection = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SkillBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.width};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const SkillPercentage = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

const OtherSkillsSection = styled.section`
  margin-bottom: 5rem;
`;

const OtherSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const OtherSkillItem = styled(motion.div)`
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

export default Skills;
