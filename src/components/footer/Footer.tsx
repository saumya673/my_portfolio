"use client";

import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "grey.900", color: "grey.100", mt: 6 }}
    >
      <Container sx={{ py: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Saumya • All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="github.com/saumya673" arrow>
              <IconButton
                component={Link}
                href="https://github.com/saumya673"
                target="_blank"
                aria-label="GitHub"
                sx={{ color: "grey.100" }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="linkedin.com/in/saumya0512" arrow>
              <IconButton
                component={Link}
                href="https://linkedin.com/in/saumya0512"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: "grey.100" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="saumyasinha673@gmail.com" arrow>
              <IconButton
                component={Link}
                href="mailto:saumyasinha673@gmail.com"
                aria-label="Email"
                sx={{ color: "grey.100" }}
              >
                <MailOutlineIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
