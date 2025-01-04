"use client";

import React from 'react';
import styles from '../../styles/projects.module.css';
import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from '../../components/embla-carousel';

const projects = [
  {
    image: '/images/projects/RAS/RAS2.png',
    title: "Resilient Cyber-Physical Systems for Robotic Surgery",
    description: "Enhancing the safety and efficiency of robot-assisted surgical procedures through modeling and analysis of safety incidents, resilience assessment, continuous context-aware monitoring, and simulation-based safety training.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" }
    ]
  },
  {
    image: '/images/projects/CogEMS/CogEMSMain.jpg',
    title: "Cognitive Assistant Systems for Emergency Response",
    description: "Developing next-generation first responder technology to improve situational awareness and safety in emergency response through resilient data analytic algorithms and real-time sensing and computing resources.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" }
    ]
  },
  {
    image: '/images/projects/ResilientMedDevices/OpenAPS2.png',
    title: "Resilience-by-Construction Design of Medical Devices",
    description: "Investigating the development of generalized model-based fault-tolerance techniques using the principle of 'resilience-by-construction' for designing the next generation of medical devices.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" }
    ]
  },
  {
    image: '/images/projects/AutonomousVehicles/OpenPilot2.png',
    title: "Dependable and Secure Artificial Intelligence for Autonomous Vehicles",
    description: "Designing and validating resilient autonomous systems that rely on AI and machine learning for perception, control, and decision-making, with a focus on safety monitoring, mitigation mechanisms, and testing techniques.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" }
    ]
  }
];


const Projects: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <h1 className={styles.title}>Our Projects</h1>
      <p className={styles.subtitle}>
        We are working on a variety of projects that focus on dependability and reliability in computing systems.
      </p>

      <div className={styles.separator} />
      <EmblaCarousel projects={projects} options={{loop: true}} />
      </section>
  );
};
export default Projects;
