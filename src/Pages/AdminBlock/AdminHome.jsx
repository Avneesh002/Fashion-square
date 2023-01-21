import React from "react";
import { Box} from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import Dashboard from "./Dashboard";

const AdminHome = () => {
  return (
    <Box>
      <AdminNavbar />
      <Dashboard />
    </Box>
  );
};

export default AdminHome;
