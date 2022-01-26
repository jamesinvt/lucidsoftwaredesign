import { FC } from 'react';
import { getLayout } from '../layouts/MainLayout';

 const Custom500: FC = () => {
    return <h1>Error 500 - Oh, you dun goofed...</h1>
  }

  Custom500.getLayout = getLayout

export default Custom500;