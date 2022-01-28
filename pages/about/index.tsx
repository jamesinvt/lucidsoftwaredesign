import { FC } from 'react';
import { getLayout } from '../../layouts/MainLayout'
import Head from 'next/head';

const About = (): JSX.Element => {
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

About.getLayout = getLayout

export default About;