import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import { lightTheme, mediaQueries } from "./Themes";

import { Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";
import snake from "../assets/Images/snake.png";
import airdDB from "../assets/Images/airdbd.png"

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }

  `};
  ${mediaQueries(30)`

            &>*:nth-child(5){
              margin-bottom:4rem;
            }

  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-align: center;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);



  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);



  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const StyledImg = styled.img`
  width: 70%;
  height: 100%;
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

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main>
            <Title>
            <Develope width={40} height={40} /> Simple Snake Game
            </Title>
            <Description>
              A snake game with history score system.
            </Description>
            <Description>
              <StyledImg src={snake} alt="snake game" />
            </Description>
            <Description>
              <NavLink to="/skills/snake"><Button >Try it</Button></NavLink>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Air decibel Database
            </Title>
            <Description>
              A website that calculates air noise scores for cities around the world.
            </Description>
            <Description>
              <StyledImg src={airdDB} alt="Air dBd" />
            </Description>
            <Description>
              <a href='https://gitlab.com/fyerfox/airdbd' target="_blank" rel="noreferrer"><Button >Source Code</Button></a>
            </Description>
          </Main>
          <BigTitle text="Works" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
