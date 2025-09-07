"use client";

import { useEffect, useMemo, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grow from "@mui/material/Grow";
import DownloadFileButton from "../button/Button";
import { keyframes } from "@mui/system";

const growY = keyframes`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`;
const growX = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;
const slideIn = keyframes`
  from { transform: translateX(48px); opacity: 0; }
  to   { transform: translateX(0);   opacity: 1; }
`;
const revealUp = keyframes`
  from { transform: translateY(10px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

export default function HomeHero() {
  const DURATION = 900; // ms
  const EASE = "ease-out";
  const OVER = 16; // px overshoot so borders cross instead of joining

  // Respect reduced motion
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduced(mq.matches);
      const onChange = () => setReduced(mq.matches);
      mq.addEventListener?.("change", onChange);
      return () => mq.removeEventListener?.("change", onChange);
    }
  }, []);

  const chips: string[] = useMemo(
    () => [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "Azure",
      "Kubernetes",
      "CI/CD",
    ],
    []
  );

  return (
    <Box
      component="section"
      className="flex flex-col justify-center items-center gap-6 md:gap-8 mt-16"
    >
      {/* Frame + Avatar */}
      <Box
        sx={{
          position: "relative",
          width: 240,
          height: 240,
          overflow: "visible",
          "@media (max-width:420px)": { width: 210, height: 210 },
        }}
      >
        {/* Left border */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: `-${OVER}px`,
            width: 8,
            height: `calc(100% + ${OVER * 2}px)`,
            bgcolor: "black",
            borderRadius: 2,
            transformOrigin: "top",
            animation: `${growY} ${DURATION}ms ${EASE} forwards`,
            zIndex: 2,
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
        {/* Bottom border */}
        <Box
          sx={{
            position: "absolute",
            left: `-${OVER}px`,
            bottom: 0,
            height: 8,
            width: `calc(100% + ${OVER * 2}px)`,
            bgcolor: "black",
            borderRadius: 2,
            transformOrigin: "left",
            animation: `${growX} ${DURATION}ms ${EASE} forwards`,
            zIndex: 1,
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />
        {/* Avatar */}
        <Avatar
          alt="Saumya"
          src="/profile/profile.jpg"
          variant="rounded"
          sx={{
            position: "absolute",
            right: 35,
            bottom: 35,
            width: { xs: 140, md: 160 },
            height: { xs: 180, md: 200 },
            boxShadow:
              "0 10px 25px rgba(0,0,0,.55), 0 15px 30px rgba(100, 255, 218, 0.08)",
            border: "4px solid rgba(255,255,255,0.06)",
            animation: `${slideIn} ${DURATION}ms ${EASE} both`,
            zIndex: 3,
            "& img": { objectFit: "cover" },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
              opacity: 1,
              transform: "none",
            },
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        component="h1"
        sx={{
          fontWeight: 800,
          letterSpacing: 0.5,
          fontSize: { xs: "1.5rem", md: "2rem" },
          animation: `${revealUp} 600ms ${EASE} ${DURATION}ms both`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      >
        Full-Stack Engineer
      </Typography>

      {/* Tagline */}
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          maxWidth: 900,
          opacity: 0.95,
          padding: "0 12px",
        }}
      >
        I build fast, accessible UIs with React/Next.js & TypeScript, and
        cloud-ready APIs with Node/FastAPI—focused on performance, DX, and clean
        UX.
      </Typography>

      {/* Chips: black border + warm hover */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          mt: 0.5,
          padding: "0 12px",
        }}
      >
        {chips.map((label, i) => {
          const delay = 160 + i * 80;
          const duration = 360;
          return (
            <Grow
              key={label}
              in={mounted && !reduced}
              style={{
                transformOrigin: "center bottom",
                transitionDelay: `${delay}ms`,
              }}
              timeout={duration}
            >
              <Chip
                label={label}
                size="small"
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 0.2,
                  color: "#000",
                  borderColor: "#000",
                  transition:
                    "background-color 200ms ease, transform 120ms ease, color 120ms ease",
                  "&:hover": {
                    bgcolor: "#FEF8C4",
                    borderColor: "#000",
                    color: "#000",
                  },
                  "&:active": { transform: "translateY(1px)" },
                  "&.Mui-focusVisible": {
                    boxShadow: "0 0 0 3px rgba(0,0,0,0.25)",
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                  },
                }}
              />
            </Grow>
          );
        })}
      </Box>

      <DownloadFileButton
        title="Resume"
        filepath="/resume/saumya_resume.pdf"
        name="Saumya_resume"
      />
    </Box>
  );
}
