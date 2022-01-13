/* eslint-disable */
import { memo } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export const Header = memo(() => {
  return (
    <Flex
      as="nav"
      bg="gray.400"
      color="blackAlpha.700"
      align="center"
      justify="space-between"
      padding={{ base: 4, md: 5 }}
    >
      <Heading as="h1" fontSize="3xl">
        <Link href={`/`}>
          encode2
        </Link>
      </Heading>
      <Box mr={2}>
        <Link href={`/profile`} >
          プロフィール
        </Link>
      </Box>
    </Flex>
  )
})
