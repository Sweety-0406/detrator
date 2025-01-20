"use client";

import { Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Navbar from "./Navbar";

const ResponsiveLayout = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#F1F5F9", height: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item size={{xs:12, md:6, lg:6}} >
            <Box
              sx={{
                border: "1px solid #94A3B8",
                height: "400px",
                bgcolor: "#CBD5E1",  
                borderRadius: "8px",
              }}
            />
          </Grid>

          <Grid item size={{xs:12, md:6, lg:6}} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                border: "1px solid #94A3B8",
                height: "400px",
                bgcolor: "#CBD5E1",
                borderRadius: "8px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResponsiveLayout;
