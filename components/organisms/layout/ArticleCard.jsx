/* eslint-disable */
import { Box, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { memo } from 'react'

export const ArticleCard = memo((props) => {
  const { blogId, blogTitle, blogCategory } = props
  return (
    <Link href={`/blog/${blogId}`}>
      <Box
        w="260px"
        h="260px"
        bg="white"
        shadow="md"
        p={8}
        mr={5}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
      > 
        <Stack textAlign="left">
          {blogCategory && (
              <Text fontSize="sm" fontWeight="bold">
                {blogCategory.name}
              </Text>
            )}
        </Stack>
        <Stack textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            {blogTitle}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
})
