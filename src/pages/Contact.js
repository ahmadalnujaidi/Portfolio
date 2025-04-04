import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a backend service
    // For demonstration, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>Get In Touch</PageTitle>
        <PageDescription>
          Have a question or want to work together? Feel free to contact me using the form below.
        </PageDescription>
      </PageHeader>

      <ContactContent>
        <ContactInfoSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactInfoHeader>Contact Information</ContactInfoHeader>
          <ContactInfoText>
            Feel free to reach out to me through any of the following methods. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </ContactInfoText>
          
          <ContactInfoItems>
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaMapMarkerAlt />
              </ContactInfoIcon>
              <ContactInfoItemContent>
                <ContactInfoItemTitle>Location</ContactInfoItemTitle>
                <ContactInfoItemText>Your City, Country</ContactInfoItemText>
              </ContactInfoItemContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaEnvelope />
              </ContactInfoIcon>
              <ContactInfoItemContent>
                <ContactInfoItemTitle>Email</ContactInfoItemTitle>
                <ContactInfoItemText>your.email@example.com</ContactInfoItemText>
              </ContactInfoItemContent>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaPhone />
              </ContactInfoIcon>
              <ContactInfoItemContent>
                <ContactInfoItemTitle>Phone</ContactInfoItemTitle>
                <ContactInfoItemText>+1 (123) 456-7890</ContactInfoItemText>
              </ContactInfoItemContent>
            </ContactInfoItem>
          </ContactInfoItems>
          
          <SocialLinks>
            <SocialLink 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#6e5494' }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#0077b5' }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#1da1f2' }}
              transition={{ duration: 0.3 }}
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </ContactInfoSection>

        <ContactFormSection
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactForm onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <FormMessage success={formStatus.success}>
                {formStatus.message}
              </FormMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Name *</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email *</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message *</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane style={{ marginRight: '8px' }} /> Send Message
            </SubmitButton>
          </ContactForm>
        </ContactFormSection>
      </ContactContent>

      <MapSection>
        <MapIframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619756483452!5m2!1sen!2sca" 
          allowFullScreen="" 
          loading="lazy"
          title="Location Map"
        />
      </MapSection>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoSection = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ContactInfoHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ContactInfoText = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactInfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1rem;
`;

const ContactInfoItemContent = styled.div``;

const ContactInfoItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.3rem;
`;

const ContactInfoItemText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  transition: all 0.3s ease;
`;

const ContactFormSection = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form``;

const FormMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background-color: ${({ success, theme }) => 
    success ? theme.colors.success + '20' : theme.colors.error + '20'};
  color: ${({ success, theme }) => 
    success ? theme.colors.success : theme.colors.error};
  font-size: 0.95rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary + '40'};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary + '40'};
  }
`;

const SubmitButton = styled(motion.button)`
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

const MapSection = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default Contact;
