"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  image: string;
  title?: string;
  description?: string;
  githubLink?: string;
  deployedLink?: string;
  internalProject?: boolean;
  expanded: boolean;
  onToggle: () => void;
}

const DESCRIPTION_THRESHOLD = 100;

export default function ProjectCard({
  image,
  title,
  description = "",
  githubLink,
  deployedLink,
  internalProject,
  expanded,
  onToggle,
}: ProjectCardProps) {
  const isLongDescription = description.length > DESCRIPTION_THRESHOLD;

  const displayedDescription =
    !expanded && isLongDescription
      ? description.substring(0, DESCRIPTION_THRESHOLD) + "..."
      : description;

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={title || "Project Image"}
        height="140"
        image={image}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <div className="flex items-start justify-between gap-2">
          <Typography gutterBottom variant="h6" component="h3">
            {title}
          </Typography>
          {internalProject && (
            <Chip
              label="Internal"
              size="small"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            />
          )}
        </div>

        <Typography variant="body2" sx={{ color: "white" }}>
          {displayedDescription}
        </Typography>

        {isLongDescription && (
          <Button
            type="button"
            size="small"
            onClick={onToggle}
            sx={{ mt: 1, p: 0, color: "#FEF8C4" }}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
        )}
      </CardContent>

      <CardActions sx={{ mt: "auto" }}>
        {!internalProject && (
          <>
            <IconButton
              component={Link}
              href={githubLink || "#"}
              target="_blank"
              aria-label="GitHub"
              sx={{ color: "grey.100" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href={deployedLink || "#"}
              target="_blank"
              aria-label="Launch"
              sx={{ color: "grey.100" }}
            >
              <LaunchIcon />
            </IconButton>
          </>
        )}

        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
