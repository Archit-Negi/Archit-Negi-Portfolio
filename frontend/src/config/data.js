import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiTypescript, SiPostman, SiVite, SiOpenai } from 'react-icons/si';

export const personalData = {
  name: "Archit Negi",
  title: "Full Stack MERN Developer",
  portfolioName: "Negixis",
  location: "Uttarakhand, India",
  email: "architnegi2@gmail.com",
  linkedin: "https://www.linkedin.com/in/archit-negi-",
  github: "https://github.com/Archit-Negi",
  about: "I build modern, scalable, and visually engaging web applications. Focused on UI/UX with the MERN stack.",
};

export const skills = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
  { name: "ChatGPT", icon: SiOpenai, color: "#10a37f" },
];

export const projects = [
  {
    title: "AlumBridge : Alumni-Student Networking Platform",
    description: "A comprehensive Alumni-Student Interaction Platform designed to bridge the gap between graduates and current students. Features a referral system, admin/student/alumni dashboards, and real-time networking.",
    image: "/Archit-Negi-Portfolio/projects/alumbridge.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Archit-Negi",
    demo: "#"
  },
  {
    title: "AutoAttend : AI Student Attendance System",
    description: "An automated attendance management solution utilizing AI for seamless tracking. Built to handle large data sets and provide insightful analytics for educational institutions.",
    image: "/Archit-Negi-Portfolio/projects/autoattend.png",
    tags: ["MERN Stack", "Python", "AI/ML", "REST APIs"],
    github: "https://github.com/Archit-Negi",
    demo: "#"
  },
  {
    title: "CPU Scheduling and Memory Management Simulator",
    description: "A comprehensive, industry-grade web-based platform designed to visualize and analyze the complex interplay between CPU scheduling and memory management. Features integrated OS emulation, dynamic scheduling suite (FCFS, SJF, Round Robin), and real-time fragmentation visualization with a modern glassmorphic UI.",
    image: "/Archit-Negi-Portfolio/projects/cpu_scheduler.png",
    tags: ["Python", "Flask", "JavaScript", "OS Algorithms"],
    github: "https://github.com/Archit-Negi/Advanced-OS-Scheduling-Memory-Emulator",
    demo: "#"
  }
];

export const socialLinks = [
  { name: "GitHub", url: personalData.github, icon: FaGithub },
  { name: "LinkedIn", url: personalData.linkedin, icon: FaLinkedin },
  { name: "Email", url: `mailto:${personalData.email}`, icon: FaEnvelope }
];
