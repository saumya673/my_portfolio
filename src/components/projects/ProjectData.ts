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
        "AI-powered platform for personalized job matching and interview prep. Features an interactive dashboard with weekly-updated skill and salary trends, ATS-optimized customizable content, role-specific Q&A with performance tracking, AI-driven improvement tips, and auto-generated drafts from job descriptions.",
      githubLink: "https://github.com/saumya673/ai-job-mentor",
      deployedLink: "https://nextpesha.vercel.app/",
      image: aiJobMentor.src,
      internalProject: false,
    },
      {
      id: "todo-app",
      title: "To Do App",
      description: "Simple task management application with a built-in chatbot to quickly add tasks through natural conversation.",
      githubLink: "https://github.com/saumya673/nextjs-todo",
      deployedLink: "https://saumya-nextjs-todo.vercel.app",
      image: toDoApp.src,
      internalProject: false,
    },
    {
      id: "stockmate",
      title: "Stockmate",
      description: "Application for tracking stock mutations and positions with a responsive NextJS frontend and seamless API integration via a BFF layer. Provides secure Azure AD authentication with automated onboarding, robust validation using Zod, and efficient global state management with Zustand. Includes an AI-driven chatbot for quick stock data lookups. Ensures reliability with strong unit and integration test coverage.",
      image: stockAnalysis.src,
      internalProject: true,
    },
    {
      id: "planogram-generator",
      title: "Planogram Generator",
      description:
        "Migrated from desktop to web, enabling an interactive multi-step workflow with real-time status updates and parallel session handling. Built with a Kotlin backend and BFF in NextJS, supporting Excel generation and smooth user actions. The migration streamlined planogram creation and boosted usage by 70%.",
      image: planogramGenerator.src,
      internalProject: true,
    },
  ];