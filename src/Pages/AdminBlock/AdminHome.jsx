import React from "react";
import { Box,Stack } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import Dashboard from "./Dashboard";

const AdminHome = () => {
  return (
    <Box>
      <AdminNavbar />
      <Stack>
        <AdminSidebar />
        <Dashboard />
      </Stack>
    </Box>
  );
};

export default AdminHome;
