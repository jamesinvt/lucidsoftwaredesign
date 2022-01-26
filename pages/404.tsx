import { FC } from 'react';
import { getLayout } from '../layouts/MainLayout';
import Head from 'next/head';

 const Custom404 = () => {
    return <h1>404 - How&apos;d ya end up here?</h1>
  }

Custom404.getLayout = getLayout

export default Custom404;