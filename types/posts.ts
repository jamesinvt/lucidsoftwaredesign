import { MDXRemoteSerializeResult } from "next-mdx-remote";export 

interface Article {
    id: string;
    title: string;
    description: string;
    author: string;
    overImage: string
    iso8601date: string;
    content: string;
    mdx: MDXRemoteSerializeResult<Record<string, unknown>>;
  }
  
  export interface ArticlePath {
    params: {
      id: string;
    };
  }
  
  export interface ArticleData {
    id: string;
    title: string;
    description: string;
    author: string;
    iso8601date: string;
  }

export type PostProps = {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    frontMatter: Record<string, string>;
};