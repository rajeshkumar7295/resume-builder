import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';
import about from '../assets/about.jpg'
const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Resume Builder</h1>
      <div className="flex items-center mb-8">
        <div className="w-2/3 pr-8">
          <p className="text-lg mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-lg">
            Our Resume Builder helps you create professional and eye-catching resumes with ease. Whether you're starting from scratch or updating an existing resume, our builder is designed to simplify the process and provide you with a polished result.
          </p>
        </div>
        <div className="w-1/3">
          <img src={about} alt="Illustration of a person working on a resume" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Share with your friends:</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-blue-600"><FaFacebook size={24} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-blue-700"><FaLinkedin size={24} /></a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="mr-2 text-green-600"><FaWhatsapp size={24} /></a>
        <a href="mailto:?subject=Check out this Resume Builder&body=Here's a link to a great Resume Builder: https://example.com" className="mr-2 text-gray-600"><FaEnvelope size={24} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2 text-blue-400"><FaTwitter size={24} /></a>
      </div>
    </div>
  );
};

export default About;
