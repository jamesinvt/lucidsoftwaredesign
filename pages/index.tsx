import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getLayout } from '../layouts/MainLayout'
import styled from 'styled-components'
import heroImage from '../public/m_ccexpress.png';

const Hero = styled.section`
  min-height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width:100%;
`;
const Home = () => {
  return (
    <>
      <Hero>
        <div className="left">
          <h1>James Cameron</h1>
          <p>Simple, Clear</p>
          <p>Solutions</p>
          <button>Contact Me</button>
        </div>
        <div className="right">
          <Image src={heroImage} 
          width={700}
          height={700}/>
        </div>
      </Hero>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </>
  )
}

Home.getLayout = getLayout

export default Home
