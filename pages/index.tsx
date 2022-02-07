import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getLayout } from '../layouts/MainLayout'
import styled from 'styled-components'
import heroImage from '../public/m_ccexpress.png';
import { cssRule, cssVars } from '../theme/ThemeProvider'

const Hero = styled.section`
  min-height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width:100%;
  margin:0;
`;

const Grid = styled.main`
  display: grid;
  gap: ${cssVars.spacing.gap};
  grid-template-areas: "cover" "dense-list" "list";
  ${cssRule.mdUp} {
    grid-template-areas: "cover" "list list  list";
    grid-template-columns: 2fr 1fr;
  }
`;

const Container = styled.div`
  background-color: ${cssVars.color.secondary};
  color: ${cssVars.color.onPrimary};
  height: 100vh;
  width:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AltContainer = styled(Container)`
  background-color: ${cssVars.color.primary};
`;
const Content = styled.div`
  width: ${cssVars.spacing.container};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const Card = styled.div`
  width: '100%';
  text-align: center;
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
          height={700}
          alt='The man, the myth, the legend'/>
        </div>
      </Hero>
      <Container>
        <Content>
          <Grid>
            <p>My name is James Cameron. I am a fullstack engineer with a passion for learning.</p>
            <Card>
              <h1>Vermont Tech</h1>
              <p>Bachelors in Software Engineering</p>
            </Card>
            <Card>
              <h1>Systems and Software</h1>
              <p>Software Engineer</p>
              <p>Javascript/Java/COBOL</p>
            </Card>
            <Card>
              <h1>Dealer.com</h1>
              <p>Support Developer/Support Operations Developer</p>
              <p>Javascript/NodeJS</p>
            </Card>
            </Grid>
        </Content>
      </Container>
      <AltContainer>
        <Content>
            <p>My name is James Cameron. I am a fullstack engineer with a passion for learning.</p>
            <Card>
              <h1>Lucid Sofware Designs</h1>
              <p>This site</p>
              <p>Next.js</p>
            </Card>
            <Card>
              <h1>Disc App</h1>
              <p>Desicription of app</p>
              <p>Javascript/NodeJS</p>
            </Card>
            <Card>
              <h1>Movie App</h1>
              <p>Desicription of app</p>
              <p>Javascript/NodeJS</p>
            </Card>
        </Content>
      </AltContainer>
      <Container>
        <Content>
        <h1>Contact Me</h1>
        <form className="cf">
          <div className="half left cf">
            <input type="text" id="input-name" placeholder="Name" />
            <input type="email" id="input-email" placeholder="Email address" />
            <input type="text" id="input-subject" placeholder="Subject" />
          </div>
          <div className="half right cf">
            <textarea name="message" id="input-message" placeholder="Message" />
          </div>  
          <input type="submit" value="Submit" id="input-submit" />
        </form>
        </Content>
      </Container>
    </>
  )
}

Home.getLayout = getLayout

export default Home
