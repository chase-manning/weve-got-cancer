import styled from "styled-components";
import Hero from "./components/Hero";

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
    </StyledApp>
  );
};

export default App;
