import styled from "styled-components";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import About from "./components/About";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100dvh;
  background: var(--bg);
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <StyledApp>
      <Hero />
      <Awards />
      <About />
    </StyledApp>
  );
};

export default App;
