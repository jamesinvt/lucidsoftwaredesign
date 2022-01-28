import { FC } from 'react';
import { getLayout } from '../../layouts/MainLayout'
import Head from 'next/head';

const Projects = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main>
          Hey this is the projects page
      </main>
    </>
  );
};

Projects.getLayout = getLayout

export default Projects;