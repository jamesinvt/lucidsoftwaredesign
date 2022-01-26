import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
type PostProps = {
  mdx: string;
};

const Post: FC<PostProps> = (props) => {
  return <div>hey</div>;
};


export default Post;
