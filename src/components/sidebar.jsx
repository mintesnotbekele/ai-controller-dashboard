// components/Sidebar.js
import React, { useState } from 'react';
import { Box, Button, Collapse, Flex, Icon, Link } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaHome, FaCog, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <Box
      w={isOpen ? '250px' : '80px'}
      bg="gray.800"
      color="white"
      h="100vh"
      transition="width 0.3s ease"
    >
      <Flex align="center" justify="space-between" borderBottom="1px solid white" p="4">
        <Box>
          {isOpen ? (
            <Button onClick={toggleSidebar} leftIcon={<Icon as={FaChevronLeft} />} variant="ghost" colorScheme="whiteAlpha">
              
            </Button>
          ) : (
            <><Button onClick={toggleSidebar} leftIcon={<Icon as={FaChevronRight} />} variant="ghost" colorScheme="whiteAlpha">
              
            </Button>
            <Link fontSize="lg" my="2" display="flex" alignItems="center">
            <Icon as={FaHome} mr="2" />
          </Link>
        
            </>
          )}
        </Box>
        <Box>
          <Link fontSize="2xl">Dashboard</Link>
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p="4">
          <Link fontSize="lg" my="2" display="flex" alignItems="center">
            <Icon as={FaHome} mr="2" /> {isOpen && "Full List"}
          </Link>
        </Box>
      </Collapse>

   
    </Box>
  );
};

export default Sidebar;
