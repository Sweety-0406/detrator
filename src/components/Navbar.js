import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: "#1E293B", padding: "8px 16px",}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "#FACC15", fontWeight: "bold" }}>  
          Brand Name
        </Typography>

        
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            border: "1px solid #94A3B8",  
            borderRadius: "8px",
            backgroundColor: "#334155",  
            padding: "2px 8px",
            color: "#E2E8F0",
          }}
        >
          <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1, color: "white" }} />
          <IconButton sx={{ color: "#FACC15" }}>
            <SearchIcon />
          </IconButton>
        </Box>

        
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#3B82F6", width: 36, height: 36, marginRight: 1 }} />
          <Typography variant="body1" sx={{ color: "#E2E8F0", display: { xs: "none", md: "block" } }}>
            John
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
