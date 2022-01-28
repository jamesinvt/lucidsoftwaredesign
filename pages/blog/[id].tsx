import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { getLayout } from "../../layouts/MainLayout";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import path from "path";
import fs from "fs";
import Head from "next/head";
import { Article, PostProps } from '../../types/posts';
import { getPost, getPostsPaths, parseImages } from "../../lib";
import SinglePost from "../../components/Post";


const Post = ({ post }: { post: Article}) => {
  return (
    <div>
      <SinglePost article={post} />
    </div>
  );
};

// type Params = {
//   params: {
//     slug: string;
//   };
// };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: Article = getPost(params?.id as string);
  post.content = parseImages(post.content);
  post.mdx = await serialize(post.content);
  return {
    props: { post },
  };
};


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getPostsPaths(),
    fallback: false,
  };
};

Post.getLayout = getLayout;

export default Post;
