import { FC } from 'react';
import { getLayout } from '../../layouts/MainLayout'
import Head from 'next/head';

const Blog: FC = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <main>
          Hey this is the Blogs page
      </main>
    </>
  );
};

Blog.getLayout = getLayout

export default Blog;