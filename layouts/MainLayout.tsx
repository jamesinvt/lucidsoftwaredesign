import type { ReactElement } from "react";
import { FC } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import styled from "styled-components";
import { cssVars } from "../theme/ThemeProvider";

type Props = {
  children: JSX.Element;
  setTheme: () => void;
  isLightTheme: boolean;
};

const Container = styled.div`
  width: ${cssVars.spacing.container};
  margin: 0 auto;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
        <Content>{children}</Content>
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default MainLayout;
