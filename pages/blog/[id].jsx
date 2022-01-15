import { Box, Flex, Spacer, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { HeaderLayout } from '../../components/templates/HeaderLayout'
import { client } from '../../libs/client'

export default function BlogId({ blog }) {
  return (
    <HeaderLayout>
      <Box w="80%" h="100%" p={{md: "50px 50px 100px", sm: "5px"}} mx="auto" shadow="lg">
        <Text fontSize={{base:"xl", md:"2xl"}} fontWeight="bold" mb={3} p="10px" bg="gray.300">
          {blog.title}
        </Text>
        <Flex>
          <Stack textAlign="left">
            <Text fontSize={{base:"sm", md:"2xl"}} fontWeight="semi-bold" mb={3} p="10px">
              {blog.publishedAt}
            </Text>
          </Stack>
          <Spacer />
          <Stack textAlign="left">
            <Text fontSize={{base:"sm", md:"2xl"}} fontWeight="bold" mb={3} p="10px">
              {blog.category && `カテゴリー: ${blog.category.name}`}
            </Text>
          </Stack>
        </Flex>
        
        <Stack textAlign="left">
          <Text fontSize={{base:"sm", md:"2xl"}} fontWeight="semi-bold" mb={3} p="10px">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
          </Text>
        </Stack>  
      </Box>
    </HeaderLayout>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
