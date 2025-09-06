"use client";

import { useState } from "react";
import ProjectCard from "@/components/card/ProjectCard";
import { projects } from "./ProjectData";

const Projects = () => {
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
          githubLink={p.githubLink}
          deployedLink={p.deployedLink}
          internalProject={p.internalProject}
          expanded={!!expandedMap[p.id]}
          onToggle={() => handleToggle(p.id)}
        />
      ))}
    </div>
  );
};

export default Projects;
