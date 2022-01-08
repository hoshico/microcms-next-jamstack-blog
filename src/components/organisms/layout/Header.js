import { Flex, Heading } from '@chakra-ui/react'
import { memo } from 'react'

export const Header = () => {
  return (
    <Flex
      as="nav"
      bg="gray.400"
      color="blackAlpha.300"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Heading as="h1" fontSize="3xl">
        encode2
      </Heading>
    </Flex>
  )
}
