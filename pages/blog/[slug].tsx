import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
// import { getPostBySlug, getAllPosts } from "../../lib/mdx";
import { getLayout } from "../../layouts/MainLayout";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import path from 'path';
import fs from 'fs';

type PostProps = {
  post: string;
};

const Post: FC<IProps> = ({ source }): JSX.Element => {
  return (
    <div>
      <MDXRemote {...source} components={{}} />
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};
export const getStaticProps: GetStaticPaths = async ({params}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

Post.getLayout = getLayout;

export default Post;
