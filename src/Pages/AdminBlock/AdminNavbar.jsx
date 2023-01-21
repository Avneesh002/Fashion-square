import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from './AdminSidebar'
import "./Style/navbar.css";


const AdminNavbar = () => {
  return (
    <Flex px={5} className="nav">
      <Box display="flex" gap={5} justifyContent="space-around">
       <AdminSidebar />
      </Box>
      <Box className="skinstore">
        {/* <Link to="/" >Lime Store</Link> */}
        Lime Store
      </Box>
      <Box display="flex" gap={5} justifyContent="space-around">
       Profile
      </Box>
    </Flex>
  )
}

export default AdminNavbar
