import React from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

const TipsToRaiseCreditScore = () => {
  const tips = [
    {
      title: 'How Many Lines of Credit Should I Have?',
      description: 'Maintain a healthy mix of credit accounts, including credit cards, loans, and mortgages.',
    },
    {
      title: 'Pay Your Bills On Time',
      description: 'Avoid late payments by setting up automatic payments or calendar reminders.',
    },
    {
      title: 'Reduce Your Credit Utilization Ratio',
      description: 'Keep your credit card balances low compared to your credit limits.',
    },
    {
      title: 'Monitor Your Credit Report',
      description: 'Regularly review your credit reports for errors and dispute inaccuracies.',
    },
    {
      title: 'Don’t Close Old Accounts',
      description: 'Keep your oldest accounts open to maintain a longer credit history.',
    },
    {
      title: 'Limit Hard Inquiries',
      description: 'Only apply for new credit when necessary to avoid multiple hard inquiries.',
    },
    {
      title: 'Diversify Your Credit Mix',
      description: 'A mix of different types of credit accounts can improve your credit score.',
    },
    {
      title: 'Build Credit with a Secured Credit Card',
      description: 'A secured credit card can help you establish or rebuild your credit history.',
    },
  ];

  return (
    <Box mt={8}>
      <Heading mb={4}>Tips to Raise Your Credit Score</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {tips.map((tip, index) => (
          <Box
            key={index}
            boxShadow="base"
            borderRadius="md"
            p={4}
            bg="white"
            minWidth="250px"
            maxWidth="350px"
            width="100%"
          >
            <Text fontWeight="bold" mb={2}>
              {tip.title}
            </Text>
            <Text>{tip.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TipsToRaiseCreditScore;
