import aiJobMentor from "@/assets/images/cards/ai_job_mentor.jpeg";
import planogramGenerator from "@/assets/images/cards/planogram_generator.jpeg";
import stockAnalysis from "@/assets/images/cards/stock_analysis.jpeg";
import toDoApp from "@/assets/images/cards/to_do_app.jpeg";

type Project = {
  id: string;
  title: string;
  description: string;
  githubLink?: string;
  deployedLink?: string;
  image: string;
  internalProject: boolean;
};


export const projects: Project[] = [
    {
      id: "ai-job-mentor",
      title: "AI Job Mentor",
      description:
        "A mentor to help in getting a job. lorem ipsum lorem ipsum lorem ipsum Below is an updated version of your ProjectCard component that fixes the card actions at the bottom and toggles a View More option when the description is long:",
      githubLink: "https://github.com/saumya673/ai-job-mentor",
      deployedLink: "https://nextpesha.vercel.app/",
      image: aiJobMentor.src,
      internalProject: false,
    },
    {
      id: "planogram-generator",
      title: "Planogram Generator",
      description:
        "Generates planograms for retail stores. lorem ipsum lorem ipsum lorem ipsum Below is an updated version of your ProjectCard component that fixes the card actions at the bottom and toggles a View More option when the description is long:",
      image: planogramGenerator.src,
      internalProject: true,
    },
    {
      id: "stockmate",
      title: "Stockmate",
      description: "Analyzes stock market trends",
      image: stockAnalysis.src,
      internalProject: true,
    },
    {
      id: "todo-app",
      title: "To Do App",
      description: "A simple to-do list application",
      githubLink: "https://github.com/saumya673/nextjs-todo",
      deployedLink: "https://saumya-nextjs-todo.vercel.app",
      image: toDoApp.src,
      internalProject: false,
    },
  ];