import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

import { DarkTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/spaceman.png";
import Loading from '../subComponents/Loading';
import Resume from '../assets/Docs/aw_resume.pdf'

//Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
  import('../subComponents/ParticlesComponent')
)
const BigTitle = lazy(() => import('../subComponents/BigTitle'))


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  text-align: center;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

`

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: white;
    color: black;
  }
`;


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading/>}>
        <Box
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <LogoComponent theme='dark' />
          <PowerButton />
          <SocialIcons theme='dark' />
          <ParticlesComponent theme='dark' />

          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}>
              <img src={astronaut}  alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            <h2>
              Annan Wang
            </h2>
            I'm a software engineer at HubSpot with a strong background in web development and a passion to learn.
            I love to work out robust solutions for challenging problems.
            <br />
            <br />
            <h2>
              My Skills
            </h2>
            JavaScript/TypeScript, React, HTML, CSS, GraphQL, Selenium
            <br />
            Python, Java, C++, C#, SQL, MySQL, Git, RTL, Redux
            <br />
            <br />
            <h2><a href={Resume} target="_blank" rel="noreferrer"> <Button>My Resume</Button></a></h2>
            {' '}
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default AboutPage
