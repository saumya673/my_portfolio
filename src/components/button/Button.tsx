import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface DownloadFileButtonProps {
  title: string;
  filepath: string;
  name?: string;
}

export default function DownloadFileButton({
  title,
  filepath,
  name,
}: DownloadFileButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FileDownloadIcon />}
      href={filepath}
      download={`${name}.pdf`}
      sx={{ backgroundColor: "black" }}
    >
      {title}
    </Button>
  );
}
