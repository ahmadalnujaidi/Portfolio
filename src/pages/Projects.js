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
            active={filter === 'mobile'} 
            onClick={() => handleFilterChange('mobile')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile
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
    description: 'A web application for object detection using computer vision, it detects objects in real-time and provides detailed story telling of detected objects.',
    image: '/images/projects/WebAppOD.jpg',
    technologies: ['Flask', 'Python', 'HTML', 'Computer Vision', 'YOLO'],
    category: ['web', 'other'],
    github: 'https://github.com/ahmadalnujaidi/Object-Detection-Web-Application',
    demo: 'https://youtu.be/qv1UIVPW2Jc'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with collaborative features.',
    image: '/images/projects/task-manager.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    category: ['web'],
    github: 'https://github.com/yourusername/task-management-app',
    demo: 'https://task-management-app-demo.netlify.app/'
  },
  {
    title: 'Weather Forecast App',
    description: 'A mobile application that provides real-time weather forecasts, alerts, and detailed meteorological data.',
    image: '/images/projects/weather-app.jpg',
    technologies: ['React Native', 'Redux', 'Weather API', 'Geolocation'],
    category: ['mobile'],
    github: 'https://github.com/yourusername/weather-forecast-app',
    demo: null
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers to track engagement, growth, and campaign performance.',
    image: '/images/projects/social-dashboard.jpg',
    technologies: ['Vue.js', 'Chart.js', 'Node.js', 'Express', 'PostgreSQL'],
    category: ['web', 'backend'],
    github: 'https://github.com/yourusername/social-media-dashboard',
    demo: 'https://social-dashboard-demo.netlify.app/'
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A community-driven platform for sharing, discovering, and saving recipes with social features.',
    image: '/images/projects/recipe-app.jpg',
    technologies: ['React', 'GraphQL', 'Apollo', 'MongoDB', 'AWS S3'],
    category: ['web', 'backend'],
    github: 'https://github.com/yourusername/recipe-sharing-platform',
    demo: 'https://recipe-sharing-demo.netlify.app/'
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: '/images/projects/fitness-app.jpg',
    technologies: ['Flutter', 'Firebase', 'Health API', 'Provider'],
    category: ['mobile'],
    github: 'https://github.com/yourusername/fitness-tracking-app',
    demo: null
  },
  {
    title: 'Real-time Chat Application',
    description: 'A messaging platform with real-time communication, user presence indicators, and file sharing capabilities.',
    image: '/images/projects/chat-app.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
    category: ['web', 'backend'],
    github: 'https://github.com/yourusername/real-time-chat-app',
    demo: 'https://chat-app-demo.netlify.app/'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects, skills, and professional experience.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['React', 'Styled Components', 'Framer Motion'],
    category: ['web'],
    github: 'https://github.com/yourusername/portfolio-website',
    demo: 'https://your-portfolio-website.com'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
    image: '/images/projects/data-viz.jpg',
    technologies: ['D3.js', 'React', 'TypeScript', 'Node.js', 'CSV Parser'],
    category: ['web', 'other'],
    github: 'https://github.com/yourusername/data-visualization-dashboard',
    demo: 'https://data-viz-demo.netlify.app/'
  },
  {
    title: 'RESTful API Service',
    description: 'A robust API service providing endpoints for data management, authentication, and third-party integrations.',
    image: '/images/projects/api-service.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    category: ['backend'],
    github: 'https://github.com/yourusername/restful-api-service',
    demo: null
  },
  {
    title: 'Music Streaming App',
    description: 'A mobile application for streaming music with playlist creation, artist discovery, and offline listening.',
    image: '/images/projects/music-app.jpg',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'AWS S3'],
    category: ['mobile', 'backend'],
    github: 'https://github.com/yourusername/music-streaming-app',
    demo: null
  },
  {
    title: 'Machine Learning Model',
    description: 'A predictive model for analyzing customer behavior and providing personalized recommendations.',
    image: '/images/projects/ml-model.jpg',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'],
    category: ['other'],
    github: 'https://github.com/yourusername/machine-learning-model',
    demo: null
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
