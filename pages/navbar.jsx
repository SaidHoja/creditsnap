import React from 'react';
import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { getAuth } from '@/config/fireBaseAuthContext';

const Navbar = () => {
    const router = useRouter();
    console.log(getAuth())
//   const { user, loading } = getAuth() ?? { user: null, loading: true };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Box bg="gray.400" px={8} py={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href="/" passHref>
          <Text fontSize="xl" fontWeight="bold" color="gray.700" cursor="pointer">
            CreditSnap
          </Text>
        </NextLink>
        <HStack spacing={10}>
          <NextLink href="/contact" passHref>
            <Text color="gray.700" cursor="pointer" fontWeight='semibold'>
              Account
            </Text>
            </NextLink>
                  {/* <Text>{user}</Text> */}
          <Button colorScheme="messenger" onClick={handleSignOut}>
            Sign Out
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
