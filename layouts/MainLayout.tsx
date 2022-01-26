import type { ReactElement } from "react";
import { FC } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";

type Props = {
  children: JSX.Element;
  setTheme: () => void;
  isLightTheme: boolean;
};

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
