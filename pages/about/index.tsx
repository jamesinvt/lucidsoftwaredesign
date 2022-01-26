import { FC } from 'react';
import { getLayout } from '../../layouts/MainLayout'
import Head from 'next/head';

const Projects: FC = ({ posts }): JSX.Element => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main>
          Hey this is the About Me page
      </main>
    </>
  );
};

Projects.getLayout = getLayout

export default Projects;