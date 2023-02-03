import { lazy } from "react";
import styled, { ThemeProvider } from "styled-components";

import SnakeGame from './SnakeGame';
import { lightTheme} from "../../components/Themes";

//Components
const SocialIcons = lazy(() => import("../../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../../subComponents/LogoComponent"));

const Box = styled.div`
  text-align: center;
  padding-top: 8%;
`

const Snake = ()=>{
  return (
  <ThemeProvider theme={lightTheme}>
    <LogoComponent theme="light" />
    <PowerButton />
    <SocialIcons theme="light" />
    <Box>
      <h1>Simple Snake Game</h1>
      <br />
      <br />
      <SnakeGame/>
    </Box>
  </ThemeProvider>
  );
};

export default Snake;
