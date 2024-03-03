import React from 'react';
import { useEffect , useState} from 'react';
import { ChakraProvider, Box, Flex, IconButton,Text, useColorMode, useColorModeValue, Switch, Badge } from '@chakra-ui/react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import Sidebar from '../../../components/sidebar';
import axios from 'axios';
import RenderTable from '../../rendertable';
import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();
const AdminLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [data, setData] = useState([]);
  const iconColor = useColorModeValue('black', 'white');
  const getData=async ()=>{
    const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://api.steamlined.solutions/api/v1',
    });
    
    instance.get('contacts?limit=10')
      .then(response => {
          setData(response.data.data)
          console.log(response.data.data);
        // Handle the response
        return response
      })
      .catch(error => {
        // Handle errors
      });


}
  useEffect(()=>{
  getData();

  },[])

  const TimestampToDate = ({ timestamp }) => {
    const convertTimestampToDate = (timestamp) => {
      const timestampInSeconds = timestamp;
      const timestampInMilliseconds = timestampInSeconds * 1000;
      const date = new Date(timestampInMilliseconds);
      return date.toUTCString(); // You can modify the formatting as needed
    };
  
    return <span>{convertTimestampToDate(timestamp)}</span>;
  };

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => 'Name',
      cell: (info) => (
        <Text >{info.getValue()} </Text>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: () => 'Email',
      cell: (info) => (
        <Text >{info.getValue()} </Text>
      ),
    }),
    columnHelper.accessor("phone_number", {
      id: "phone_number",
      header: () => <Text fontWeight='bold'>phone_number</Text>,
      cell: (info) => (
        <Text >{info.getValue()} </Text>
      ),
    }),
    columnHelper.accessor("state", {
      id: "state",
      header: () => <Text fontWeight='bold'>state</Text>,
      cell: (info) => (
        <Text >{info.getValue() ?? 'NA'} </Text>
      ),
    }),
    columnHelper.accessor("last_contact", {
      id: "last_contact",
      header: () => <Text fontWeight='bold'>last_contact</Text>,
      cell: (info) => (
        <TimestampToDate timestamp={info.getValue()} /> 
      ),
    }),
    columnHelper.accessor("platform", {
      id: "platform",
      header: () => <Text fontWeight='bold'>platform</Text>,
      cell: (info) => (
        <Flex >{info.row.original?.platforms?.map(items=> <Badge m={5}>{items}</Badge>)} </Flex>
      ),
    }),
    columnHelper.accessor("FullChatbot", {
      id: "FullChatbot",
      header: () => 'FullChatbot Automation',
      cell: (info) => (
        <Flex ><Switch/></Flex>
      ),
    }),
  
  ];


 

    return ( 
        <Flex>
        <Sidebar />
        <Box flex="1" mt="50">
          <Flex justify='center' my={5} bg='wheat'><Text fontSize='25'>Turn The chatbot off or on for individual people</Text></Flex>
        <Box m={5}>  <RenderTable columns={columns} data={data}/>
        </Box >
          <Flex justify="flex-end" p="4">
            <IconButton
              aria-label="Toggle Color Mode"
              icon={colorMode === 'light' ? <FaMoon color={iconColor} /> : <FaSun color={iconColor} />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
        </Box>
      </Flex>
     );
}
export default AdminLayout;