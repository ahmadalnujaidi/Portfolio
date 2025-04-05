import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.category.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <ProjectsContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>My Projects</PageTitle>
        <PageDescription>
          A collection of my work, personal projects, and contributions that showcase my skills and experience.
        </PageDescription>
      </PageHeader>

      <FilterContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FilterButtons>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => handleFilterChange('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => handleFilterChange('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={filter === 'frontend'} 
            onClick={() => handleFilterChange('frontend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </FilterButton>
          <FilterButton 
            active={filter === 'backend'} 
            onClick={() => handleFilterChange('backend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </FilterButton>
          <FilterButton 
            active={filter === 'other'} 
            onClick={() => handleFilterChange('other')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Other
          </FilterButton>
        </FilterButtons>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search projects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImageContainer>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectOverlay>
                  <ProjectLinks>
                    {project.github && (
                      <ProjectLink 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </ProjectLink>
                    )}
                    {project.demo && (
                      <ProjectLink 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTechnologies>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTechnologies>
              </ProjectContent>
            </ProjectCard>
          ))
        ) : (
          <NoResults>
            <NoResultsText>No projects found matching your criteria.</NoResultsText>
            <ResetButton 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </ResetButton>
          </NoResults>
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

// Project data
const projectsData = [
  {
    title: 'Object Detection Web Application',
    description: 'This project is a real-time object detection web application using a YOLO model, combined with a Generative AI model to produce storytelling descriptions of detected objects. The application captures frames from a webcam, performs object detection, and displays detections on a web interface. Additionally, it logs the detected items with their approximate locations and generates a story-like description of the scene every 5 seconds.',
    image: '/images/projects/WebAppOD.jpg',
    technologies: ['Flask', 'Python', 'HTML', 'Computer Vision', 'YOLO'],
    category: ['web', 'other'],
    github: 'https://github.com/ahmadalnujaidi/Object-Detection-Web-Application',
    demo: 'https://youtu.be/qv1UIVPW2Jc'
  },
  {
    title: 'Nataj',
    description: 'This application was built during a hackathon to help Mid-sized manufacturers and B2B buyers gain real-time visibility into production timelines and quality checks.',
    image: '/images/projects/Nataj.png',
    technologies: ['NestJS', 'React', 'postgres', 'Full Stack'],
    category: ['web', 'backend', 'frontend'],
    github: 'https://github.com/ahmadalnujaidi/Nataj',
    demo: 'https://www.youtube.com/watch?v=fZRzx70ka2A'
  },
  {
    title: 'Sketch-To-Art',
    description: 'Web application where users can upload their sketches and receive AI-generated art pieces.',
    image: '/images/projects/sketch-to-art.png',
    technologies: ['HTML/CSS', 'Javascript', 'Node.js', 'OpenAI API', 'DALL-E'],
    category: ['web', 'frontend', 'backend'],
    github: 'https://github.com/ahmadalnujaidi/Sketch-To-Art',
    demo: 'https://www.youtube.com/watch?v=ePQIamc7ETE'
  }
];

// Styled Components
const ProjectsContainer = styled.div`
  padding: 120px 5% 80px;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
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

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.6rem 1.2rem;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.backgroundLight};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text};
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : theme.colors.border};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  
  @media screen and (max-width: 992px) {
    width: 100%;
    max-width: 300px;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  &:hover > div {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  flex: 1;
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
`;

const NoResultsText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const ResetButton = styled(motion.button)`
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

export default Projects;
