import React from 'react';
import {
  Box,
  Heading,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  HStack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

const CreditReports = () => {
  const creditScores = [750, 680, 720];
  const categories = [
    'Credit History',
    'Credit Utilization',
    'Length of Credit History',
    'Credit Mix',
    'New Credit',
  ];
  const arbitraryValues = [50, 30, 10, 5, 2];

  return (
    <Box overflowX="auto">
      <Heading m={4}>Credit Reports</Heading>
      <HStack spacing={4}>
        {creditScores.map((score, index) => (
          <Box
            key={index}
            boxShadow="base"
            borderRadius="md"
            p={4}
            bg="white"
            minWidth="300px"
            maxWidth="350px"
            width="100%"
            >
            <Text fontWeight="bold" mb={4}>Credit Score</Text>
            <CircularProgress
              value={(score * 100) / 850}
              color="green.400"
              size="100px"
              thickness="10px"
              mb={4}
            >
              <CircularProgressLabel fontSize="lg" fontWeight="bold">
                {score}
              </CircularProgressLabel>
            </CircularProgress>
            <VStack spacing={2} alignItems="start">
              {categories.map((category, i) => (
                <Box key={i}>
                  <Text fontWeight="bold">{category}</Text>
                  <Text>{arbitraryValues[i]}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default CreditReports;
