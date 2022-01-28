import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps } from "next";
import { getResume } from "../../lib";
import Head from "next/head";
import { getLayout } from "../../layouts/MainLayout";

interface Props {
  resumeMdx: MDXRemoteSerializeResult;
}

const About = ({ resumeMdx }: Props) => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <h1>About James Cameron</h1>
      <MDXRemote {...resumeMdx} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resume = getResume();
  const resumeMdx = await serialize(resume);

  return { props: { resumeMdx } };
};

About.getLayout = getLayout;

export default About;