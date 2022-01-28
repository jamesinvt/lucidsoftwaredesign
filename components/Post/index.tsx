import { Article } from "../../types/posts";
import { MDXRemote } from "next-mdx-remote";

const SinglePost = ({ article }: { article: Article }) => {
  return (
    <div>
      <MDXRemote components={{}} {...article.mdx} />
    </div>
  );
};


export default SinglePost;
