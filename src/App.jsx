import './App.css';

import React, { useState } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ChakraProvider, Flex } from '@chakra-ui/react';

import AdminLayout from './screens/layout/admin';
import SignIn from './screens/layout/auth/login';
function App() {
	const isAuthenticated =  localStorage.getItem('authCookie');
	const LoggedInRoutes = [
		<Route path={`/admin`} component={AdminLayout} />,
		<Redirect from="/" to="/admin/default" />,
	  ];
	  const publicRoutes = [
		<Route path={`/admin`} component={SignIn} />,
		<Redirect from="/" to="/admin/default" />,
	  ];
	  
	 

	
  return (
    <ChakraProvider>
     	<HashRouter>
				<Switch>
					
							{[
					isAuthenticated && LoggedInRoutes,
					!isAuthenticated && publicRoutes,
						]}
					
					<Redirect from='/' to='/admin' />
				</Switch>
			</HashRouter>
  </ChakraProvider>
  );
}

export default App;
