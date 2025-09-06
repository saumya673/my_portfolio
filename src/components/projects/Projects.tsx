import ProjectCard from "@/components/card/ProjectCard";
import aiJobMentor from "@/assets/images/cards/ai_job_mentor.jpeg";

const Projects = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <ProjectCard
        image={aiJobMentor.src}
        title="AI JOB MENTOR"
        description="A mentor to help in getting a job"
      />
      <ProjectCard image={aiJobMentor.src} title="AI JOB MENTOR" />
      <ProjectCard image={aiJobMentor.src} title="AI JOB MENTOR" />
    </div>
  );
};

export default Projects;
