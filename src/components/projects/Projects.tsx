"use client";

import { useState } from "react";
import ProjectCard from "@/components/card/ProjectCard";
import aiJobMentor from "@/assets/images/cards/ai_job_mentor.jpeg";
import planogramGenerator from "@/assets/images/cards/planogram_generator.jpeg";
import stockAnalysis from "@/assets/images/cards/stock_analysis.jpeg";
import toDoApp from "@/assets/images/cards/to_do_app.jpeg";

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  internalProject: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: "ai-job-mentor",
      title: "AI Job Mentor",
      description:
        "A mentor to help in getting a job. lorem ipsum lorem ipsum lorem ipsum Below is an updated version of your ProjectCard component that fixes the card actions at the bottom and toggles a View More option when the description is long:",
      link: "https://aijobmentor.vercel.app/",
      image: aiJobMentor.src,
      internalProject: false,
    },
    {
      id: "planogram-generator",
      title: "Planogram Generator",
      description:
        "Generates planograms for retail stores. lorem ipsum lorem ipsum lorem ipsum Below is an updated version of your ProjectCard component that fixes the card actions at the bottom and toggles a View More option when the description is long:",
      link: "",
      image: planogramGenerator.src,
      internalProject: true,
    },
    {
      id: "stockmate",
      title: "Stockmate",
      description: "Analyzes stock market trends",
      link: "",
      image: stockAnalysis.src,
      internalProject: true,
    },
    {
      id: "todo-app",
      title: "To Do App",
      description: "A simple to-do list application",
      link: "https://todo-app-inky-seven.vercel.app/",
      image: toDoApp.src,
      internalProject: false,
    },
  ];
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          id={p.id}
          image={p.image}
          title={p.title}
          description={p.description}
          internalProject={p.internalProject}
          expanded={!!expandedMap[p.id]}
          onToggle={() => handleToggle(p.id)}
        />
      ))}
    </div>
  );
};

export default Projects;
