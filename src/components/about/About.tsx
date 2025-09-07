"use client";

import { useState, SyntheticEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CloseIcon from "@mui/icons-material/Close";

const ACCENT = "#FEF8C4";
type ModalKey = null | "experience" | "education" | "hobbies";

const techChipSx = {
  borderColor: ACCENT,
  color: ACCENT,
  "&:hover": { borderColor: ACCENT },
};

export default function About() {
  const [tab, setTab] = useState<number | false>(false);
  const [open, setOpen] = useState<ModalKey>(null);

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setOpen(
      newValue === 0 ? "experience" : newValue === 1 ? "education" : "hobbies"
    );
  };

  const openExperience = () => {
    setTab(0);
    setOpen("experience");
  };
  const openEducation = () => {
    setTab(1);
    setOpen("education");
  };
  const openHobbies = () => {
    setTab(2);
    setOpen("hobbies");
  };

  const close = () => setOpen(null);

  const hobbyImages = [
    "/hobbies/draw_1.jpg",
    "/hobbies/draw_2.jpg",
    "/hobbies/draw_3.jpg",
    "/hobbies/draw_4.jpg",
  ];

  const paperSx = {
    background: "linear-gradient(180deg,#0f1318 0%,#0b0e12 100%)",
    border: `1px solid rgba(100,255,218,0.12)`,
    color: "#ECECEC",
  };

  const titleSx = { display: "flex", alignItems: "center", gap: 1.2, pr: 6 };

  const CloseX = (
    <IconButton
      aria-label="Close"
      onClick={close}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: "rgba(255,255,255,0.72)",
        "&:hover": { color: ACCENT },
      }}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-16">
      <div className="text-3xl font-bold text-center">About Me</div>
      <div className="opacity-80 text-center">
        Full-Stack Engineer | Problem Solver | Tech Enthusiast
      </div>

      {/* Social Icons */}
      <div className="flex justify-between items-center gap-2">
        <IconButton
          component={Link}
          href="https://github.com/saumya673"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: "black" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/saumya0512"
          target="_blank"
          aria-label="LinkedIn"
          sx={{ color: "black" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://leetcode.com/u/saumya_19112091"
          target="_blank"
          aria-label="LeetCode"
          sx={{ color: "black" }}
        >
          <CodeIcon />
        </IconButton>
      </div>

      {/* Tabs */}
      <Box sx={{ width: "100%", maxWidth: 920, mt: 1 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="About sections"
          sx={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 2,
            "& .MuiTabs-indicator": {
              backgroundColor: ACCENT,
              height: 3,
              borderRadius: 3,
            },
            "& .MuiTab-root": {
              color: "rgba(255,255,255,0.7)",
              textTransform: "none",
              fontWeight: 600,
            },
            "& .Mui-selected": { color: `${ACCENT} !important` },
            background:
              "linear-gradient(180deg, rgba(21,24,29,.9) 0%, rgba(14,16,19,.9) 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Tab
            label="Experience"
            icon={<WorkIcon fontSize="small" />}
            iconPosition="start"
            onClick={openExperience}
          />
          <Tab
            label="Education"
            icon={<SchoolIcon fontSize="small" />}
            iconPosition="start"
            onClick={openEducation}
          />
          <Tab
            label="Hobbies"
            icon={<BrushIcon fontSize="small" />}
            iconPosition="start"
            onClick={openHobbies}
          />
        </Tabs>
      </Box>

      {/* EXPERIENCE */}
      <Dialog
        open={open === "experience"}
        onClose={close}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: paperSx }}
      >
        <DialogTitle sx={titleSx}>
          <WorkIcon sx={{ color: ACCENT }} />
          <span style={{ color: "white" }}>Professional Experience</span>
          {CloseX}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: "grid", gap: 1.5, mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Full-Stack Engineer
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Tata Consultancy Services
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, opacity: 0.9 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2">Sep 2023 – Present</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">Hyderabad</Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

            <Typography variant="subtitle1" sx={{ color: ACCENT, mt: 1 }}>
              Frontend Developer (StockMate)
            </Typography>
            <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>
                Built a responsive frontend for stock mutations and positions in
                TypeScript
              </li>
              <li>Implemented API routes and a BFF layer in Next.js</li>
              <li>Added SSO (Azure AD, OAuth 2.0/OIDC) with NextAuth v4</li>
              <li>
                Agentic chatbot with LangChain/LangGraph & Azure OpenAI; ~80%
                faster lookups
              </li>
              <li>Used Zod for runtime validation to reduce UI/API errors</li>
            </ul>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {[
                "NextJS",
                "TypeScript",
                "TailwindCSS",
                "Zustand",
                "Azure",
                "LangChain",
                "Vitest",
              ].map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  variant="outlined"
                  sx={techChipSx}
                />
              ))}
            </Box>

            <Typography variant="subtitle1" sx={{ color: ACCENT, mt: 3 }}>
              Frontend Developer (Spoggie 2.0)
            </Typography>
            <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
              <li>Interactive multi-step workflow UI (Jotai)</li>
              <li>BFF in Next.js/TypeScript with auth integration</li>
              <li>SSO using OIDC/OAuth 2.0 with Azure</li>
              <li>Migrated desktop → Web (~70% usage lift)</li>
              <li>~80% coverage, &lt;3% duplication with SonarQube</li>
            </ul>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {[
                "NextJS",
                "TypeScript",
                "Tailwind CSS",
                "Jotai",
                "Azure",
                "SonarQube",
              ].map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  variant="outlined"
                  sx={techChipSx}
                />
              ))}
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* EDUCATION */}
      <Dialog
        open={open === "education"}
        onClose={close}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: paperSx }}
      >
        <DialogTitle sx={titleSx}>
          <SchoolIcon sx={{ color: ACCENT }} />
          <span style={{ color: "white" }}>Education</span>
          {CloseX}
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: "grid", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Bachelor of Technology
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  NIT Jalandhar
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, opacity: 0.9 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2">Aug 2019 – Jul 2023</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <EmojiEventsIcon fontSize="small" />
                  <Typography variant="body2">CGPA: 7.8</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  AISSCE- XII
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Shivalik Public School
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, opacity: 0.9 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2">2017-2018</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                  <EmojiEventsIcon fontSize="small" />
                  <Typography variant="body2">Percent - 89.6%</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* HOBBIES */}
      <Dialog
        open={open === "hobbies"}
        onClose={close}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: paperSx }}
      >
        <DialogTitle sx={titleSx}>
          <BrushIcon sx={{ color: ACCENT }} />
          <span style={{ color: "white" }}>Hobbies</span>
          {CloseX}
        </DialogTitle>
        <DialogContent dividers>
          <div className="space-y-3 text-sm opacity-90">
            <div>
              <strong style={{ color: ACCENT }}>Dance:</strong> I enjoy dancing
              and exploring new choreographies, great way to unwind and stay
              creative.
            </div>
            <div>
              <strong style={{ color: ACCENT }}>Painting:</strong> I love
              painting in my free time. A few of my artworks:
            </div>

            {/* Uniform square grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              {hobbyImages.map((src, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 10px 18px rgba(0,0,0,.35)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Painting ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </Box>
              ))}
            </div>

            <div>
              <strong style={{ color: ACCENT }}>
                Volunteering (Prayas NGO):
              </strong>{" "}
              I volunteered with Prayas NGO, where children from underprivileged
              backgrounds came to our college to study. I helped conduct{" "}
              <em>art classes</em> and assisted students with drawing and
              painting basics.
            </div>
          </div>

          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.08)" }} />

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["Dance", "Sketching", "Acrylics", "Community Service"].map(
              (t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  variant="outlined"
                  sx={techChipSx}
                />
              )
            )}
            <Chip
              icon={<VolunteerActivismIcon sx={{ color: ACCENT }} />}
              label="Prayas NGO"
              size="small"
              variant="outlined"
              sx={techChipSx}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
