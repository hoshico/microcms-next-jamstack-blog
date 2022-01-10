/* eslint-disable */
import { Box, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { memo } from 'react'

export const ArticleCard = memo((props) => {
  const { blogId, blogTitle, blogCategory } = props
  return (
    <Link href={`/blog/${blogId}`}>
      <Box
        w="300px"
        h="450px"
        bg="white"
        shadow="md"
        p={8}
        mr={5}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
      > 
        <Stack textAlign="center">
          {blogCategory ? (<Image w="300px" src={`${blogCategory.name}.png`} />) : (<Image w="300px" src="/etc.png" />)}
        </Stack>
        <Stack textAlign="center">
          <Text fontSize="lg" fontWeight="bold" mt={2} bg="gray.300">
            {blogTitle}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
})
