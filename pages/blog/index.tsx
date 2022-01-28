import { getLayout } from "../../layouts/MainLayout";
import Posts from "../../components/Posts";
import { Article } from "../../types/posts";
import { GetStaticProps } from "next";
import { getPosts } from "../../lib";

type Props = {
    post: any
}
const Blog = ({ posts }: {posts: Article[]}) => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Click the link below to navigate to a page generated by{" "}
        <code>next-mdx-remote</code>.
      </p>
      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts: Article[] = await getPosts();
  
    return {
      props: { posts },
    };
  };

Blog.getLayout = getLayout;

export default Blog;