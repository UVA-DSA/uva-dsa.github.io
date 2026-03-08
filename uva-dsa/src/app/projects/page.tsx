"use client";

import Image from "next/image";
import heroImage from '../../../public/images/projects/UVA-DSA.png';
import type { ReactNode } from "react";
// styles moved to global stylesheet (globals.css)

type Resource = { label: string; link: string };
type Project = {
  image: string;
  title: string;
  description: ReactNode;
  resources: Resource[];
};
type Sponsor = { name: string; logo: string };

// const bannerNotice = (
//   <p>We are always looking for highly motivated graduate and undergraduate students with research and hands-on experience in computer systems dependability & security, robotics, and machine learning to join our team.
//   <br />If you are interested, check out <a href="/resources" className="link"> Resources </a> page for more information.</p>
// )

const sponsors: Sponsor[] = [
  { name: "Commonwealth Cyber Initiative", logo: "/images/sponsors/CCI_logo.png" },
  { name: "National Institute of Standards and Technology", logo: "/images/sponsors/NIST_logo.png" },
  { name: "National Science Foundation", logo: "/images/sponsors/NSF_Logo.png" },
  { name: "UVA School of Engineering and Applied Science", logo: "/images/sponsors/SEAS_logo.png" },
  { name: "UVA Health", logo: "/images/sponsors/UVAHealth_logo.png" },
];

const projects: Project[] = [
  {
    image: "/images/projects/MiDAS/MiDAS.png",
    title: "MiDAS: Multimodal Data Acquisition System for Robot-Assisted Surgery",
    description: (
      <div>
        <p>
          This project introduces MiDAS, an open-source multimodal data acquisition system designed to support
          research in robot-assisted minimally invasive surgery (RMIS). The system enables synchronized collection
          of surgical data without requiring access to proprietary robot telemetry, making it possible to study
          surgical workflows and develop AI-driven assistance systems across multiple robotic platforms.
        </p>

        <ol className="numberedList">
          <li>
            <strong>Platform-agnostic multimodal sensing system</strong> with a non-invasive data collection
            framework that captures synchronized surgical data including electromagnetic hand tracking, RGB-D
            hand motion capture, stereo surgical video, and foot pedal interaction signals without modifying
            robotic hardware.
          </li>
          <li>
            <strong>Cross-platform data collection on surgical robots</strong> validated on the open-source Raven-II
            surgical robot and the clinical da Vinci Xi system, showing that external sensing modalities can
            approximate internal robot kinematics and capture surgeon interaction dynamics.
          </li>
          <li>
            <strong>Multimodal surgical activity datasets</strong> with annotated data from robotic surgery training
            tasks, including peg transfer experiments and high-fidelity suturing procedures on realistic tissue
            simulation models during a surgical training bootcamp.
          </li>
          <li>
            <strong>Benchmarks for surgical gesture recognition</strong> evaluating state-of-the-art temporal models
            for gesture recognition using multimodal signals, demonstrating performance comparable to proprietary
            robot telemetry.
          </li>
        </ol>
        <p>
          By providing an open-source data acquisition system and multimodal datasets across multiple surgical
          platforms, MiDAS aims to reduce barriers to surgical AI research and accelerate the development of
          intelligent systems for surgical workflow understanding, skill assessment, and cognitive assistance in
          robot-assisted surgery.
        </p>
      </div>
    ),
    resources: [
      { label: "Article", link: "https://arxiv.org/abs/2602.12407" },
      { label: "Dataset", link: "https://uva-dsa.github.io/MiDAS/" },
      { label: "GitHub Link", link: "https://github.com/UVA-DSA/MiDAS" },
    ],
  },
  {
    image: "/images/projects/EgoEMS/EgoEMS_Main_Camera_Ready.png",
    title: "EgoEMS: Multimodal Egocentric Dataset for Cognitive Assistance in Emergency Medical Services",
    description: (
      <div>
        <p>
          This project introduces EgoEMS, the first high-fidelity multimodal egocentric dataset designed
          to support the development of AI systems that assist Emergency Medical Services (EMS) responders
          during critical incidents. The dataset captures realistic emergency scenarios with synchronized
          multimodal sensing to enable research on real-time cognitive assistance, activity recognition,
          and performance feedback for first responders.
        </p>
        <ol className="numberedList">
          <li>
            <strong>Multimodal egocentric data collection</strong> via a synchronized sensing platform capturing
            responder egocentric video, conversational audio, smartwatch IMU motion signals, and CPR quality
            measurements using low-cost off-the-shelf devices.
          </li>
          <li>
            <strong>Realistic EMS scenario simulations</strong> with over 20 hours of data across 233 simulated
            emergency scenarios involving 62 participants performing interventions such as CPR, defibrillation,
            ventilation, stroke assessment, and ECG monitoring.
          </li>
          <li>
            <strong>Fine-grained procedural annotations</strong> including an EMS activity taxonomy with 67 keysteps
            across 9 medical interventions, timestamped audio transcripts, speaker diarization, object detection
            annotations, and segmentation masks for medical tools used during procedures.
          </li>
          <li>
            <strong>Benchmarks for AI cognitive assistants</strong> spanning keystep classification, keystep
            segmentation, and CPR quality estimation using multimodal data.
          </li>
        </ol>
        <p>
          By providing realistic multimodal data and standardized benchmarks, EgoEMS aims to accelerate research
          on AI-powered cognitive assistants that improve situational awareness, protocol adherence, and responder
          training in emergency medical environments, ultimately contributing to better patient outcomes.
        </p>
      </div>
    ),
    resources: [
      { label: "Article", link: "https://arxiv.org/pdf/2511.09894" },
      { label: "Dataset", link: "https://uva-dsa.github.io/EgoEMS/" },
      { label: "GitHub Link", link: "https://github.com/UVA-DSA/EgoEMS" },
    ],
  },
  {
    image: "/images/projects/RAS/RAS2.png",
    title: "Resilient Cyber-Physical Systems for Robotic Surgery",
    description: (
      <div>
        <p>
          This project aims to enhance the safety and efficiency of robot-assisted
          surgical procedures by combining systematic modeling of safety incidents,
          resilience assessment under faults and cyber threats, continuous
          context-aware monitoring, and simulation-based training for surgical teams:
        </p>
        <ol className="numberedList">
          <li>
            Modeling and analysis of safety incidents by considering the interactions
            among cyber and physical system components and human operators;
          </li>
          <li>
            Resilience assessment of the robotic surgical systems in the presence of
            accidental system faults, cyber attacks, and human errors;
          </li>
          <li>
            Continuous context-aware monitoring for early detection of potential
            safety and security violations;
          </li>
          <li>
            Simulation-based safety training to prepare surgical teams on dealing
            with unexpected events during surgery.
          </li>
        </ol>
      </div>
    ),
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
    ],
  },
  {
    image: "/images/projects/CogEMS/CogEMSMain.jpg",
    title: "Cognitive Assistant Systems for Emergency Response",
    description:
      (
        <div>
          <p>
            This project focuses on developing the next generation of first responder
            technologies that enhance situational awareness and safety in emergency
            response. The central goal is to design a wearable cognitive assistant
            system that integrates the following key components:
          </p>
          <ol className="numberedList">
            <li>
              <strong>Resilient data analytics</strong> for collecting heterogeneous
              data streams from the incident scene, aggregating them with knowledge
              bases and publicly available sources, and transforming the results into
              accurate, actionable feedback for first responders;
            </li>
            <li>
              <strong>Anytime real-time sensing and edge computing</strong> resources
              that are dynamically optimized to enable continuous data processing on
              responder-worn devices, even under unexpected events such as hardware
              failures or network disconnections.
            </li>
          </ol>
        </div>
      ),
    resources: [
      { label: "Article", link: "https://ieeexplore.ieee.org/document/10562157" },
      { label: "GitHub Link", link: "https://github.com/UVA-DSA/EMS-Pipeline/tree/demo" },
    ],
  },

  {
    image: "/images/projects/ResilientMedDevices/OpenAPS2.png",
    title: "Resilience-by-Construction Design of Medical Devices",
    description:
      "This project explores the development of generalized, model-based fault-tolerance techniques grounded in the principle of resilience-by-construction to guide the design of next-generation medical devices. Advances in low-power, highly integrated technologies have opened enormous opportunities for deploying implantable medical devices (IMDs) and body area networks (BANs). At the same time, rising device complexity, strict resource constraints, and shrinking time-to-market have introduced critical challenges for ensuring reliability, security, and patient safety. By embedding resilience directly into the design process, this work aims to create medical devices that are robust, dependable, and secure by construction.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
    ],
  },
  {
    image: "/images/projects/AutonomousVehicles/OpenPilot2.png",
    title: "Dependable and Secure Artificial Intelligence for Autonomous Vehicles",
    description:
      "This project focuses on the design and validation of resilient autonomous systems that depend on artificial intelligence and machine learning for perception, control, and decision-making. As these systems increasingly underpin safety-critical cyber-physical applications such as autonomous vehicles, ensuring their reliability, security, and trustworthiness has become essential. Our work emphasizes the development of safety monitoring and mitigation mechanisms, as well as rigorous testing and certification techniques tailored for machine learning–based components, with the goal of enabling dependable deployment of autonomous CPS.",
    resources: [
      { label: "Article", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
      { label: "GitHub Link", link: "https://homa-alem.github.io/research.html#robotic-surgery" },
      { label: "Datasets", link: "https://homa-alem.github.io/papers/DSN_2016.pdf" },
    ],
  },
];

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Projects() {
  return (
    <section className="projectsSection">

      <div className="heroImageWrapper">
        <Image
          src={heroImage}
          alt="UVA Projects"
          className="heroImage"
          priority
        />
      </div>

      <p className="subtitle">
        At UVA Dependable Systems & Analytics group, we build the next-generation of <b>Resilient Cyber-Physical Systems</b>.  
        We take a multidisciplinary approach to <b>safety and security assurance</b> of CPS, with applications to medical devices, surgical robots, and autonomous systems. By leveraging techniques from <b>dependable computing and fault-tolerance, machine learning, and real-time systems</b>, we develop integrated model and data-driven methods, realistic testbeds and simulators, and datasets to analyze incidents, assess resilience to faults and attacks, and enable runtime monitoring for detection and mitigation of adverse events.   
      </p>

      {/* Top bullet list */}
      <ul className="navList">
        {projects.map((p) => {
          const id = slug(p.title);
          return (
            <li key={id} className="navItem">
              <a className="navLink" href={`#${id}`}>
                {p.title}
              </a>
            </li>
          );
        })}
      </ul>

            <div className="sponsorRow" aria-label="Project sponsors">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="sponsorLogoWrap">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={150}
              height={80}
              className="sponsorLogo"
              priority={false}
            />
          </div>
        ))}
      </div>

      <hr className="hr" />

      {/* Banner notice */}
      {/* <div className="banner">
        {bannerNotice}
      </div> */}

      <hr className="hr" />

      {/* Stacked projects */}
      <div className="stack">
        {projects.map((p) => {
          const id = slug(p.title);
          return (
            <section key={id} id={id} className="project">
              <header className="header">
                <h2 className="projectTitle">{p.title}</h2>
              </header>

              <div className="body">
                <div className="imageWrap">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={300}
                    priority={false}
                    className="image"
                  />
                </div>

                <div className="desc">{p.description}</div>

                <ul className="resources">
                  {p.resources.map((r) => (
                    <li key={r.label}>
                      <a className="resourceLink" href={r.link} target="_blank" rel="noreferrer">
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider between projects */}
              <hr className="hr" />
            </section>
          );
        })}
      </div>
    </section>
  );
}
