import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProjectCardProps {
  image: string;
  title?: string;
  description?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "grey.800",
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
