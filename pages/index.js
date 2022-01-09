import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { client } from "../libs/client";
import { HeaderLayout } from "../components/templates/HeaderLayout";



export default function Home(props) {
  const { blog } = props;
  console.log(blog);
  return (
    <div>
      <HeaderLayout></HeaderLayout>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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