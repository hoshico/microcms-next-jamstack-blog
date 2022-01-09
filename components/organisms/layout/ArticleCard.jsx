/* eslint-disable */
import { Box, Stack, Text } from '@chakra-ui/react';
import { memo } from 'react'

export const ArticleCard = memo((props) => {
  const { blogId, blogTitle } = props;
  return (  
    <Box w="260px" h="260px" bg="white" shadow="md" p={8} _hover={{ cursor: "pointer", opacity: 0.8}}>
      <Stack textAlign="center">
        <Text fontSize="lg" fontWeight="bold">{blogTitle}</Text>
      </Stack>
    </Box>
  )
});