import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const redirectToRegister = () => {
    router.push('/register');
  };

  return (
    <Center minH="100vh" bg="gray.100">
      <Box
        w="sm"
        p="8"
        borderRadius="md"
        bg="gray.300"
        boxShadow="base"
      >
        <VStack as="form" onSubmit={signIn} spacing="6">
          <FormControl id="email">
            <FormLabel colorScheme = "messenger">Email</FormLabel>
            <Input
              type="email"
              colorScheme = "messenger"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel colorScheme = "messenger">Password</FormLabel>
            <Input
              type="password"
              colorScheme = "messenger"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="messenger" width="100%">
            Login
          </Button>
          <Button
            onClick={redirectToRegister}
            colorScheme="messenger"
            variant="outline"
            width="100%"
          >
            Register
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
