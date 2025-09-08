"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Saumya
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{
                  textAlign: "center",
                  ...(active && { bgcolor: "action.selected" }),
                }}
                aria-current={active ? "page" : undefined}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Saumya
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#fff",
                    fontWeight: active ? 700 : 400,
                    borderBottom: active
                      ? "2px solid #fff"
                      : "2px solid transparent",
                    borderRadius: 0,
                    mx: 0.5,
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
