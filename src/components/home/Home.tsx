import Avatar from "@mui/material/Avatar";
import DownloadFileButton from "../button/Button";

export default function ImageAvatars() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-16">
      <Avatar
        alt="Saumya"
        src="/profile/profile.jpg"
        sx={{ width: 150, height: 150 }}
      />
      <div className="text-sm md:text-xl text-center font-semibold">
        Full-Stack Engineer crafting sleek UIs and robust backends with React,
        Next.js, TypeScript, Tailwind, and FastAPI. <br />
        Turning ideas into scalable, cloud-ready solutions with a focus on
        performance and great user experiences.
      </div>
      <DownloadFileButton
        title="Resume"
        filepath="/resume/saumya_resume.pdf"
        name="Saumya_resume"
      />
    </div>
  );
}
