import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { client } from "../libs/client";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { ArticleCard } from "../components/organisms/layout/ArticleCard";



export default function Home(props) {
  const { blog } = props;
  console.log(blog);
  return (
    <>
    <HeaderLayout></HeaderLayout>
    <Wrap p={{ base: 8, md: 10}}>
      {blog.map((blog) => (
        <WrapItem key={blog.id} mx="auto">
          <ArticleCard blogCategory={blog.category} blogId={blog.id} blogTitle={blog.title} ></ArticleCard>
        </WrapItem>
      ))}
    </Wrap>
    
    </>
    
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};