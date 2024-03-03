
import React from "react";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { RiEyeCloseLine } from "react-icons/ri";
  import { MdOutlineRemoveRedEye } from "react-icons/md";
  import { useForm } from "react-hook-form";
  import axios from "axios";
const SignIn = () => {
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
 
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const loginForm = useForm();
  const {
    handleSubmit,
    formState: { errors },

    control,
  } = loginForm;

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

    const onSignIn =async (values)=>{
   const param =  {
            "user_name": "Atomic_enrollment",
            "password": "Atomicenrollment24*"
        }
        try {
        //     const response =  await axios.post(
        //         'https://api.steamlined.solutions/api/v1/login',
        //         param,
        //         { withCredentials: true } // enable sending cookies
        //       );

        //   const cookieValue = response.headers['set-cookie']; // Get Set-Cookie header value
        //   // Store cookieValue in localStorage or sessionStorage for subsequent requests
        //   localStorage.setItem('authCookie', cookieValue);
        //   console.log(cookieValue);
       //   return data;
       
       const response = await fetch('https://api.steamlined.solutions/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
        credentials: 'include', // include cookies in the request
      });

       console.log(response)
       if (response.ok) {
        // Assuming the server responds with a Set-Cookie header upon successful login
        const cookieValue = response.headers.get('Set-Cookie');
        // Store cookieValue in localStorage or sessionStorage for subsequent requests
        localStorage.setItem('authCookie', "true");
        // Redirect to authenticated route or perform other actions upon successful login
      } else {
       console.log('Login failed. Please check your credentials.');
      }
          } catch (error) {
            console.log(error);
          }
         
    }

    return ( 
        <Flex position='relative' h='max-content'>
			<Flex
				h={{
					sm: 'initial',
					md: 'unset',
					lg: '100vh',
					xl: '97vh'
				}}
				w='100%'
				maxW={{ md: '66%', lg: '1313px' }}
				mx='auto'
				pt={{ sm: '50px', md: '0px' }}
				px={{ lg: '30px', xl: '0px' }}
				ps={{ xl: '70px' }}
				justifyContent='start'
				direction='column'>
                    
                    <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Sign In
          </Heading>
          <Text
            mb='36px'
            ms='4px'
           
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Enter your username and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
          
          <form onSubmit={handleSubmit(onSignIn)}>
          <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Username<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              {...loginForm.register("user_name", {
                required: "Username required",
              })}
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='username'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                {...loginForm.register("password", {
                    required: "password required",
                  })}
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color={textColor}
                  fontSize='sm'>
                  Keep me logged in
                </FormLabel>
              </FormControl>
            </Flex>
            <Button
              fontSize='sm'
              bg='cyan'
              type="submit"
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'>
              Sign In
            </Button>
          </FormControl>
        </form>
        </Flex>
      </Flex>

            		<Box
					display={{ base: 'none', md: 'block' }}
					h='100%'
					minH='100vh'
					w={{ lg: '50vw', '2xl': '44vw' }}
					position='absolute'
					right='0px'>
					
				</Box>
			
			</Flex>
		
		</Flex>
     );
}
 
export default SignIn;