import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  padding: 5rem;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 3rem;
  color: var(--primary);
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  color: var(--secondary);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: var(--primary);
  color: var(--bg);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Section = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 70dvh;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Section>
        <TextArea>
          <Header>Hero Section</Header>
          <SubHeader>With Styled Components</SubHeader>
          <Button>Click Me</Button>
        </TextArea>
      </Section>
      <Section>
        <Image src="/hero-02.png" alt="We've Got Cancer Book" />
      </Section>
    </StyledHero>
  );
};

export default Hero;
