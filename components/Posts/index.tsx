import { Article } from "../../types/posts";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

const Posts = ({ posts }: { posts: Article[]}) => {
  return (
    <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              as={`/blog/${post.id}`}
              href={`/blog/[id]`}
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
  );
};



export default Posts;
