import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';
import { Icon } from '@chakra-ui/react';
import MainDashboard from './screens/home';
import About from './screens/home';
import DataTables from './screens/home';

export const routes = [
	{
		name: 'Main Dashboard',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainDashboard
	},
	{
		name: 'About',
		layout: '/admin',
		path: '/nft-marketplace',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: About,
		secondary: true
	},
	{
		name: 'Data Tables',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/data-tables',
		component: DataTables
	},
	
];