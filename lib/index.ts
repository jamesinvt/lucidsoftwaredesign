import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Article, ArticlePath } from "../types/posts";

export const getFile = (dir: string) => {
    return (file: string) => {
      return fs.readFileSync(join(process.cwd(), dir, file), "utf-8");
    };
  };
  const getFiles = (dir: string): string[] => {
    return fs.readdirSync(join(process.cwd(), dir), "utf-8");
  };
  const getArticle = (file: string): Article => {
    let { data, content }: { data: any; content: string } = matter(file);
    return { ...data, content };
  };
  
  const getArticles = (dir: string): Article[] => {
    return getFiles(dir).map((fileName) => getArticle(getFile(dir)(fileName)));
  };
  
  export const getPosts = (): Article[] => {
    return getArticles("_markdown/blog");
  };

  export const getPost = (id: string): Article => {
    return getArticle(getFile("_markdown/blog")(id + ".mdx"));
  };

  export const getPostsPaths = (): ArticlePath[] => {
    return getPosts().map((post) => ({
      params: {
        id: post.id,
      },
    }));
  };

  export const getResume = (): string => {
    return getFile("_markdown/resume")("index.mdx");
  };

  export const parseImages = (articleContent: string): string => {
    return articleContent.replace(
      /!\[([^\[]+)\]\(([^\)]+)\)/g,
      `<div className="unset-img"> 
        <Image src='$2' alt='$1'  
          layout="fill" className="custom-img"
        />
      </div>`
    );
  };