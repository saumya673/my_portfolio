"use client";

import { useState, SyntheticEvent } from "react";
import Link from "next/link";
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
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Image from "next/image";

const ACCENT = "#64ffda";

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-tabpanel-${index}`}
      aria-labelledby={`about-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `about-tabpanel-${index}`,
  };
}

const techChipSx = {
  borderColor: ACCENT,
  color: ACCENT,
  "&:hover": { borderColor: ACCENT },
};

export default function About() {
  const [value, setValue] = useState(0);

  const handleChange = (_e: SyntheticEvent, newValue: number) =>
    setValue(newValue);

  const hobbyImages = [
    "/hobbies/draw_1.jpg",
    "/hobbies/draw_2.jpg",
    "/hobbies/draw_3.jpg",
    "/hobbies/draw_4.jpg",
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-16">
      {/* Heading + Tagline */}
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

      {/* Tabs Nav (below icons) */}
      <Box sx={{ width: "100%", maxWidth: 920, mt: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="About tabs"
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
            "& .Mui-selected": { color: ACCENT + " !important" },
            background:
              "linear-gradient(180deg, rgba(21,24,29,.9) 0%, rgba(14,16,19,.9) 100%)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Tab
            label="Experience"
            icon={<WorkIcon fontSize="small" />}
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            label="Education"
            icon={<SchoolIcon fontSize="small" />}
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            label="Hobbies"
            icon={<BrushIcon fontSize="small" />}
            iconPosition="start"
            {...a11yProps(2)}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          {/* Experience */}
          <Box
            sx={{
              mt: 2,
              p: 3,
              borderRadius: 2,
              background: "linear-gradient(180deg,#0f1318 0%,#0b0e12 100%)",
              border: `1px solid rgba(100,255,218,0.12)`,
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}
            >
              <WorkIcon sx={{ color: ACCENT }} />
              <span style={{ color: "white" }}>Professional Experience</span>
            </Typography>

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
                  Built a responsive frontend for stock mutations and positions
                  in TypeScript
                </li>
                <li>Implemented API routes and a BFF layer in Next.js</li>
                <li>Added SSO (Azure AD, OAuth 2.0/OIDC) with NextAuth v4</li>
                <li>
                  Agentic chatbot with LangChain/LangGraph & Azure OpenAI;
                  reduced median lookup time by ~80%
                </li>
                <li>
                  Used Zod schemas for runtime validation to cut UI/API errors
                </li>
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
                <li>Interactive multi-step workflow UI; state via Jotai</li>
                <li>BFF in Next.js/TypeScript with auth integration</li>
                <li>SSO using OIDC/OAuth 2.0 with Azure</li>
                <li>Migrated Spoggie 1.0 desktop → Web (≈70% usage lift)</li>
                <li>
                  Maintained ~80% coverage; &lt;3% duplication with SonarQube
                </li>
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
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* Education */}
          <Box
            sx={{
              mt: 2,
              p: 3,
              borderRadius: 2,
              background: "linear-gradient(180deg,#0f1318 0%,#0b0e12 100%)",
              border: `1px solid rgba(100,255,218,0.12)`,
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}
            >
              <SchoolIcon sx={{ color: ACCENT }} />
              <span style={{ color: "white" }}>Education</span>
            </Typography>

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
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          {/* Hobbies */}
          <Box
            sx={{
              mt: 2,
              p: 3,
              borderRadius: 2,
              background: "linear-gradient(180deg,#0f1318 0%,#0b0e12 100%)",
              border: `1px solid rgba(100,255,218,0.12)`,
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}
            >
              <BrushIcon sx={{ color: ACCENT }} />
              <span style={{ color: "white" }}>Hobbies</span>
            </Typography>

            <div className="space-y-3 text-sm opacity-90">
              <div>
                <strong style={{ color: ACCENT }}>Dance:</strong> I enjoy
                dancing and exploring new choreographies, great way to unwind
                and stay creative.
              </div>
              <div>
                <strong style={{ color: ACCENT }}>Painting:</strong> I love
                painting in my free time. A few of my artworks:
              </div>

              {/* Painting grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                {hobbyImages.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    width={200}
                    height={200}
                    alt={`Painting ${i + 1}`}
                    loading="lazy"
                    className="rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  />
                ))}
              </div>

              <div>
                <strong style={{ color: ACCENT }}>
                  Volunteering (Prayas NGO):
                </strong>{" "}
                I volunteered with Prayas NGO, where children from
                underprivileged backgrounds came to our college to study. I
                helped conduct <em>art classes</em> and assisted students with
                drawing and painting basics.
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
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
