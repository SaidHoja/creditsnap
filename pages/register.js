import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const auth = getFirebaseAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
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
        <VStack as="form" onSubmit={handleRegister} spacing="6">
          <FormControl id="email">
            <FormLabel colorScheme="messenger">Email</FormLabel>
            <Input
              type="email"
              colorScheme="messenger"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel colorScheme="messenger">Password</FormLabel>
            <Input
              type="password"
              colorScheme="messenger"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          {error && (
            <Text color="red.500" fontSize="sm" textAlign="center">
              {error}
            </Text>
          )}
          <Button type="submit" colorScheme="messenger" width="100%">
            Register
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
