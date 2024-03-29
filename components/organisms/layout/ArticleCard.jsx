/* eslint-disable */
import Link from 'next/link'
//import Image from 'next/image'
import { Box, Image, Stack, Text } from '@chakra-ui/react'
import { memo } from 'react'
import { useGetCategoryImage } from '../../hooks/useGetCategoryImage'

export const ArticleCard = memo((props) => {
  const { blogId, blogTitle, blogCategory } = props
  
  return (
    <Link href={`/blog/${blogId}`}>
      <Box
        w={{ base:"100%",sm:"280px" }}
        h="450px"
        bg="white"
        shadow="md"
        p={5}
        mr={2}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
      >
        <Stack textAlign="center">
          {blogCategory ? (<Image w="300px" src={`/${blogCategory.name}.png`} />) : (<Image w="300px" src="/etc.png" />)}
        </Stack>
        {/*<useGetCategoryImage category={blogCategory.name} />*/}
        {/*{blogCategory ? <useGetCategoryImage category={blogCategory.name} /> : (<Image w="300px" src="/etc.png" width={300} height={300}/>)}*/}
        <Stack textAlign="center">
          <Text fontSize="lg" fontWeight="bold" mt={2} bg="gray.300">
            {blogTitle}
          </Text>
        </Stack>
      </Box>
    </Link>
  )
})
