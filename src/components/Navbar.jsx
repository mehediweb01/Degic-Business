import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();
  const MenuItems = ["About", "Service", "Projects", "contacts"];
  const isMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid #fafafa",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
              >
                <Menu />
              </IconButton>
            </>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/logo.png" alt="logo" />
              </Typography>
              {MenuItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  sx={{ fontSize: "16px", fontFamily: "Inter", lineHeight: "19.36px" }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: "#2AB691",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  "&:hover": {
                    backgroundColor: "#2AB666",
                    color: "white",
                  },
                }}
              >
                Sing up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {MenuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText
                sx={{
                  cursor: "pointer",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  lineHeight: "19.36px",
                }}
              >
                {item}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem button>
            <ListItemButton
              sx={{
                cursor: "pointer",
                color: "#2AB691",
                backgroundColor: "white",
                borderRadius: "10px",
                fontSize: "16px",
                fontFamily: "Inter",
                "&:hover": {
                  backgroundColor: "#2AB666",
                  color: "white",
                },
              }}
            >
              sign up
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
