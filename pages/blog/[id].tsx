import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getLayout } from "../../layouts/MainLayout";
import { serialize } from "next-mdx-remote/serialize";
import { Article } from '../../types/posts';
import { getPost, getPostsPaths, parseImages } from "../../lib";
import SinglePost from "../../components/Post";


const Post = ({ post }: { post: Article}) => {
  return (
    <div>
      <SinglePost article={post} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('test')
  const post: Article = getPost(params?.id as string);
  console.log('article')
  post.content = parseImages(post.content);
  post.mdx = await serialize(post.content);
  console.log(post.mdx)
  return {
    props: { post },
  };
};


export const getStaticPaths: GetStaticPaths = async () => {
  console.log('test')
    return {
      paths: await getPostsPaths(),
      fallback: false,
    };
};

Post.getLayout = getLayout;

export default Post;
