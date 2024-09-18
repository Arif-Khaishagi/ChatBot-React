import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import FormInput from "../components/FormInput";
import Tabs from "../components/Tabs";
import { Box } from "@mui/material";
// import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: "280px",
          background: "var(--color-white)",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Tabs />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: { xs: 0, sm: "20px" },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: { xs: 0, sm: "280px" },
            right: 0,
            zIndex: 1000,
            backgroundColor: "var(--color-white)",
          }}
        >
          <Navbar />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            paddingTop: "100px",
            paddingBottom: "100px",
            marginLeft: { xs: 0, sm: "280px" },
          }}
        >
          <main>
            <Outlet />
          </main>
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: { xs: 0, sm: "280px" },
            right: 0,
            zIndex: 1000,
            backgroundColor: "var(--color-white)",
          }}
        >
          <FormInput />

    {/* <Footer /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
